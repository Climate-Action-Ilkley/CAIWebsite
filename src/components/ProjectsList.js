import React from 'react';
import Feature from './Feature';
import QuestionFeature from './QuestionFeature';
const ProjectList = ({projects, isPlannedList}) => {
  console.log(projects);
    return (
      <ul className="features project">
        {projects ? projects.map(project => {
          console.log("PROJECT LIST", project);
          return <Feature
              url={project.workgroup.path + "/" + project.path}
              blurb={project.purpose}
              title={project.name}
              icon="fa-sun"
              iconStyle="food"
            />
        }) : !isPlannedList ?
        <h1>Help us move some planned projects to active!</h1> : null
      }
        {isPlannedList ? <QuestionFeature/> : null}
      </ul>
    )
};

export default ProjectList;
