import React from "react"
import LieMay from "../../static/papers/LieMaycomp.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={LieMay}>pdf</a>
  </>
)

export default IndexPage

