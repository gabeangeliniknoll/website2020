import React from "react"
import ResearchStatement from "../static/research_Angelini-Knoll.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={ResearchStatement}>research statement</a>.
  </>
)

export default IndexPage

