import React from 'react'

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
            <p>
            One degree celsius might not sound like a big increase in temperature, but it’s the difference between life and death for thousands of people.
            </p>
            <p>Earth has always had natural cycles of warming and cooling, but not like we’re seeing now. The top five hottest years on record are 2016, 2015, 2014, 2013, and 2010.
            </p>
            <p>
            And rising temperatures doesn’t only mean it’s getting hotter. The Earth’s climate is complex — even a small increase in average global temperature means big changes, with lots of dangerous side effects.
            </p>
          </section>

          <section id="us" className="main">
            <header className="major">
              <h2>It's Us</h2>

            </header>
            <h3>Human beings are causing climate change, largely by burning fossil fuels.</h3>
            <h3>Rising temperatures correlate almost exactly with the release of greenhouse gases.</h3>
            <p>Before the 18th century, when humans in the industrial west began to burn coal, oil and gas, our atmosphere typically contained about 280 parts per million of carbon dioxide. Those are the conditions “on which civilization developed and to which life on earth is adapted.”</p>
            <p>Now, as the use of fossil fuels spreads through the world, the amount of carbon in the atmosphere is skyrocketing — we’re now well over 400 parts per million CO2 in the atmosphere. </p>
            <p>At the same time, the rapid growth in demand for animal-based agriculture by wealthier countries has seen other greenhouse gasses like methane and nitrous oxide rapidly rise. The contribution of agriculture causes about 15% of global emissions. Burning fossil fuels remains by far the biggest single contributor to the problem, causing 57% of global emissions. This is compounded by the fact that carbon dioxide stays active in the atmosphere much longer than methane and other greenhouse gasses.</p>
            <p>Fossil fuel companies are taking millions of years worth of carbon, once stored beneath the earth as fossil fuels, and releasing it into the atmosphere. In 2014, CO2 concentrations crossed 400 ppm in the atmosphere for the first time in at least 2.5 million years.</p>
            <p>Keeping fossil fuels in the ground is the most important step we can take to prevent further climate change.</p>
          </section>
          <section id="sure" className="main basics">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We're Sure</h2>

            </header>
            <h3>An overwhelming 97% of scientists agree that climate change is being caused by human greenhouse gas emissions.</h3>
            <h3>There is no meaningful debate about the basic science of climate change.</h3>
      
            <p>The finding that more CO2 in the atmosphere will warm the climate dates back to the 1890s. Attacks on the credibility of climate science are perpetuated by vested interests, including the fossil fuel industry, which has pumped millions of dollars into creating uncertainty about our understanding of climate change.</p>
            <p>The oil company Exxon knew about climate change’s impact in the 1970s, and found out that action would impact their bottom line. As a result, they joined an industry-wide attack on the truth, creating a false debate that prevented action for decades. Now we know that Exxon, and other companies like Shell, have been taking actions to protect their infrastructure from climate change for decades — while fighting action to protect the rest of us</p>
            <p>It’s also important to listen to indigenous, traditional and local knowledge. In many places of the world elders and community leaders are sharing their understandings of how ecosystems are changing.</p>
            <p>If we pay attention to what scientists and frontline communities are telling us, instead of fossil fuel industry deceptions, the message is clear: Humans are causing the rapid onset of climate change, which is already bringing costly impacts across the world. The best way to stop it is by keeping fossil fuels in the ground.</p>
          </section>
          <section id="bad" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>It's Bad</h2>

            </header>
            <h3>One degree of warming has already resulted in devastating impacts across the planet.</h3>
            <p>Global grain yields have declined by 10% from heatwaves and floods connected to climate change, unleashing hunger and displacement. Over 1 million people living near coasts have been forced from their homes due to rising seas and stronger storms, and millions more are expected to flee in the coming years.</p>
            <p>Climate change science has evolved rapidly in recent years and it is now possible for scientists to pinpoint the contribution that climate change is making to many extreme weather events or other impacts.</p>
          </section>
          <section id="fix" className="main">
            {/*<span className="image main"><img src={pic04} alt="" /></span>*/}
            <header className="major">
              <h2>We can fix it</h2>

            </header>
            <h3>The basic facts of climate change are grim: 80% of fossil fuel reserves need to stay in the ground for us to stay below 2°C* of warming and fossil fuel companies aren’t going to do that without a fight.</h3>
            <p>Here’s the good news:
              <ol>
                <li>We know exactly what we have to do — keep fossil fuels in the ground and quickly transition to 100% renewable energy.</li>
                <li>Renewable energy is getting cheaper and more popular every day. In fact, global carbon emissions have already started to slow due to the rapid growth of clean energy.</li>
                <li>We’re not alone — the worldwide movement to stop climate change and resist the fossil fuel industry is growing stronger every day.</li>
              
              </ol>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
