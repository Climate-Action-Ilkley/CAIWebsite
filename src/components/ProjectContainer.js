import React from "react";
import classnames from "classnames";


class ProjectContainer extends React.Component {

    state = {
        activeItemPills: "1",
    }


    togglePills = (tab) => {
        if (this.state.activePills !== tab) {
            this.setState({
                activeItemPills: tab
            });
        }
    }

    render() {
        if (typeof window === `undefined`) {
            return <div>Projects</div>
        }
        const { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } = require("mdbreact");

        return (
            <div>
            <MDBContainer>
                <MDBNav pills color="secondary">
                    <MDBNavItem>
                        <MDBNavLink to="#" className={classnames({ active: this.state.activeItemPills==="1" })} onClick={()=> {
                            this.togglePills("1");
                        }}
                        >
                            Active Projects
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#" className={classnames({ active: this.state.activeItemPills==="2" })} onClick={()=> {
                            this.togglePills("2");
                        }}
                        >
                            Future Projects
                        </MDBNavLink>
                    </MDBNavItem>

                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItemPills}>
                    <MDBTabPane tabId="1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nihil odit magnam minima, soluta doloribus reiciendis
                            molestiae placeat unde eos molestias. Quisquam aperiam,
                            pariatur. Tempora, placeat ratione porro voluptate odit
                            minima.
                        </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nihil odit magnam minima, soluta doloribus reiciendis
                            molestiae placeat unde eos molestias. Quisquam aperiam,
                            pariatur. Tempora, placeat ratione porro voluptate odit
                            minima.
                        </p>
                    </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
            </div>
        );
    }
}

export default ProjectContainer;