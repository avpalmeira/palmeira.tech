import React from "react"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

const githubProfile = "https://github.com/avpalmeira";
const linkedInProfile = "https://www.linkedin.com/in/avpalmeira/";
const twitterProfile = "https://twitter.com/avpalmeira";

export default () => (

    <div id="main" className="main">
        <div className="header">
            <img className="logo" src={logo} alt="palmeira" />
            <h1>Palmeira.tech</h1>
        </div>
        <p>The Portfolio Website of <span>Antonio Palmeira</span></p>
        <p>A Full Stack Developer driven by the desire to create<br/>real solutions to real world problems.</p>
        <div className="icons">
            <a href={twitterProfile}><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <a href={linkedInProfile}><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            <a href={githubProfile}><FontAwesomeIcon className="icon" icon={faGithub} /></a>
        </div>
        <p>‍🔨 Portfolio Website under construction. ‍🔨</p>
    </div>
)
