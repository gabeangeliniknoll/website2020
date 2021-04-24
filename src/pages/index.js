import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// pdf iles
import CV from "../components/CV"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <div>
    <div style={{ float: `left`, maxWidth: `70%`, marginBottom: `1.45rem`}}>
    <p>I am a Postdoctoral Researcher at the <a href="https://www.mi.fu-berlin.de/math/groups/top/members/index.html">Freie Universit<span>&#228;</span>t Berlin</a>. Previously, I was a Postdoctoral Researcher at <a href="https://math.msu.edu">Michigan State University</a>. 
      I earned my PhD at <a href="https://clas.wayne.edu/math">Wayne State University</a> under the direction of <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a>.</p>
    <p>Broadly, I study interactions between algebraic topology, arithmetic and geometry. Specifically, I am interested invariants of ring spectra, such as topological Hochschild homology, algebraic K-theory, and topological cyclic homology.</p>
		<p>In addition to my research activity, I have had the opportunity to teach a broad range of courses, 
      mentor undergraduate research projects, and organize several conferences and seminars. For a more detailed description of my activities see my <CV />.</p>
    </div>
    <div style={{marginLeft: `70%`, maxWidth: `30%`, marginBottom: `1.45rem` }} > 
     <Image />
    </div> 
    <div clear="both"></div>
    <div style={{ float: `left`, maxWidth: `100%`, marginBottom: `1.45rem`}}>
    <h2>Current Teaching</h2>
      <p><b>Pro-Seminar on Algebra - Symmetries</b><span> </span><a href="https://www.mi.fu-berlin.de/math/groups/top/Lehre/PS-S_Algebra_So21.html">Course Website.</a><span> </span></p>
      <p><b>19219401 Higher Algebra </b><span> </span>Equivariant stable homotopy theory.<span> </span><a href="https://www.mi.fu-berlin.de/math/groups/top/Lehre/2021so_HigherAlgebra.html">Course Website.</a></p>
      <p><b>Forschungsseminar Geometrie und Topologie</b><span> </span><a href="https://www.mi.fu-berlin.de/math/groups/top/research/FS-2021So-geom.html">Course Website.</a></p>
    <h2>Contact</h2>
    <h3>Pronouns:</h3>
      <p>He/Him/His</p>
    <h3>Email:</h3> 
      <p>University Email: <a href="mailto:gabriel.angelini-knoll@fu-berlin.de">gabriel.angelini-knoll</a> (at fu-berlin dot de)<br></br>Personal Email: <a href="mailto:gabe.angelini.knoll@gmail.com">gabe.angelini.knoll</a> (at gmail dot com)</p>
    <h3>Address:</h3> 
    <p>Arnimallee 7 (Etage 2) <br>    
      </br>Raum 215<br>  
      </br>14195 Berlin <br>
      </br>Germany</p>
    <h2>Service</h2>
    <p>I co-organized a <a href="http://www.ams.org/meetings/sectional/2267_program_ss34.html">Special Session on Homotopy Theory</a> at the AMS Sectional at University of Wisconsin-Madison on Sept. 14-15 of 2019. </p>
    <p>I co-organized the <a href="https://users.math.msu.edu/users/angeli91/MTS/mts19.html">Midwest Topology Seminar</a> at Michigan State University on May 18-19 of 2019.</p>
    <h2>Resources</h2>
      <p> <a href=" https://www.europeanwomeninmaths.org/">European  Women in Mathematics</a>, <a href="https://awm-math.org/ ">Association for Women in Mathematics</a>, <a href="http://lgbtmath.org/index.html">Spectra</a>, <a href="https://s.wayne.edu/isaksen/algebraic-topology-journals/">Algebraic Topology Journals</a>, <a href="https://researchseminars.org/">Online Research Seminars</a>, <a href="http://mathmeetings.net/at-gt">MathMeetings</a>, <a href="https://faculty.math.illinois.edu/K-theory/Calendar/">K-theory Calender</a></p>
      <h2>Collaborators</h2>
      <p><a href="https://dlculver.github.io/">D. Culver</a>, <a href="https://users.math.msu.edu/users/teena/Home.html">T. Gerhardt</a>, <a href="https://www.math.ucla.edu/~mikehill/">M. Hill</a>, <a href="https://evahoening.netlify.app/">E. H<span>&#246;</span>ning</a>, <a href="https://www.math.upenn.edu/~mmerling/">M. Merling</a>, <a href="https://www.maximilienperoux.com/">M. P<span>&#233;</span>roux</a>, <a href="https://e.math.cornell.edu/people/jdq27/">J.D. Quigley</a>, <a href="https://clasprofiles.wayne.edu/profile/dy8211">A. Salch</a></p>
    </div>
    </div>
  </Layout>
)

export default IndexPage
