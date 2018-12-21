import React from 'react';
import {Link} from 'gatsby';

const OnePlanetNav = ({area}) => {
    if (typeof window === `undefined`) {
        return <div>Zero Carbon</div>
    }
    const { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } = require("mdbreact");
    return (
        <div className="one-planet-nav">
            <MDBDropdown>
                <MDBDropdownToggle left caret color="none">
                    One Planet Living
                </MDBDropdownToggle>
                <MDBDropdownMenu  left basic >
                    <Link to="oneplanet/health-happiness"><MDBDropdownItem>Health and happiness</MDBDropdownItem></Link>
                    <Link to="oneplanet/equity-economy"><MDBDropdownItem>Equity and local economy</MDBDropdownItem></Link>
                    <Link to="oneplanet/culture-community"><MDBDropdownItem>Culture and community</MDBDropdownItem></Link>
                    <Link to="oneplanet/land-nature"><MDBDropdownItem>Land and nature</MDBDropdownItem></Link>
                    <Link to="oneplanet/sustainable-water"><MDBDropdownItem>Sustainable water</MDBDropdownItem></Link>
                    <Link to="oneplanet/sustainable-food"><MDBDropdownItem>Local and sustainable food</MDBDropdownItem></Link>
                    <Link to="oneplanet/materials-products"><MDBDropdownItem>Materials and products</MDBDropdownItem></Link>
                    <Link to="oneplanet/travel-transport"><MDBDropdownItem>Travel and transport</MDBDropdownItem></Link>
                    <Link to="oneplanet/zero-waste"><MDBDropdownItem>Zero waste</MDBDropdownItem></Link>
                    <Link to="oneplanet/zero-carbon"><MDBDropdownItem>Zero carbon</MDBDropdownItem></Link>
                </MDBDropdownMenu>
            </MDBDropdown>
            <h2>{area}</h2>
        </div>
    )

}


export default OnePlanetNav;