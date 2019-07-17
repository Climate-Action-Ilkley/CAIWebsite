import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const HomePageNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'about', 'first', 'second', 'events', 'network', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Home</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About Us</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">The Facts</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Work Groups</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="events">
                    <a href="#">Events</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="network">
                    <a href="#">Network</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Get Involved</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
);

export default HomePageNav
