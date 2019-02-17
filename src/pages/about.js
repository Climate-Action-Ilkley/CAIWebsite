import React from 'react'

import Layout from '../components/layout'
import ProfileImage from '../components/ProfileImage';
import vicky from '../assets/images/steeringroup/vicky.jpg'
import george from '../assets/images/steeringroup/george.jpg'
import kath from '../assets/images/steeringroup/kath.jpg'
import will from '../assets/images/steeringroup/will_a.jpg'
import steve from '../assets/images/steeringroup/steve.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
          <section className="main">
            <header className="major">
              <h2>Climate Action Ilkley Steering Group</h2>
            </header>
            <ul className="features profile-pictures">
              <li>
                <ProfileImage imgSrc={kath}/>
              </li>
              <li>
                <ProfileImage imgSrc={will}/>
              </li>
              <li>
                <ProfileImage imgSrc={steve}/>
              </li>
              <li>
                <ProfileImage imgSrc={vicky}/>
              </li>
              <li>
                <ProfileImage imgSrc={george}/>
              </li>

            </ul>

          </section>
          <section id="about" className="main">
            <header className="major">
              <h2>What We Do</h2>
              <p>Our scope includes: influencing Ilkley’s Neighbourhood Plan; helping residents and businesses reduce the climate impact of their homes/ workplaces, travel and purchasing choices; improving food waste regimes; promoting renewable energy projects; co-ordinating with initiatives by other groups on water, wildlife, biodiversity, heritage and social inclusion.</p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
