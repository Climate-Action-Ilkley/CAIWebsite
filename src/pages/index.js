import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import ProjectFeature from '../components/ProjectFeature'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import logo from '../assets/images/web-icon.png'
import ProjectContainer from '../components/ProjectContainer';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

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
                  <p>The members of climate action ilkley ....<br /></p>
              </header>
              <ul className="actions">
                  <li><Link to="/events" className="button">Learn More</Link></li>
              </ul>
          </section>


          <section id="first" className="main special">
            <header className="major">
              <h2>Climate Change Basics</h2>
              <p>Climate Action Ilkley accepts these five basic facts about climate change. <br/> We neither want to or plan to hold a debate on these.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <Link to="/basics#warming">
                  <span className="icon fa-fire"/>
                  <strong>It's Warming</strong>
                </Link>
              </li>
              <li className="style2">
                <Link to="/basics#us">
                  <span className="icon fa-users"/>
                  <strong>It's Us</strong>
                </Link>
              </li>
              <li className="style3">
                  <Link to="/basics#sure">
                    <span className="icon fa-signal"/>
                    <strong>We're Sure</strong>
                  </Link>
              </li>
              <li className="style1">
                <Link to="/basics#bad">
                <span className="icon fa-times-circle"/>
                <strong>It's Bad</strong>
                </Link>
              </li>
              <li className="style5">
                <Link to="/basics#fix">
                    <span className="icon fa-wrench"/>
                    <strong>We Can Fix It</strong>
                </Link>

              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/basics" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>
          <section id="second" className="main special">
            <header className="major">
              <h2>Current Projects</h2>
            </header>
            <ProjectContainer/>
            <ul className="features">
              <ProjectFeature
                url="neighbourhoodplan"
                blurb="We aim to influence the neighbourhood plan to include concrete action on climate change."
                projectTitle="Neighbourhood Plan"
                iconStyle="fa-users"
                styleIndex={2}
              />
              <ProjectFeature
                url="communityenergy"
                projectTitle="Community Energy Company"
                blurb="We want to set up a community energy company that produces local renewable energy, that is then sold locally."
                iconStyle="fa-bolt"
                styleIndex={4}
              />
              <ProjectFeature
                url="electriccarclub"
                projectTitle="Electric Car Club"
                blurb="We plan for a electric car club giving members of Ilkley an alternate option to a second car."
                iconStyle="fa-car"
                styleIndex={1}
              />
              <ProjectFeature
                url="foodwaste"
                projectTitle="Food Waste"
                blurb="We are in talks with ReFood to recycle food waste and convert it into gas."
                iconStyle="fa-apple"
                styleIndex={6}
              />
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/projects" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="events" className="main special">
            <header className="major">
              <h2>Upcoming Events</h2>
              <p>Check out what events we have on<br /></p>
            </header>
            <ul className="actions">
              <li><Link to="/events" className="button">Learn More</Link></li>
            </ul>
          </section>
          <section id="network" className="main special">
              <header className="major">
                  <h2>Network</h2>
                  <p>We are a local community group focussed on Ilkley and the surrounding area.<br />
                  But to have a greater impact we want to connect, learn from and collaborate with other groups.<br/>
                  Together we can achieve more!</p>
              </header>
              <ul className="actions">
                  <li><Link to="/events" className="button">Learn More</Link></li>
              </ul>
          </section>
          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Involved</h2>
              <p>Join Climate Action Ilkley and find out how you can help<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/getinvolved" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
