import React from 'react'

import Event from '../components/Event';
import Layout from '../components/layout'

const Events = ({data}) => {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <h2>Upcoming Events</h2>
            {data.allEventsJson.edges.map(eventEdge => {
              return <Event event={eventEdge.node}/>
            })}
          </section>
        </div>
      </Layout>
    )
}

export const eventQuery = graphql`
  query eventsQuery {
      allEventsJson(sort: {order: ASC, fields: [date]}) {
          edges {
              node {
                  date
                  venue
                  time
                  name
                  description
                  link
              }
          }
      }
  }
`

export default Events
