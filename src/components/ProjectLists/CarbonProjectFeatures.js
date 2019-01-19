/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const CarbonProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allCarbonProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Zero Carbon"}}) {
              edges {
                  node {
                      path
                      projectTitle
                      projectBlurb
                      iconName
                      onePlanetStyle
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

export default CarbonProjectFeatures;

