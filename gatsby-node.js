const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const workgroupTemplate = path.resolve('src/templates/workgroup-page.js');
    const projectTemplate = path.resolve('src/templates/project-page.js');
    return graphql(`
        {
          allContentfulWorkgroup{
            edges {
              node {
                path 
         
              }
            }
          }
          allContentfulProject {
            edges {
                node {
                    path
                    workgroup {
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
            console.log("Create Workgroup", edge.node.path)
            createPage({
                path: edge.node.path,
                component: workgroupTemplate,
                context: {
                    pathName: edge.node.path
                }
            })


        })

        result.data.allContentfulProject.edges.forEach(edge => {
            console.log("Create project", edge.node.path)
            createPage({
                path: edge.node.workgroup.path + "/" + edge.node.path,
                component: projectTemplate,
                context: {
                    pathName: edge.node.path
                }
            })
        })
    })

}
;

