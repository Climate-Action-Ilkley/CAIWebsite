/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const EquityProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allEquityProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Equity and Local Economy"}}) {
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
      return (
        <ProjectFeaturesContainer projects={data.allProjectsJson.edges}/>
      )
    }}
  />
);

export default EquityProjectFeatures;

