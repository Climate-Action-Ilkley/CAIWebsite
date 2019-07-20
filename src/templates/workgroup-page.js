import React from 'react';

import Layout from '../components/layout';
import ProjectFeaturesContainer from "../components/ProjectFeaturesContainer";
import MemberProfile from "../components/MemberProfile";
import WorkgroupNav from '../components/WorkgroupNav'
import Feature from "../components/Feature";

const WorkgroupPage = (props) => {
    const {name, purpose, coordinator, folder, fontAwesomeIcon, className} = props.data.contentfulWorkgroup;
    const projects = props.data.allContentfulProject.edges.map(edge => edge.node)
    return (
        <Layout>
            <div id="main">
                <WorkgroupNav navName={name} className={className}/>

                <section id="intro" className="main">
                    <div className="spotlight">
                        <div className="content">
                            <header className="major">

                                <h2>{name}</h2>
                            </header>
                            <h2>{purpose}</h2>
                        </div>
                        <span className="image">
                            <span className="image"><span className={"icon major " + className + " " + fontAwesomeIcon}/></span>
                        </span>
                    </div>
                    <ul className="features workgroup">
                        {coordinator && <li>
                            <MemberProfile name={coordinator.name} picture={coordinator.profilePicture} role="Workgroup Coordinator"/>
                        </li>}
                        {folder &&
                        <Feature url={folder} icon="fa-folder" iconStyle={className} title="Shared Folder" isExternalLink={true}/>}

                        {/*<h2><a href={folder} target="_blank" className="btn btn-link">Shared Folder</a></h2>*/}

                    </ul>
                    <span>
                    </span>

                </section>
                {coordinator &&
                <ProjectFeaturesContainer projects={projects}/>}
            </div>
        </Layout>
    )
};


export const workgroupPage = graphql`
    query workgroupPageQuery($pathName: String!) {
        contentfulWorkgroup(path: { eq: $pathName }) {
            name
            purpose
            fontAwesomeIcon
            className
            coordinator {
                name
                profilePicture {
                    file {
                        url
                    }
                }
            }
            folder 
                   
        }
        allContentfulProject(filter: {workgroup: { path: { eq: $pathName } } }) {
            edges {
                node {
                    name
                    path
                    purpose
                    isActive
                    workgroup {
                        path
                    }
                     
                }
            }
        }
    }
`;

export default WorkgroupPage
