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
            <OnePlanetNav area="Equity and Local Economy" navStyle="equity"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Equity and Local Economy</h2>
                        </header>
                        <h2>Creating safe, equitable places to live and work which support local prosperity and international fair trade</h2>
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
