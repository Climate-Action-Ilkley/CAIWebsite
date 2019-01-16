import React from 'react'

import Layout from '../components/layout'
import ProfileImage from '../components/ProfileImage';
import placeholder from '../assets/images/placeholder-headshot.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
          <section className="main">
            <header className="major">
              <h2>Climate Action Ilkley Board</h2>
            </header>
            <ul className="features profile-pictures">
              <li>
                <ProfileImage imgSrc={placeholder}/>
              </li>
              <li>
                <ProfileImage imgSrc={placeholder}/>
              </li>
              <li>
                <ProfileImage imgSrc={placeholder}/>
              </li>
              <li>
                <ProfileImage imgSrc={placeholder}/>
              </li>
              <li>
                <ProfileImage imgSrc={placeholder}/>
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
