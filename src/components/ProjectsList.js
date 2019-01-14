import React from 'react';
import Feature from './Feature';
import QuestionFeature from './QuestionFeature';
const ProjectList = ({projects, isPlannedList}) => {
  console.log(projects);
    return (
      <ul className="features">
        {projects ? projects.map(project => {
          console.log(project);
          return <Feature
              url={"projects/" + project.node.path}
              blurb={project.node.projectBlurb}
              title={project.node.projectTitle}
              icon={project.node.iconName}
              iconStyle="style2 project"
            />
        }) : null}
        {isPlannedList ? <QuestionFeature/> : null}
      </ul>
    )
};

export default ProjectList;