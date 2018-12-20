import React from 'react'

import Layout from '../../components/layout'
import logo from "../../assets/images/web-icon.png";

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
            <section id="intro" className="main">
                <div className="spotlight">
                    <div className="content">
                        <header className="major">
                            <h3>One Planet Living: Zero Carbon</h3>

                          <h2>Community Energy Company</h2>
                        </header>
                        <h2>Set up a local, profitable renewable energy company ran by the community for the community</h2>
                    </div>
                    <span className="image"><span className="icon major style2 fa-bolt"/></span>
                </div>
            </section>
          {/*<section id="content" className="main">*/}
            {/*/!*<span className="image main"><img src={pic04} alt="" /></span>*!/*/}
            {/*<h2>Community Energy Company</h2>*/}

            {/*<h3>Objectives</h3>*/}
            {/*<ul>*/}
              {/*<li>Generate renewable energy locally</li>*/}
              {/*<li>Sell local energy to the local community</li>*/}
            {/*</ul>*/}
          {/*</section>*/}
        </div>
      </Layout>
    )
  }
}

export default Generic
