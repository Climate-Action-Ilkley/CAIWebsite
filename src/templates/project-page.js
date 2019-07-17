import React from 'react';
import WorkgroupNav from "../components/WorkgroupNav";
import Layout from '../components/layout';
import { graphql } from "gatsby"

const ProjectPageTemplate = (props) => {
    console.log(props);
   const project = props.data.contentfulProject;
   if (project == null) {
       return <div/>
   }
    return (
        <Layout>
            <div id="main">
                <WorkgroupNav navName={project.workgroup.name} className={project.workgroup.className}/>

                <section id="intro" className="main">
                    <div className="spotlight">
                        <div className="content">
                            <header className="major">

                                <h2>{project.name}</h2>
                            </header>
                            <h2>{project.purpose}</h2>
                        </div>
                        <span className="image"><span className={"icon major " + project.workgroup.className + " " + project.iconName}/></span>
                    </div>
                </section>
            </div>
        </Layout>
        )

};


// ProjectPageTemplate.propTypes = {
//     onePlanetArea: PropTypes.string.isRequired,
//     onePlanetNavStyle: PropTypes.string.isRequired,
//     projectTitle: PropTypes.string.isRequired,
//     projectBlurb: PropTypes.string.isRequired,
//     iconStyle: PropTypes.string.isRequired,
//     iconName: PropTypes.string.isRequired,
//
// };


// For some reason this query returns null rather than project page. Something to do with oath not being correct?
    export const projectPageQuery = graphql`
        query contentfulProject($pathName: String!) {
          contentfulProject(path: {eq: $pathName}) {
            path
            name
            purpose
            workgroup {
                name
                path 
                className
            }
          }

        }
    `;

export default ProjectPageTemplate;
