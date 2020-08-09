import React from "react"
import Limits from "../static/limits.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Limits}>pdf</a>
  </>
)

export default IndexPage

