import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Knotes from "./knotes"

// YAML Data file
import YAMLData from "../content/knotes.yml"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <h1>{YAMLData.page}</h1>
    <p>{YAMLData.pageDescription}<span> </span><a href={YAMLData.url} target="_blank" rel="noopener noreferrer">{`${YAMLData.urlText}`}</a>.</p>
     {YAMLData.sections.map((s, i) => (
      <>
        <h2 key={i}>{s.title}</h2>
        <ul>
        {s.lectures ? s.lectures.map((l, i) => (
          <li key={i}>
            <h4 key={i}>{l.title}<span> </span><i>{l.author}</i>
            <span >{l.links ? l.links.map((l,i) => (
              <>
              <span> </span> 
              {l.body ? l.body.map(block => Knotes(block))  
              : null
              }
              <span> </span>{l.url ? l.url.map((u,i) => (
              <a key={i} href={`${u.url}`}>{`${u.urltext}`}</a>
              )): null
              }
              </>
              )
            )
            : null }
            </span> 
            </h4>
          </li>
        )) : null }
        </ul>
      </>
    ))} 
  </Layout>
)

export default Research
