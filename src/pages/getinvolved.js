import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SignUpForm from "../components/SignUpForm";
import Scrollspy from "react-scrollspy";
import Scroll from "../components/Scroll";

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <div id="main">
            <section className="main">
                {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
                <header className="major">
                    <h2>Get Involved</h2>
                    <p>There are three ways you can get involved in Climate Action Ilkley:</p>
                    <ul>
                        <Scrollspy items={ ['newsletter', 'membership', 'donations'] } currentClassName="is-active" offset={-300}>
                            <li>
                                <Scroll type="id" element="newsletter">
                                    <a className="btn btn-link" href="#">Newsletter</a>
                                </Scroll>
                            </li>
                            <li>
                                <Scroll type="id" element="membership">
                                    <a className="btn btn-link" href="#">Membership</a>
                                </Scroll>
                            </li>
                            <li>
                                <Scroll type="id" element="donations">
                                    <a className="btn btn-link" href="#">Make a donation</a>
                                </Scroll>
                            </li>
                        </Scrollspy>
                    </ul>
                </header>
            </section>
            <section id="newsletter" className="main">
                <header className="major">
                    <h2>Newsletter</h2>
                    <p>For those with limited time but would like to keep in touch with our projects and meetings. Please sign-up below. <br/>You can view the newsletter archive            <a href="https://us18.campaign-archive.com/home/?u=a1a0e5958b2d727a3b3578b04&id=2a8d87987d" target="_blank" className="link">here</a>.
                    </p>
                </header>
                <footer className="major">

                    <ul className="actions">
                        <SignUpForm/>
                    </ul>
                </footer>
            </section>
            <section id="membership" className="main">
                {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
                <header className="major">
                    <h2>Membership</h2>
                    <p>Becoming a member shows your commitment, gives us a bigger voice and gives you:</p>
                    <ul>
                        <li>The opportunity to vote at our AGM</li>
                        <li>The opportunity to help shape our projects</li>
                        <li>Free entry to our events</li>
                        <li>Newsletters and News Alerts</li>
                    </ul>
                    <p>Please complete our online application form.</p>
                    <ul className="actions">
                        <li><a href="https://facebook.us18.list-manage.com/subscribe?u=a1a0e5958b2d727a3b3578b04&id=2a8d87987d" target="_blank" className="button special">Become a Member</a></li>
                    </ul>
                </header>

            </section>
          <section id="donations" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>Donate</h2>
              <p>Like many voluntary organisations we rely on the generosity of our supporters to keep us going</p>
              <ul className="actions">
                <li><a href="https://fundrazr.com/61ROc4?ref=tw_f7nCmc_ab_9EjtbFLD4A09EjtbFLD4A0" target="_blank" className="button special">Donate</a></li>
              </ul>
            </header>

          </section>
          {/*<section id="content" className="main">*/}
            {/*/!*<span className="image main"><img src={pic04} alt="" /></span>*!/*/}
            {/*<header className="major">*/}
              {/*<h2>Open Participation</h2>*/}
              {/*<p>We encourage active participation from everyone in our community. We want everyone's voices to be heard.</p>*/}
            {/*</header>*/}
          {/*</section>*/}
          {/*<section id="projects" className="main">*/}
            {/*/!*<span className="image main"><img src={pic04} alt="" /></span>*!/*/}
            {/*<header className="major">*/}
              {/*<h2>Active Projects</h2>*/}
              {/*<p>We split our work into separate projects. Take a look at our current active and planned projects, get in touch if you see one that interests you and we will find a way to get you involved.*/}
              {/*How much you do is completely up to you.</p>*/}
            {/*</header>*/}
            {/*<ul className="actions">*/}
              {/*<li><Link to="/projects" className="button">View Projects</Link></li>*/}
            {/*</ul>*/}

          {/*</section>*/}
          {/*<section id="project-suggestions" className="main">*/}
            {/*/!*<span className="image main"><img src={pic04} alt="" /></span>*!/*/}
            {/*<header className="major">*/}
              {/*<h2>Project Suggestions</h2>*/}
              {/*<p>We are happy to support any projects that align with the vision for a sustainable zero carbon Ilkley.</p>*/}
              {/*<p>If you have an idea for how we can achieve this vision we encourage you to champion it within our community. Build a working group, develop a plan and take action.</p>*/}
            {/*</header>*/}
            {/*<h2>We the community will take action together!</h2>*/}


          {/*</section>*/}

        </div>
      </Layout>
    )
  }
}

export default Generic
