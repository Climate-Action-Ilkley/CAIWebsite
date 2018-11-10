import React from 'react'
import {Link} from 'gatsby';

import logo from '../assets/images/header.png';

const Header = (props) => (
    <header id="header" className="alt">
        <Link className="logo" to="/"><img src={logo} alt="" /></Link>
    </header>
)

export default Header
