import React from "react"
import Quiver from "../../static/papers/unstablemodulethy.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Quiver}>pdf</a>
  </>
)

export default IndexPage

