const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`{
        allProjectsJson(limit: 1000) {
          edges {
            node {
              path
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create image post pages.
        const projectTemplate = path.resolve(`src/templates/project-page.js`);
        // We want to create a detailed page for each
        // Instagram post. Since the scrapped Instagram data
        // already includes an ID field, we just use that for
        // each page's path.
        result.data.allProjectsJson.edges.forEach(edge => {
            // Gatsby uses Redux to manage its internal state.
            // Plugins and sites can use functions like "createPage"
            // to interact with Gatsby.
            createPage({
                // Each page is required to have a `path` as well
                // as a template component. The `context` is
                // optional but is often necessary so the template
                // can query data specific to each page.
                path: ("projects/" + edge.node.path),
                component: projectTemplate,
                context: {
                    pathName: edge.node.path,
                },
            })
        })
    })
}
