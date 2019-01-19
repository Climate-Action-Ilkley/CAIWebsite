/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const MaterialsProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allMaterialsProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Materials and Products"}}) {
              edges {
                  node {
                      path
                      projectTitle
                      projectBlurb
                      onePlanetStyle
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

export default MaterialsProjectFeatures;

