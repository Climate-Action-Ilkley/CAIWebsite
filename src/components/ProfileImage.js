/**
 * Created by will on 16/01/19.
 */
import React from 'react';

const ProfileImage = ({imgSrc, firstName, lastName}) => {
  return (
    <div className="headshot">
      <img src={imgSrc}/>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>

    </div>
  )
};

export default ProfileImage;