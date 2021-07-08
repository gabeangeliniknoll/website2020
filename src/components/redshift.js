import React from "react"
import Redshift from "../static/redshift.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={Redshift}>pdf</a>
  </>
)

export default IndexPage

