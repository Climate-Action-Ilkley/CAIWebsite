import React from 'react';
import ProjectFeature from './ProjectFeature';

const ActiveProjectList = () => {
    return (
        <ul className="features">
        <ProjectFeature
          url="neighbourhoodplan"
          blurb="We aim to influence the neighbourhood plan to include concrete action on climate change."
          projectTitle="Neighbourhood Plan"
          iconStyle="fa-users"
          styleIndex={2}
        />
        <ProjectFeature
          url="electriccarclub"
          projectTitle="Electric Car Club"
          blurb="We plan for a electric car club giving members of Ilkley an alternate option to a second car."
          iconStyle="fa-car"
          styleIndex={1}
        />
        <ProjectFeature
          url="foodwaste"
          projectTitle="Food Waste"
          blurb="We are in talks with ReFood to recycle food waste and convert it into gas."
          iconStyle="fa-apple"
          styleIndex={6}
        />
      </ul>
    )
}

export default ActiveProjectList;