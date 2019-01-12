import React from 'react';
import {Link} from 'gatsby';

const OnePlanetNav = ({area, navStyle, areaUrl}) => {
    if (typeof window === `undefined`) {
        return <div/>
    }
    const { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } = require("mdbreact");
    return (
        <div className={"one-planet-nav " + navStyle}>
            <Link to="/"><span className={"icon fa-lg fa-home"}/></Link>
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
            <h2><Link to={"oneplanet/" + getOnePlanetAreaUrl(area)}>{area}</Link></h2>
        </div>
    )

};

function getOnePlanetAreaUrl(area) {
  switch(area) {
    case "Culture and Community":
      return "culture-community";
    case "Equity and Local Economy":
      return "equity-economy";
    case "Health and Happiness":
      return "health-happiness";
    case "Land and Nature":
      return "land-nature";
    case "Materials and Products":
      return "materials-products";
    case "Sustainable Food":
      return "sustainable-food";
    case "Sustainable Water":
      return "sustainable-water";
    case "Travel and Transport":
      return "travel-transport";
    case "Zero Carbon":
      return "zero-carbon";
    case "Zero Waste":
      return "zero-waste";
    default:
      return "/" ;
  }
}


export default OnePlanetNav;