import React from "react"
import SnowFlake from "../static/snowflake.pdf" // Tell webpack this JS file uses this pdf

const IndexPage = () => (
  <>
    <a href={SnowFlake}>abstract</a>
  </>
)

export default IndexPage

