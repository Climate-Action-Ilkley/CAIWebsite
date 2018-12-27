import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';

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

                          <h2>Community Energy Company</h2>
                        </header>
                        <h2>Set up a local, profitable renewable energy company ran by the community for the community</h2>
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
