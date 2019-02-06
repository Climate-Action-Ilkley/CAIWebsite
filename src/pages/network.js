import React from 'react'

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            <header className="major">
              <h2>Local Groups</h2>
            </header>
            <span className="image main"></span>
            <h2><a href="https://www.zerocarbonharrogate.org.uk/" target="_blank">Zero Carbon Harrogate</a></h2>
            <h2><a href="http://leeds.candocities.org/about-leeds-climate-commission" target="_blank">Leeds Climate Commission</a></h2>
            <h2><a href="https://www.sheffieldclimatealliance.net/" target="_blank">Sheffield Climate Alliance</a></h2>
            <h2><a href="http://www.zerocarbonyorkshire.org" target="_blank">Zero Carbon Yorkshire</a></h2>



          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
