import React from "react"
import ProObjects from "../../static/talks/pro-object.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={ProObjects}>pdf</a>
  </>
)

export default IndexPage

