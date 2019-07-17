import React from 'react'
import ProjectFeaturesContainer from "../components/ProjectFeaturesContainer";

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    let projects = this.props.data.allContentfulProject.edges.map(edge => edge.node)
    console.log(projects)
    return (
      <Layout>

        <div id="main">
          <ProjectFeaturesContainer projects={projects}/>
        </div>
      </Layout>
    )
  }
}

export const allProjectPageQuery = graphql`
        query allContentfulProject {
          allContentfulProject {
            edges {
                node {
                    name
                    path
                    purpose
                    isActive
                    workgroup {
                        path
                    }
                  }
              }
          }

        }
    `;

export default Generic
