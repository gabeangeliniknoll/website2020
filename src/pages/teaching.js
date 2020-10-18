import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import YAMLData from "../content/teaching.yml"

const Teaching = () => (
  <Layout>
  <SEO title="Teaching" />
    <h1>{YAMLData.page}</h1> 
     {YAMLData.section.map((s, i) => (
      <>
        <h2 key={i}>{s.title}</h2>
        <ul>{s.university? s.university.map((u, j) => (
            <>
              <h2 key={j}>{u.title}</h2>
              <span key={j}>
                {u.courses? u.courses.map((c, k) => (
                  <>
                    <span key={k}>
                    <h3 key={k}>{c.semester}</h3>
                    {c.class? c.class.map((l,i) => (
                      <>
                        <p key={i}><b>{l.title}</b><br></br>
                        <span key={i}>{l.description}</span><br></br>
                        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">{`${l.urldisplay}`}</a>
                        </p>
                      </>
                      )) : null }
                      </span>
                    </>
                )) : null }
              </span>
            </>
        )) : null }
      </ul>
     </>
     ))}
  </Layout>
)

export default Teaching
