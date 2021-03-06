import React from 'react'
import { Link } from 'gatsby'
import privacyPolicy from '../assets/documents/PrivacyPolicyV1.pdf';
import isp from '../assets/documents/ISP.pdf';

const Footer = (props) => (
    <footer id="footer">
        {/*<section>*/}
            {/*<a className="twitter-timeline" data-width="450" data-height="350" href="https://twitter.com/ClimateIlkley?ref_src=twsrc%5Etfw">Tweets by ClimateIlkley</a>*/}
        {/*</section>*/}
        <section>
            <h2>Follow Us</h2>
            <ul className="icons">
                <li><a href="https://twitter.com/ClimateIlkley?lang=en" target="_blank" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/climateactionilkley18/" target="_blank" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                {/*<li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>*/}
                {/*<li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>*/}
            </ul>
        </section>
      <section>
        <h2>Contact Us</h2>
        <ul className="icons">
          <li><a href="mailto:climateactionilkley@gmail.com">climateactionilkley@gmail.com</a></li>
        </ul>
      </section>
        <section>
            <h2>Documents</h2>
            <ul className="icons">
                <li><a href={privacyPolicy} download>Privacy Policy</a></li>
                <li><a href={isp} download>Ilkley Sustainability Plan</a></li>
            </ul>
        </section>
      <p className="copyright">&copy; Design: <a href="https://html5up.net">HTML5 UP</a>.Development by: <a href="https://misterwip.uk" target="_blank">Mister Wip</a>.</p>
    </footer>
);

export default Footer
