/**
 * Created by will on 10/01/19.
 */
import React from 'react';
import { StaticQuery } from "gatsby";
import OnePlanetAreaList from './OnePlanetAreaList';

const OnePLanetAreaListContainer = () => (
        <StaticQuery query={
          graphql`
            query allOnePlanetLiving {
                allOneplanetlivingJson {
                    edges {
                        node {
                            path
                            style
                            area
                            description
                            icon
                        }
                    }
                }
            }

          `
        }
         render={data => {
           const { edges: areas } = data.allOneplanetlivingJson;
           console.log(areas);
           return (
             <OnePlanetAreaList onePlanetAreas={areas}/>
           )

         }
         }/>
);

export default OnePLanetAreaListContainer;