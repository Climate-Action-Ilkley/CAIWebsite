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
              allEventsJson(sort: {order: ASC, fields: [date]}, limit: 1) {
              edges {
                  node {
                      date
                      venue
                      time
                      name
                      description
                  }
              }
          }
}


    `}
               render={data => {
                 console.log(data.allEventsJson);
                 return <Event event={data.allEventsJson.edges[0].node}/>;
               }}
  />
  );

export default UpcomingEvent;