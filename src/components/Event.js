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
        <h3><span>Date: {formatDate(event.date)}</span></h3>

        <bu><span>Time : {event.time}</span> </bu>
        <h3>{event.description}</h3>
        {event.link !== "" ? <a className="button primary" href={event.link} target="_blank">Sign Up</a> : null}

      </header>


    </div>
  )
};

function formatDate(dateString) {
  console.log(dateString)
  let date = new Date(Date.parse(dateString))
  return date.getDate()  + " / " + (date.getMonth()+1) + " / " + date.getFullYear()
}

export default Event;