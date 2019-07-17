import React from 'react'
import { Link } from 'gatsby'
import Waypoint from 'react-waypoint'
import Layout from '../components/layout'
import WorkgroupListContainer from '../components/WorkgroupListContainer'
import HomePageNav from '../components/HomePageNav'
import logo from '../assets/images/web-icon.png'
import BasicsItem from '../components/BasicsItem';
import UpcomingEvent from '../components/UpcomingEvent';
import SignUpForm from "../components/SignUpForm";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {

    return (
      <Layout>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <HomePageNav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Vision</h2>
                </header>
                <h2>To take action together to tackle the challenge of climate change and safeguard Ilkley for future generations by creating a sustainable zero carbon town.</h2>
              </div>
              <span className="image"><img src={logo} alt="" /></span>
            </div>
          </section>
          <section id="about" className="main special">
              <header className="major">
                  <h2>About Us</h2>
                  <h3>We are a community of climate conscious Ilkley residents who believe through coordinated local action we can lead the way into a better future ...</h3>
              </header>
              <ul className="actions">
                  <li><Link to="/about" className="button">Learn More</Link></li>
              </ul>
          </section>


          <section id="first" className="main special">
            <header className="major">
              <h2>Climate Change Facts</h2>
              <p>Climate Action Ilkley accepts these five basic facts about climate change which command the support of the overwhelming majority of scientists .
                </p>
            </header>
            <ul className="statistics">
              <BasicsItem itemStyle="style1" iconStyle="fa-fire" linkUrl="/facts#warming" itemTitle="It's Warming"/>
              <BasicsItem itemStyle="style2" iconStyle="fa-users" linkUrl="/facts#us" itemTitle="It's Us"/>
              <BasicsItem itemStyle="style3" iconStyle="fa-signal" linkUrl="/facts#sure" itemTitle="We're Sure"/>
              <BasicsItem itemStyle="style4" iconStyle="fa-times-circle" linkUrl="/facts#bad" itemTitle="It's Bad"/>
              <BasicsItem itemStyle="style5" iconStyle="fa-wrench" linkUrl="/facts#fix" itemTitle="We Can Fix It"/>

            </ul>
          </section>
          <section id="second" className="main special">
          <WorkgroupListContainer/>
          </section>
          <section id="events" className="main">
            <header className="major">
              <h2>Next Event</h2>
            </header>
            <UpcomingEvent/>
            <ul className="actions">
              <li><Link to="/events" className="button">View More</Link></li>
            </ul>
          </section>
          <section id="network" className="main special">
              <header className="major">
                  <h2>Network</h2>
                  <p>We are a local community group focused on Ilkley and the surrounding area. <br />
                    But to have a greater impact, we want to connect, learn from and collaborate with other groups and communities.<br/>
                  Together we can achieve more!</p>
              </header>
              <ul className="actions">
                  <li><Link to="/network" className="button">Learn More</Link></li>
              </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Involved</h2>
              <p>If you are interested in getting involved, send us an email. <br/> We always welcome more active members into our community.<br/> Together we can make a difference.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/getinvolved" className="button special">Get Involved</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
