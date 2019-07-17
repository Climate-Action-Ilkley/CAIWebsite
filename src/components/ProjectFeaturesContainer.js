import React from "react";
import ProjectTab from './ProjectTab';
import NewProjectsList from './ProjectsList';

const ProjectFeaturesContainer = ({projects}) => {

    const [activeTab, setActiveTab] = React.useState(1);

    let activeProjects = null;
    let plannedProjects = null;
    if (typeof window === `undefined`) {
        return <div/>
    }
    if (projects !== null) {
        activeProjects = projects.filter(project => project.isActive);
        plannedProjects = projects.filter(project => !project.isActive);

    }
    return (
        <section className="main special">
            <header className="major">
                <h2>Projects</h2>
            </header>

            <div className="projects-list">
                <div>
                    <button className="tab-button" id={1 === activeTab ? "active" : ""}
                            onClick={() => setActiveTab(1)}>Active
                    </button>
                    <button className="tab-button" id={2 === activeTab ? "active" : ""}
                            onClick={() => setActiveTab(2)}>Planned
                    </button>
                </div>
                <ProjectTab isActive={activeTab === 1}>
                    <NewProjectsList projects={activeProjects}/>
                </ProjectTab>
                <ProjectTab isActive={activeTab === 2}>
                    <NewProjectsList isPlannedList={true} projects={plannedProjects}/>
                </ProjectTab>
            </div>
        </section>
    )
}



export default ProjectFeaturesContainer;
