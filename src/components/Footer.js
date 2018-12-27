import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <a className="twitter-timeline" data-width="450" data-height="350" href="https://twitter.com/ClimateIlkley?ref_src=twsrc%5Etfw">Tweets by ClimateIlkley</a>
        </section>
        <section>
            <h2>Contact Us</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                <dt>Phone</dt>
                <dd>(000) 000-0000 x 0000</dd>
                <dt>Email</dt>
                <dd><a href="#">climateactionilkley@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://twitter.com/ClimateIlkley?lang=en" target="_blank" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/climateactionilkley18/" target="_blank" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" target="_blank" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Untitled. Design: <a href="https://misterwip.uk">Mister Wip</a>.</p>
    </footer>
)

export default Footer
