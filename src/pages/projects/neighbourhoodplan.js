import React from 'react'

import Layout from '../../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>Ilkley Neighbourhood Plan</h2>
            <h3>One Planet Living: Zero Carbon</h3>
            <h3>Objectives</h3>
            <ul>
                <li>Create a sustainable plan for the future of Ilkley</li>
                <li>...</li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
