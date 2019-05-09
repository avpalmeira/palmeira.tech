import React from "react"
import { Helmet } from "react-helmet"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Focus from "../components/focus"
import Tools from "../components/tools"
import Projects from "../components/projects"

export default () => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Welcome! - This is the Portfolio Website of Antonio Palmeira</title>
        </Helmet>

        <Nav />

        <Hero />

        <Focus />

        <Tools />


    </>
)
