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
      const toRender = data.allProjectsJson ? <ProjectFeaturesContainer projects={data.allProjectsJson.edges}/>:  <div/>;
      return toRender;
    }}
  />
);

export default EquityProjectFeatures;

