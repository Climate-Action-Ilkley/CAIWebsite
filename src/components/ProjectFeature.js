/**
 * Created by will on 14/12/18.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';



const ProjectFeature = ({ url, projectTitle, blurb, iconStyle, styleIndex}) => {
  return (
    <li>
      <Link to={"projects/" + url}>
        <span className={"icon major style" + styleIndex + " " + iconStyle}/>
        <h3>{projectTitle}</h3>
        <p>{blurb}</p>
      </Link>
    </li>
  )
};

ProjectFeature.propTypes = {
  url: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  styleIndex: PropTypes.number.isRequired
};

export default ProjectFeature;