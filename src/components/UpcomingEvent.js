/**
 * Created by will on 19/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";

import Event from './Event';

const UpcomingEvent = () => (
  <StaticQuery query={
    graphql`
      query upcomingEventQuery
          {
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


    `}
               render={data => {
                 console.log(data.allEventsJson);
                 return getUpcomingEvent(data.allEventsJson.edges);
               }}
  />
  );

const getUpcomingEvent = (eventEdges) => {
  const events = filterEvents(eventEdges);

  if (events.length === 0) {
    return <h2>No Upcoming Events</h2>
  } else {
    return <Event event={events[0].node}/>
  }
}

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
export default UpcomingEvent;
