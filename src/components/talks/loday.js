import React from "react"
import Loday from "../../static/talks/Lodayfunctorcats.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Loday}>pdf</a>
  </>
)

export default IndexPage

