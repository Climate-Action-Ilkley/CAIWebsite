/**
 * Created by will on 19/01/19.
 */
import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

const BasicsItem = ({itemStyle, iconStyle, linkUrl, itemTitle}) => {
  return (
    <li className={itemStyle}>
      <Link to={linkUrl}>
      <div className="basics-container">
        <span className="icon plus fa-plus"/>
          <span className={"icon " + iconStyle}/>
          <strong>{itemTitle}</strong>
      </div>
      </Link>
    </li>
  )
};

BasicsItem.propTypes = {
  itemStyle: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired
}

export default BasicsItem;