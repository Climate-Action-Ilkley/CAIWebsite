/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const FoodProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allFoodProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Sustainable Food"}}) {
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

export default FoodProjectFeatures;

