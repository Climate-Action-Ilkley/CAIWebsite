/**
 * Created by will on 16/01/19.
 */
import React from 'react';

const MemberProfile = ({picture, name, role}) => {
  return (
    <div className="headshot">
        {picture && <img src={picture.file.url}/>}
        <h3>{name}</h3>
        {role && <h5>{role}</h5>}
        {/*<h3>{lastName}</h3>*/}

    </div>
  )
};

export default MemberProfile;
