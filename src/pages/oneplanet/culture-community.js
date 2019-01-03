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
            <OnePlanetNav area="Culture and Community" navStyle="culture"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Culture and Community</h2>
                        </header>
                        <h2>Nurturing local identity and heritage, empowering communities and promoting a culture of sustainable living.</h2>
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
                    url="neighbourhoodplan"
                    blurb="We aim to influence the neighbourhood plan to include concrete action on climate change."
                    projectTitle="Neighbourhood Plan"
                    iconStyle="fa-users"
                    styleIndex={2}
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
