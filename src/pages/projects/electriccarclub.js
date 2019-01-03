import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
            <OnePlanetNav area="Travel and Transport" navStyle="transport"/>

            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">

                          <h2>Eletric Car Club</h2>
                        </header>
                        <h2>We plan for a electric car club giving members of Ilkley an alternate option to a second car.</h2>
                    </div>
                    <span className="image"><span className="icon major style1 fa-car"/></span>
                </div>
            </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
