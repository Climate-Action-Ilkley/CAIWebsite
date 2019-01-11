import React from 'react';
import PropTypes from 'prop-types';
import OnePlanetNav from "../components/OnePlanetNav";
import Layout from '../components/layout';
import { graphql } from "gatsby"

const ProjectPageTemplate = (props) => {
    console.log(props);
   const project = props.data.projectsJson;
   if (project == null) {
       return <div/>
   }
    return (
        <Layout>
            <div id="main">
                <OnePlanetNav area={project.onePlanetArea} navStyle={project.onePlanetNavStyle}/>

                <section id="intro" className="main">
                    <div className="spotlight">
                        <div className="content">
                            <header className="major">

                                <h2>{project.projectTitle}</h2>
                            </header>
                            <h2>{project.projectBlurb}</h2>
                        </div>
                        <span className="image"><span className={"icon major " + project.iconStyle + " " + project.iconName}/></span>
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
        query projectsJson($pathName: String!) {
          projectsJson(path: { eq: $pathName }) {
            iconName
            iconStyle 
            projectTitle
            projectBlurb
            onePlanetArea
            onePlanetNavStyle
          }
        }
    `;

export default ProjectPageTemplate;