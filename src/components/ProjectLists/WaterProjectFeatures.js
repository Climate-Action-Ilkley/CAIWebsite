/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const WaterProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allWaterProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Sustainable Water"}}) {
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

export default WaterProjectFeatures;

