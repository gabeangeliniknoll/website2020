import React from "react"
import Nilpotence from "../static/nilptalk.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Nilpotence}>pdf</a>
  </>
)

export default IndexPage

