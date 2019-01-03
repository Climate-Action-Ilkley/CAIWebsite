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
            <OnePlanetNav area="Zero Waste" navStyle="waste"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Zero Waste</h2>
                        </header>
                        <h2>Reducing consumption, reusing and recycling to achieve zero waste and zero pollution</h2>
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
                      url="foodwaste"
                      projectTitle="Food Waste"
                      blurb="We are in talks with ReFood to recycle food waste and convert it into gas."
                      iconStyle="fa-apple"
                      styleIndex={6}
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
