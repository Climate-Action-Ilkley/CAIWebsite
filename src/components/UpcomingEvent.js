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
              allContentfulEvent(sort: {order: ASC, fields: [eventDate]}, limit: 3) {
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


    `}
               render={data => {
                 console.log(data.allContentfulEvent);
                 return getUpcomingEvent(data.allContentfulEvent.edges);
               }}
  />
  );

const getUpcomingEvent = (eventEdges) => {
  const events = filterEvents(eventEdges);

  if (events.length === 0) {
    return <h2>No Upcoming Events</h2>
  } else {
      return (<ul className="features events">
          {events.map(event => {
            return <li>
                <Event event={event.node}/>
            </li>
          })}
      </ul>)
  }
}

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
export default UpcomingEvent;
