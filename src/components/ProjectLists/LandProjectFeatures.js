/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const LandProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allLandProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Land and Nature"}}) {
              edges {
                  node {
                      path
                      projectTitle
                      projectBlurb
                      iconName
                      state
                  }
              }
          }
      }

    `}
    render={data => {
      return <ProjectFeaturesContainer projects={data.allProjectsJson}/>;
    }}
  />
);

export default LandProjectFeatures;

