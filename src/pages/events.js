import React from 'react'

import Event from '../components/Event';
import Layout from '../components/layout'

const Events = ({ data }) => {

  const getFutureEvents = (eventEdges) => {
    const events = filterEvents(eventEdges)

    if (events.length === 0) {
      return <h2>No Upcoming Events</h2>
    } else {
      return <div>
        {events.map(event => {
          return <Event event={event}/>
        })}
      </div>
    }
  };

  const filterEvents = (eventEdges) => {
    const events = eventEdges.filter(eventEdge => {
      const eventDate = new Date(Date.parse(eventEdge.node.date));

      if (eventDate > Date.now()) {
        return eventEdge.node;
      }
    });
    console.log(events);

    return events;
  }



  return (
    <Layout>

      <div id="main">
        <section id="content" className="main">
          {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
          <h2>Upcoming Events</h2>
          {getFutureEvents(data.allEventsJson.edges)}
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
