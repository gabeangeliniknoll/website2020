import React from "react"
import Kyn from "../static/Kyn.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Kyn}>pdf</a>
  </>
)

export default IndexPage

