import React from 'react'

import Layout from '../../components/layout'
import OnePlanetNav from '../../components/OnePlanetNav';

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
        </div>
      </Layout>
    )
  }
}

export default Generic
