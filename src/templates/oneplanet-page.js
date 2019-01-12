/**
 * Created by will on 11/01/19.
 */
import React from 'react';

import Layout from '../components/layout';
import OnePlanetNav from '../components/OnePlanetNav';
import CultureProjectFeatures from '../components/ProjectLists/CultureProjectFeatures';
import EquityProjectFeatures from '../components/ProjectLists/EquityProjectFeatures';
import HealthProjectFeatures from '../components/ProjectLists/HealthProjectFeatures';
import LandProjectFeatures from '../components/ProjectLists/LandProjectFeatures';
import MaterialsProjectFeatures from '../components/ProjectLists/MaterialsProjectFeatures';
import FoodProjectFeatures from '../components/ProjectLists/FoodProjectFeatures';
import WaterProjectFeatures from '../components/ProjectLists/WaterProjectFeatures';
import TransportProjectFeatures from '../components/ProjectLists/TransportProjectFeatures';
import CarbonProjectFeatures from '../components/ProjectLists/CarbonProjectFeatures';
import WasteProjectFeatures from '../components/ProjectLists/WasteProjectFeatures';

const OnePlanetPageTemplate = (props) => {
  const {area, style, description, icon} = props.data.oneplanetlivingJson;
  return (
    <Layout>
      <div id="main">
        <OnePlanetNav area={area} navStyle={style}/>

        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">

                <h2>{area}</h2>
              </header>
              <h2>{description}</h2>
            </div>
            <span className="image"><span className={"icon major " + style + " " + icon}/></span>
          </div>
        </section>
        {getOnePlanetProjects(area)}
      </div>
    </Layout>
  )
};

function getOnePlanetProjects(area) {
  switch(area) {
    case "Culture and Community":
      return <CultureProjectFeatures/>;
    case "Equity and Local Economy":
      return <EquityProjectFeatures/>;
    case "Health and Happiness":
      return <HealthProjectFeatures/>;
    case "Land and Nature":
      return <LandProjectFeatures/>;
    case "Materials and Products":
      return <MaterialsProjectFeatures/>;
    case "Sustainable Food":
      return <FoodProjectFeatures/>;
    case "Sustainable Water":
      return <WaterProjectFeatures/>;
    case "Travel and Transport":
      return <TransportProjectFeatures/>;
    case "Zero Carbon":
      return <CarbonProjectFeatures/>;
    case "Zero Waste":
      return <WasteProjectFeatures/>;
    default:
      return <div/>;
  }
}

export const onePlanetPageQuery = graphql`
    query onePlanetPageQuery($pathName: String!) {
        oneplanetlivingJson(path: { eq: $pathName }) {
            area
            style
            description
            icon
        }
    }
`;

export default OnePlanetPageTemplate;