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
            <OnePlanetNav area="Local and Sustainable Food" navStyle="food"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Local and Sustainable Food</h2>
                        </header>
                        <h2>Promoting sustainable humane farming and healthy diets in local, seasonal organic food and vegetable protein</h2>
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
