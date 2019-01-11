import React from 'react';
import Feature from './Feature';

const ProjectList = ({projects}) => {
  console.log(projects);
    return (
      <ul className="features">
        {projects.map(project => {
          console.log(project);
          return <Feature
              url={"projects/" + project.node.path}
              blurb={project.node.projectBlurb}
              title={project.node.projectTitle}
              icon={project.node.iconName}
              styleIndex={2}
            />
        })}
      </ul>
    )
};

export default ProjectList;