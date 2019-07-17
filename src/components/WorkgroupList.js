/**
 * Created by will on 10/01/19.
 */
import React from 'react';
import { Link } from 'gatsby'
import Feature from './Feature';

const WorkgroupList = ({workgroups: workgroups}) => {
  return (<div>
    <header className="major">
      <h2>Our Work Groups</h2>
      <p>We use the <a href="https://www.bioregional.com/one-planet-living" target="_blank" className="link">One Planet Living framework</a> to organise and plan our projects within the local community. They are split up into one of these 10 categories.</p>
        {/*<p>You can view a full list of our projects <Link to='/projects'>here.</Link></p>*/}
    </header>
    <ul className="features oneplanet">
      {workgroups.map(edge => {
        console.log(edge);
        return (
        <Feature
          url={edge.node.path}
          iconStyle={edge.node.className}
          title={edge.node.name}
          icon={edge.node.fontAwesomeIcon}
        />)})}
    </ul>
  </div>)
};

export default WorkgroupList;
