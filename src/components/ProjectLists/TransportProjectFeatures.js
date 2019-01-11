/**
 * Created by will on 11/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import ProjectFeaturesContainer from '../ProjectFeaturesContainer';

const TransportProjectFeatures = () => (
  <StaticQuery query={
    graphql`
      query allTransportProjects {
          allProjectsJson(filter: {onePlanetArea: { eq: "Travel and Transport"}}) {
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

export default TransportProjectFeatures;

