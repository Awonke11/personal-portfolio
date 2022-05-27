import React from 'react';
import Navigation from '../components/Navigation';
import homeVideo from "../videos/home.mp4";
import {Link} from 'react-router-dom';
import Socials from '../components/Socials';

const Home = () => {
    return (
        <div className='home'>
            <video src={homeVideo} className='video' autoPlay loop muted/>
            <Navigation/>
            <div className='overlay'></div>
            <div className='home-content'>
                <h1>Awonke Mnotoza</h1>
                <div className='proffessions'>
                    <h2>UI Designer</h2>
                    <h2 className='student'>Frontend Dev</h2>
                </div>
                <p>Proud South African that is inspired by designing and creating websites. From Oscar Wilde - <b className="qoute">“Experience is the name everyone gives to their mistakes”.</b></p>
                <div className="page-animation">
                    <Link to='/about' className="next-page">
                        <i class="fa-solid fa-arrow-down"></i>
                        <h3>About</h3>
                    </Link>
                </div>
                <Socials/>
            </div>
        </div>
    )
}

export default Home;