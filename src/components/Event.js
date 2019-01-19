/**
 * Created by will on 19/01/19.
 */
import React from 'react';

const Event = ({event}) => {
  return (
    <div className="event">
      <header className="major">
        <h2>{event.name}</h2>
        <h3>Venue : {event.venue}</h3>
        <h3><span>Time : {event.time}</span> <span>Date: {event.date}</span></h3>
        <h3>{event.description}</h3>
      </header>


    </div>
  )
};

export default Event;