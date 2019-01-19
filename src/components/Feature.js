/**
 * Created by will on 14/12/18.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';



const Feature = ({ url, title, blurb, icon, iconStyle}) => {
  return (
    <li>
      <Link to={url}>
        <div>
          <span className="icon plus fa-plus"/>
        <span className={"icon major " + iconStyle + " " + icon}/>
        <h3>{title}</h3>
          </div>
      </Link>
    </li>
  )
};

Feature.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired
};

export default Feature;