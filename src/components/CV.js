import React from "react"
import CV from "../static/CV-angeliniknoll.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={CV}>CV</a>
  </>
)

export default IndexPage

