/**
 * Created by will on 10/01/19.
 */
import React from 'react';
import Feature from './Feature';

const OnePlanetAreaList = ({onePlanetAreas}) => {
  return (<div>
    <header className="major">
      <h2>One Planet Living Framework</h2>
      <p>We use the One Planet Living framework to organise and plan our projects within the local community. They are split up into one of these 10 categories.</p>
    </header>
    <ul className="features">
      {onePlanetAreas.map(edge => {
        console.log(edge);
        return (
        <Feature
          url={"oneplanet/" + edge.node.path}
          blurb={edge.node.description}
          styleIndex={2}
          title={edge.node.area}
          icon={edge.node.icon}
        />)})}
    </ul>
  </div>)
};

export default OnePlanetAreaList;