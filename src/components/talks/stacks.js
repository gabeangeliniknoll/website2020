import React from "react"
import Stacks from "../../static/talks/stacks.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Stacks}>pdf</a>
  </>
)

export default IndexPage

