import React from 'react';
import ProjectFeature from './ProjectFeature';

const PlannedProjectList = () => {
    return (
        <ul className="features">
        <ProjectFeature
          url="communityenergy"
          projectTitle="Community Energy Company"
          blurb="We want to set up a community energy company that produces local renewable energy, that is then sold locally."
          iconStyle="fa-bolt"
          styleIndex={4}
        />
      </ul>
    )
}

export default PlannedProjectList;