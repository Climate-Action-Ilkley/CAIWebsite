/**
 * Created by will on 19/01/19.
 */
import React from 'react';

const Event = ({event}) => {
  console.log(event)
  return (
    <div className="event">
      <header className="major">
        <h2>{event.name}</h2>
        <h3>Venue : {event.venueName}</h3>
        <h3><span>Date: {formatDate(event.eventDate)}</span></h3>

        <h3><span>Time : {formatTime(event.eventDate)}</span> </h3>
        <h3>{event.description}</h3>
        {event.registrationLink !== "" ? <a className="button primary" href={event.registrationLink} target="_blank">Sign Up</a> : null}

      </header>


    </div>
  )
};

function formatDate(date) {
  console.log(date)
  let dateObject = new Date(date)
  return dateObject.getDate()  + " / " + (dateObject.getMonth()+1) + " / " + dateObject.getFullYear()
}

function formatTime(date) {

    let dateObj = new  Date(date)
    let hours = dateObj.getHours().toString().length === 1 ? "0" + dateObj.getHours() : dateObj.getHours();
    let minutes = dateObj.getMinutes().toString().length == 1 ? "0" + dateObj.getMinutes() : dateObj.getMinutes();
    return hours + ":" + minutes
}



export default Event;
