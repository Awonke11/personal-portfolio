import React from 'react';
import Navigation from '../components/Navigation';
import aboutVideo from "../videos/about.mp4"
import {Link} from "react-router-dom";
import Socials from '../components/Socials';

const About = () => {
    return (
        <div className='about'>
            <video src={aboutVideo} className='video' autoPlay loop muted/>
            <Navigation/>
            <div className='overlay'></div>
            <div className='about-content'>
                <div className='about-me'>
                    <h1 className='about-me-title'>Who am I</h1>
                    <p>I am a University of Cape Town student, currently studying Electrical and Computer Engineering.</p>
                    <p>Strictly residing in Cape Town because of school but I can also work remotely.</p>
                    <h4 className="fame-text"><b className="qoute">“ In order to be irreplaceable, one must always be different”</b> – Coco Chanel</h4>
                </div>
                <div className="page-animation">
                    <Link to='/contact' className="next-page">
                        <i class="fa-solid fa-arrow-down"></i>
                        <h3>Contact</h3>
                    </Link>
                </div>
                <Socials/>
            </div>
        </div>
    )
}

export default About;