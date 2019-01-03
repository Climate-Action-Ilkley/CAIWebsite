import React from "react";
import {Link} from 'gatsby'
import classnames from "classnames";

import ProjectTab from './ProjectTab';
import ActiveProjectList from './ActiveProjectList';
import PlannedProjectList from './PlannedProjectList';



class ProjectContainer extends React.Component {

    state = {
        activeTab: "1",
    }


    togglePills = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        if (typeof window === `undefined`) {
            return <div>Projects</div>
        }

        return (
            <section className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <div className="projects-list">
                <div>
                    <button className="tab-button" id={"1" === this.state.activeTab ? "active" : ""} onClick={() => this.togglePills("1")}>Active</button>
                    <button className="tab-button" id={"2" === this.state.activeTab ? "active" : ""} onClick={() => this.togglePills("2")}>Planned</button>
                </div>
                <ProjectTab isActive={this.state.activeTab === "1"} >
                    {this.props.activeProjects}
                </ProjectTab>
                <ProjectTab isActive={this.state.activeTab === "2"}>
                    {this.props.plannedProjects}
                </ProjectTab>
            </div>
            </section>
        );
    }
}

export default ProjectContainer;