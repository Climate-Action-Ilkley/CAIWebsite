import React from 'react'

import Layout from '../components/layout'
import OnePlanetNav from '../components/OnePlanetNav';
import ProjectContainer from '../components/ProjectsContainer';
import ProjectFeature from '../components/Feature';

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
            <OnePlanetNav area="Sustainable Water" navStyle="water"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Sustainable Water</h2>
                        </header>
                        <h2>Using water efficiently, protecting local water sources and reducing flooding and drought</h2>
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

                </ul>
              }
            />

        </div>
      </Layout>
    )
  }
}

export default Generic
