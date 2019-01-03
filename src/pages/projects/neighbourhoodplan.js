import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';


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

                          <h2>Neighbourhood Plan</h2>
                        </header>
                        <h2>We aim to influence the neighbourhood plan to include concrete action on climate change.</h2>
                    </div>
                    <span className="image"><span className="icon major style2 fa-users"/></span>
                </div>
            </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
