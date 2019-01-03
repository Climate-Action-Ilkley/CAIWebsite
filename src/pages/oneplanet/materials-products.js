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
            <OnePlanetNav area="Materials and Products" navStyle="materials"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Materials and Products</h2>
                        </header>
                        <h2>Using materials from sustainable sources and promoting products which help people reduce consumption</h2>
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
