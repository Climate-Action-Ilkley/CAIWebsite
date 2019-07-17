/**
 * Created by will on 14/12/18.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'gatsby';


const Feature = ({url, title, icon, iconStyle, isExternalLink}) => {
    const FeatureContent = () => <div>
        <span className="icon plus fa-plus"/>
        <span className={"icon major " + iconStyle + " " + icon}/>
        <h3>{title}</h3>
    </div>
    return (
        <li>
            {
                isExternalLink ?
                    <a href={url} target="_blank">
                        <FeatureContent/>
                    </a>
                    :

                    <Link to={url}>
                        <FeatureContent/>
                    </Link>

            }

        </li>
    )
};

Feature.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconStyle: PropTypes.string.isRequired
};

export default Feature;
