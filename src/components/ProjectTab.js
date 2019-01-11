import React from 'react';

const ProjectTab = ({isActive, children}) => {
    if (isActive) {
        return (
            <div className="project-tab">
            {children}
            </div>
        )
    }
    else {
        return <div/>
    }


};

export default ProjectTab;