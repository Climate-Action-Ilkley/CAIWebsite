import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

class Generic extends React.Component {
  render() {

    return (
      <Layout>

        <div id="main">
          <section id="warming" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Warming</h2>

            </header>
            <h3>Right now, annual global average temperature is about 1° Celsius hotter than average.</h3>
            <ul className="actions">
              <li><a target="_blank" href="https://350.org/science/#warming" className="button special">Learn More</a></li>
            </ul>
          </section>

          <section id="us" className="main">
            <header className="major">
              <h2>It's Us</h2>

            </header>
            <h3>Human beings are causing climate change, largely by burning fossil fuels.</h3>
            <h3>Rising temperatures correlate almost exactly with the release of greenhouse gases.</h3>
            <ul className="actions">
              <li><a  target="_blank" href="https://350.org/science/#causes" className="button special">Learn More</a></li>
            </ul>
          </section>
          <section id="sure" className="main basics">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We're Sure</h2>

            </header>
            <h3>An overwhelming 97% of scientists agree that climate change is being caused by human greenhouse gas emissions.</h3>
            <h3>There is no meaningful debate about the basic science of climate change.</h3>

            <ul className="actions">
              <li><a  target="_blank" href="https://350.org/science/#denial" className="button special">Learn More</a></li>
            </ul>
          </section>
          <section id="bad" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Bad</h2>

            </header>
            <h3>One degree of warming has already resulted in devastating impacts across the planet.</h3>
            <ul className="actions">
              <li><a  target="_blank" href="https://350.org/science/#impacts" className="button special">Learn More</a></li>
            </ul>
          </section>
          <section id="fix" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We can fix it</h2>

            </header>
            <h3>The basic facts of climate change are grim: 80% of fossil fuel reserves need to stay in the ground for us to stay below 2°C of warming and fossil fuel companies aren’t going to do that without a fight.</h3>
            <ul className="actions">
              <li><a  target="_blank" href="https://350.org/science/#solutions" className="button special">Learn More</a></li>
              <li><Link to="/projects" className="button">View Projects</Link></li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
