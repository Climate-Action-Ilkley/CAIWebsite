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
            <OnePlanetNav area="Health and Happiness" navStyle="health"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Health and Happiness</h2>
                        </header>
                        <h2>Encouraging active, sociable, meaningful lives to promote good health and wellbeing</h2>
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
