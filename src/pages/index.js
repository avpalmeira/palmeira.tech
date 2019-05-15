import React from "react"
import { Helmet } from "react-helmet"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Focus from "../components/focus"
import Tools from "../components/tools"

export default () => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Welcome! - This is the Portfolio Website of Antonio Palmeira</title>
        </Helmet>

        <Nav />

        <Hero />

        <Focus id="focus" title="My Main Focus">
            <p>
                I'm drawn to current challenges that business and society face in the real world
                such as creating an online presence or managing proccesses and data that
                dynamic modern world demands.
            </p>
            <p>
                Below you find the tools that I used to build solutions to the challenges I faced
                and what I'm looking to evolve related to my skills.
            </p>
        </Focus>

        <Tools />

        <Focus id="contact" title="How to hire me?">
            <div style={{ textAlign: 'center' }}>
                <p>
                    For more information about my work or if you feel that we can
                    build something together just reach me at:
                </p>
                <p><a href="mailto:antonio@palmeira.tech">antonio@palmeira.tech</a></p>
                <p> - </p>
                <p>+55 83 98191-1991</p>
            </div>
        </Focus>

    </>
)
