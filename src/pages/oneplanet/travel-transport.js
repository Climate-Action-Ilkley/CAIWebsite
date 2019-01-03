import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';
import ProjectContainer from '../../components/ProjectsContainer';
import ProjectFeature from '../../components/ProjectFeature';

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
            <OnePlanetNav area="Travel and Transport" navStyle="transport"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Travel and Transport</h2>
                        </header>
                        <h2>Reducing the need to travel, and encouraging walking, cycling and low carbon transport </h2>
                    </div>
                    <span className="image"><span className="icon major style2 fa-bolt"/></span>
                </div>
            </section>

            <ProjectContainer 
              plannedProjects={
                <ul className="features">
              </ul>
              }
              activeProjects={
                <ul className="features">
                  <ProjectFeature
                    url="electriccarclub"
                    projectTitle="Electric Car Club"
                    blurb="We plan for a electric car club giving members of Ilkley an alternate option to a second car."
                    iconStyle="fa-car"
                    styleIndex={1}
                  />
                </ul>
              }
            />

        </div>
      </Layout>
    )
  }
}

export default Generic
