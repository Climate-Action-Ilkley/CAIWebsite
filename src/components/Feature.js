/**
 * Created by will on 14/12/18.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';



const Feature = ({ url, title, blurb, icon, styleIndex}) => {
  return (
    <li>
      <Link to={url}>
        <span className={"icon major style" + styleIndex + " " + icon}/>
        <h3>{title}</h3>
        <p>{blurb}</p>
      </Link>
    </li>
  )
};

Feature.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  styleIndex: PropTypes.number.isRequired
};

export default Feature;