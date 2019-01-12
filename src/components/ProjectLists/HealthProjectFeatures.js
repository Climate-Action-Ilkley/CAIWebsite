/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const HealthProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allHealthProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Health and Happiness"}}) {
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

export default HealthProjectFeatures;

