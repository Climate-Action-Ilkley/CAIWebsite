import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav'

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

                    <h2>Food Waste</h2>
                  </header>
                  <h2>We are in talks with ReFood to recycle food waste and convert it into gas.</h2>
              </div>
              <span className="image"><span className="icon major style6 fa-apple"/></span>
          </div>
      </section>
      </div>
      </Layout>
    )
  }
}

export default Generic
