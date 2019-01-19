/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const WasteProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allWasteProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Zero Waste"}}) {
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

export default WasteProjectFeatures;

