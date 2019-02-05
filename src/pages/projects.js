import React from 'react'
import ProjectFeaturesContainer from "../components/ProjectFeaturesContainer";

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    let projects = this.props.data.allProjectsJson;
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
    query allProjectsJson {
        allProjectsJson {
            edges {
                node {
                    iconName
                    state
                    projectTitle
                    projectBlurb
                    onePlanetArea
                    onePlanetStyle
                }
            }

        }
    }
`;

export default Generic
