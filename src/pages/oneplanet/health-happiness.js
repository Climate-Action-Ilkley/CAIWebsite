import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
            <OnePlanetNav area="Health and Happiness"/>

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
        </div>
      </Layout>
    )
  }
}

export default Generic