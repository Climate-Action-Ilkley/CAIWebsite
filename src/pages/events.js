import React from 'react'

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>Events Calendar</h2>
            <iframe src="https://calendar.google.com/calendar/b/1/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=e2qbfiobhpcsea7ohqqcfshjhg%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FLondon" style={{"border": 0, width:"100%", height:"100%", frameborder:"0", scrolling:"no"}}></iframe>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
