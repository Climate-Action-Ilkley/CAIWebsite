import React from "react";
import ProjectTab from './ProjectTab';
import ProjectsList from './ProjectsList';

class ProjectFeaturesContainer extends React.Component {

    state = {
        activeTab: "1",
    };


    togglePills = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    activeProjects = null;
    plannedProjects = null;

    render() {
        if (typeof window === `undefined`) {
            return <div/>
        }
        if (this.props.projects !== null) {
          this.activeProjects = this.props.projects.edges.filter(project => project.node.state === "ACTIVE");
          this.plannedProjects = this.props.projects.edges.filter(project => project.node.state === "PLANNED");

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
                    <ProjectsList projects={this.activeProjects}/>
                </ProjectTab>
                <ProjectTab isActive={this.state.activeTab === "2"}>
                    <ProjectsList isPlannedList={true} projects={this.plannedProjects}/>
                </ProjectTab>
            </div>
            </section>
        );
    }
}

export default ProjectFeaturesContainer;