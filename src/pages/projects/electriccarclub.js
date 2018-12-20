import React from 'react'

import Layout from '../../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>Electric Car Club</h2>
            <h3>One Planet Living: Travel and transport</h3>
            <h3>Objectives</h3>
            <ul>
                <li>Generate renewable energy locally</li>
                <li>Sell local energy to the local community</li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
