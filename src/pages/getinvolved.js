import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>Get Involved</h2>
              <p>Tackling Climate Change can seem like a daunting prospect, but even small actions can make a big difference.</p>
              <p>We have to believe there is hope.  </p>
            </header>

          </section>
          <section id="content" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>Open Participation</h2>
              <p>We encourage active participation from everyone in our community. We want everyone's voices to be heard</p>
            </header>
          </section>
          <section id="projects" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>Current Projects</h2>
              <p>We split our work into separate projects. Take a look at our current active and planned projects, get in touch if you see one that interests you and we will find a way to get you involved.
              How much you do is completely up to you.</p>
            </header>
            <ul className="actions">
              <li><Link to="/projects" className="button">View Projects</Link></li>
            </ul>

          </section>
          <section id="project-suggestions" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>Project Suggestions</h2>
              <p>We are happy to support any projects that align with the vision for a sustainable zero carbon Ilkley.</p>
              <p>If you have an idea for how we can achieve this vision we encourage you to champion it within our community. Build a working group, develop a plan and take action.</p>
            </header>
            <h2>We the community will take action together!</h2>


          </section>

        </div>
      </Layout>
    )
  }
}

export default Generic
