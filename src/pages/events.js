import React from 'react'

import Event from '../components/Event';
import Layout from '../components/layout'

const Events = ({ data }) => {

  const getFutureEvents = (eventEdges) => {
    const events = filterEvents(eventEdges)

    if (eventEdges.length === 0) {
      return <h2>No Upcoming Events</h2>
    } else {
      return <div>
        {eventEdges.map(edge => {
          return <Event event={edge.node}/>
        })}
      </div>
    }
  };

  const filterEvents = (eventEdges) => {
      const events = eventEdges.filter(eventEdge => {
          console.log("edge", eventEdge.node.eventDate)
          const eventDate = new Date(eventEdge.node.eventDate);

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
          {getFutureEvents(data.allContentfulEvent.edges)}
        </section>
      </div>
    </Layout>
  )
}

export const eventQuery =     graphql`
      query allEvents
          {
              allContentfulEvent(sort: {order: ASC, fields: [eventDate]} ) {
              edges {
                  node {
                      eventDate
                      venueName
                      name
                      description
                      registrationLink
                  }
              }
          }
       }


    `

export default Events
