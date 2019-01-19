import React from 'react';
import Feature from './Feature';
import QuestionFeature from './QuestionFeature';
const ProjectList = ({projects, isPlannedList}) => {
  console.log(projects);
    return (
      <ul className="features project">
        {projects ? projects.map(project => {
          console.log(project);
          return <Feature
              url={"projects/" + project.node.path}
              blurb={project.node.projectBlurb}
              title={project.node.projectTitle}
              icon={project.node.iconName}
              iconStyle={project.node.onePlanetStyle}
            />
        }) : !isPlannedList ? 
        <h1>Help us move some planned projects to active!</h1> : null
      }
        {isPlannedList ? <QuestionFeature/> : null}
      </ul>
    )
};

export default ProjectList;