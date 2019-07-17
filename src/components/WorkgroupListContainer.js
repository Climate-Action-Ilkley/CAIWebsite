/**
 * Created by will on 10/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import WorkgroupList from './WorkgroupList';

const WorkgroupListContainer = () => (
        <StaticQuery query={
          graphql`
            query allOnePlanetLiving {
                  allContentfulWorkgroup {
                    edges {
                      node {
                        path
                        name
                        fontAwesomeIcon
                        className
                      }
                    }
                  }
            }

          `
        }
         render={data => {
           const { edges: workgroups } = data.allContentfulWorkgroup;
           console.log(workgroups);
           return (
             <WorkgroupList workgroups={workgroups}/>
           )

         }
         }/>
);

export default WorkgroupListContainer;
