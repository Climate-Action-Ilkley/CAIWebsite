import React from 'react';
import {Link, StaticQuery} from 'gatsby';
import WorkgroupList from "./WorkgroupList";

const WorkgroupNav = ({navName, className}) => {
    if (typeof window === `undefined`) {
        return <div/>
    }
    const {MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} = require("mdbreact");
    return (


        <div className={"one-planet-nav " + className}>
            <Link to="/"><span className={"icon fa-lg fa-home"}/></Link>
            <MDBDropdown>
                <MDBDropdownToggle left caret color="none">
                    {navName}
                </MDBDropdownToggle>
                <MDBDropdownMenu left basic>
                    <StaticQuery query={
                        graphql`
                            query workgroupNavBar {
                                  allContentfulWorkgroup {
                                    edges {
                                      node {
                                        path
                                        name
                                      }
                                    }
                                  }
                            }

                          `
                        }
                         render={data => {
                             console.log("NAV BAR", data.allContentfulWorkgroup)
                             return data.allContentfulWorkgroup.edges.map(workgroup => {
                                 console.log("WORKGROUP", workgroup.node.name)
                                 return (<Link to={workgroup.node.path}>
                                     <MDBDropdownItem>{workgroup.node.name}</MDBDropdownItem>
                                 </Link>)
                             })

                         }
                         }/>
                </MDBDropdownMenu>
            </MDBDropdown>
            {/*<h2><Link to={"oneplanet/" + getOnePlanetAreaUrl(area)}>{area}</Link></h2>*/}
        </div>
    )

};



export default WorkgroupNav;
