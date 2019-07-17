const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const workgroupTemplate = path.resolve('src/templates/workgroup-page.js');
    const projectTemplate = path.resolve('src/templates/project-page.js');
    return graphql(`
        {
          allContentfulWorkgroup (limit:100) {
            edges {
              node {
                path 
                projects {
                    path
                }           
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
            reject(result.errors)
        }
        result.data.allContentfulWorkgroup.edges.forEach((edge) => {
            createPage({
                path: edge.node.path,
                component: workgroupTemplate,
                context: {
                    pathName: edge.node.path
                }
            })
            if (edge.node.projects) {
                edge.node.projects.forEach(project => {
                    console.log("PROJECT", project)
                    createPage({
                        path: edge.node.path + "/" + project.path,
                        component: projectTemplate,
                        context: {
                            pathName: project.path
                        }
                    })
                })
            }


        })
    })

}
;

