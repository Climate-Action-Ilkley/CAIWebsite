/**
 * Created by will on 16/01/19.
 */
import React from 'react';

const ProfileImage = ({imgSrc}) => {
  return (
    <div className="headshot">
      <img src={imgSrc}/>
    </div>
  )
};

export default ProfileImage;