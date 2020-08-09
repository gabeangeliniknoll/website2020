import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Papers from "./papers"

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        paper: "cv",
        displayText: "CV",
      },
      {
        _uid: "gJZoSLkfZV",
        paper: "research",
        displayText: "research statement",
      },
    ]
  }
};

const Test = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    {data.content.body.map(block => Papers(block))}  
  </Layout>
)

export default Test


