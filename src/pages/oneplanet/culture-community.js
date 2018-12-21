import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
            <OnePlanetNav area="Culture and Community"/>

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
        </div>
      </Layout>
    )
  }
}

export default Generic