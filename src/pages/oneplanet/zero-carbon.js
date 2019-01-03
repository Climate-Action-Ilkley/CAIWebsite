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
            <OnePlanetNav area="Zero Carbon" navStyle="carbon"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Zero Carbon</h2>
                        </header>
                        <h2>Making buildings and manufacturing energy efficient and supplying all energy with renewables</h2>
                    </div>
                    <span className="image"><span className="icon major style2 fa-bolt"/></span>
                </div>
            </section>

            <ProjectContainer 
              plannedProjects={
                <ul className="features">
                  <ProjectFeature
                    url="communityenergy"
                    projectTitle="Community Energy Company"
                    blurb="We want to set up a community energy company that produces local renewable energy, that is then sold locally."
                    iconStyle="fa-bolt"
                    styleIndex={4}
                  />
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
