/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from "../ProjectFeaturesContainer";

const CultureProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allCultureProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Culture and Community"}}) {
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

export default CultureProjectFeatures;

