import React from 'react'

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="warming" className="main special">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Warming</h2>

            </header>
            <p>Some content about warming</p>
          </section>

          <section id="us" className="main special">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Us</h2>

            </header>
            <p>Some content about warming</p>
          </section>
          <section id="sure" className="main special">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We're Sure</h2>

            </header>
            <p>Why are we sure</p>
          </section>
          <section id="bad" className="main special">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Bad</h2>

            </header>
            <p>Some content about warming</p>
          </section>
          <section id="fix" className="main special">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We can fix it</h2>

            </header>
            <p>Some content about warming</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
