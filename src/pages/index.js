import React from "react"
import { Helmet } from "react-helmet"
import Main from "../components/Main"

export default () => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Palmeira.tech - The Portfolio Website of Antonio Palmeira</title>
        </Helmet>

        <Main />
    </>
)
