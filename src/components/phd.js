import React from "react"
import Phd from "../static/periodicity.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Phd}>pdf</a>
  </>
)

export default IndexPage

