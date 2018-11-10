import React from 'react'

import Layout from '../components/layout'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>Our Events Calendar</h2>
            <iframe src="https://calendar.google.com/calendar/embed?src=e2qbfiobhpcsea7ohqqcfshjhg%40group.calendar.google.com&ctz=Europe%2FLondon" style={{"border": 0, width:"800px", height:"600px", frameborder:"0", scrolling:"no"}}></iframe>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
