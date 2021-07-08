import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// PDF component
import PDF from "../components/pdf"

// pdfs
import Loday from "../static/Lodayfunctorcats.pdf"  
import Fundamental from "../static/FTKthytalk.pdf"
import Nilpotence from "../static/nilptalk.pdf"
import Periodicity from "../static/periodicityinK-theory.pdf"
import ProObjects from "../static/pro-object.pdf"
import SnowFlake from "../static/snowflake.pdf"
import Stacks from "../static/stacks.pdf"

const Talks = () => (
  <Layout>
    <SEO title="Talks" />
    <h1>Talks</h1>
      <h2>Invited Seminar talks</h2>
        <h3>2021</h3>
          <h4>September</h4>
            <p>TBD<br>
              </br><font size="3">Geometry and Topology Seminar, University of Pennsilvania</font></p>
          <h4>May</h4>
            <p>Real topological Hochschild homology, norms and Witt vectors [<a href="https://warwick.ac.uk/fac/sci/maths/people/staff/dotto/atseminar2020/Angelini-Knoll.mp4">Video</a>]<br>
              </br><font size="3">Algebraic Topology Seminar, University of Warwick</font></p>
        <h3>2020</h3>
          <h4>April</h4>
            <p>Morava K-theory of algebraic K-theory and topological periodic cyclic homology<br>
              </br><font size="3">Topology Seminar, <span>&#201;</span>cole polytechnique f<span>&#233;</span>d<span>&#233;</span>rale de Lausanne</font></p>
          <h4>March</h4>
            <p>Morava K-theory of algebraic K-theory and topological periodic cyclic homology<br>
              </br><font size="3">Topology Seminar, Massachusetts Institute of Technology</font></p>
          <h4>January</h4>
            <p>Chromatic height and topological periodic cyclic homology<br>
              </br><font size="3">Topology Seminar, Bergische Universit<span>&#228;</span>t Wuppertal</font></p>
        <h3>2019</h3>
          <h4>May</h4>
            <p>Transchromatic behavior in algebriac K-theory and future directions<br>
              </br><font size="3">Topology Seminar, Freie Universit<span>&#228;</span>t Berlin</font></p>
            <p>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures<br>
              </br><font size="3">Algebraic Topology Seminar, University of California, Los Angeles</font></p>
          <h4>April</h4>
            <p>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures<br>
              </br><font size="3">Topology Seminar, University of Illinois Urbana-Champaign</font></p>
          <h4>March</h4>
            <p>Iterated algebraic K-theory of the integers and the Greek letter family red-shift conjecture<br>
              </br><font size="3">Topology Seminar, Northwestern University</font></p>
          <h4>January</h4>
            <p>Iterated algebraic K-theory of the integers and higher Lichtenbaum-Quillen conjectures [<a href="https://www.youtube.com/watch?v=g0iIQWlxSzU&t=1538s">Video</a>] <br>
              </br><font size="3"><a href="https://s.wayne.edu/isaksen/echt/">Electronic Computational Homotopy Theory Seminar</a></font></p>
        <h3>2017</h3>
          <h4>November</h4>
            <p>The Segal Conjecture for topological Hochschild homology of Ravenel spectra<br>
              </br><font size="3">Topology Seminar, University of Kentucky</font></p>
          <h4>February</h4>
            <p>Approximating algebraic K-theory of the image of J<br>
              </br><font size="3">Topology Seminar, University of Chicago</font></p>
        <h3>2016</h3>
          <h4>December</h4>
            <p>Periodic Phenomena in iterated algebraic K-theory of finite fields<br>
              </br><font size="3">Topology Seminar, Notre Dame</font></p>
          <h4>November</h4>
            <p>Periodicity in iterated algebraic K-theory [<PDF pdfFile={Periodicity} displayText='pdf' />]<br/>
            <font size="3">Geometry and Topology Seminar, Michigan State University</font></p>
            <p>Red-shift type phenomena in iterated algebraic K-theory of finite fields<br>
              </br><font size="3">Topology Seminar, Indiana University</font></p>
          <h4>March</h4>
            <p>Topological Hochschild homology of the connecitve cover of the K(1)-local sphere <br>
              </br><font size="3">Topology Seminar, University of illinois Urbana Champaign</font></p>
          <h4>February</h4>
            <p>On mod (p,v_1) homotopy of THH of the K(1)-local sphere and its homotopy fixed points<br>
              </br><font size="3">K-theory Seminar, Ohio State University</font></p>
      <h2>Invited Conference Talks</h2>
        <h3>2020</h3>
          <h4>March</h4>
            <p>Equivariant Witt vectors, Real topological Hochschild homology, and norms<br>
              </br><font size="3">Equivariant homotopy theory and p-adic Hodge Theory Conference, Banff International Research Station</font></p>
        <h3>2019</h3>
          <h4>March</h4>
            <p>Towards Topological Hochschild homology of the second truncated Brown-Peterson spectrum<br>
              </br><font size="3">AMS Sectional, University of Hawaii at Manoa</font></p>
        <h3>2018</h3>
          <h4>March</h4>
            <p>Chromatic complexity of topological periodic cyclic homology of y(n)<br>
            </br><font size="3">AMS Sectional, Ohio State University</font></p>
        <h3>2017</h3>
          <h4>November</h4>
            <p>Evidence for the Greek letter family red-shift conjecture<br>
              </br><font size="3">Midwest Topology Conference, Wayne State University</font></p>
          <h4>April</h4>
            <p>Loday construction in functor categories [<PDF pdfFile={Loday} displayText='pdf' />]<br>
              </br><font size="3">AMS Sectional, Indiana University</font></p>
      <h2>Contributed Conference Talks</h2>
          <h3>2017</h3>
            <h4>June</h4>
              <p>Periodicity in iterated algebraic K-theory [<a href="https://mediathek.uni-regensburg.de/playthis/5976eb8140f193.32122072">Video</a>]<br>
                </br><font size="3">Transatlantic Transchromatic Homotopy theory conference, University of Regensberg</font></p>
          <h3>2015</h3>
            <h4>April</h4>
            <p>Elements of higher chromatic height detected in circle homotopy fixed points <br>
              </br><font size="3">Graduate Student Geometry and Topology Conference, Indiana University</font></p>
          <h3>2015</h3>
            <h4>July</h4>
              <p>Topological Hochschild homology of the connective cover of the K(1)-local sphere <br>
                </br><font size="3">Young Topologists' Meeting Ecole Polytechnique Federale de Lausanne</font></p>
            <h4>March</h4>
              <p>Towards topological Hochschild homology of the algebraic K-theory spectrum of a finite field <br>
                </br><font size="3">Graduate Student Geometry and Topology Conference, Univ. of Illinois Urbana Champaign</font></p>
      <h2>Invited Seminar Talks for an Undergraduate Audience</h2>
        <h3>2018</h3>
          <h4>June</h4>
            <p>The Fundamental Theorem of Algebra via Topology<br>
              </br><font size="3">REU, Michigan State University</font></p>
        <h3>2017</h3>
          <h4>November</h4>
            <p>The Hopf map in classical mechanics<br>
              </br><font size="3">Math Club, University of Kentucky</font></p>
        <h3>2014</h3>
            <p>The Topologist's Snowflake and the Rose [<PDF pdfFile={SnowFlake} displayText='pdf' />]<br>
              </br><font size="3">Undergraduate Seminar, Kalamazoo College</font></p>
    <h2>Select Expository Talks</h2>
      <h4>2018</h4>
        <h3>May</h3>
          <p>Pro-objects in infinity categories [<PDF pdfFile={ProObjects} displayText='pdf' />]<br>
            </br><font size="3">Vitamin K1: Kerz-Strunk-Tamme's Proof of Weibel's Conjecture, University of Illinois at Chicago</font></p>
        <h4>2017</h4>
          <h3>May</h3>
            <p>On the structure of the map from MU to BP [<a href="http://math.mit.edu/conferences/talbot/2017/talbot-notes-2017.pdf">pdf</a>] <br> 
              </br><font size="3">Talbot Workshop on Obstruction Theory (Notes compiled by <a href="https://math.northwestern.edu/~ebelmont/">Eva Belmont</a> and <a href="https://sanathdevalapurkar.github.io/">Sanath Devalapurkar)</a></font></p>
          <h3>August</h3>
            <p>Stacks and Homotopy theory [<PDF pdfFile={Stacks} displayText='pdf' />]<br>
              </br><font size="3">West Coast Algebraic Topology Summer School, University of Oregon (joint with <a href="https://math.northwestern.edu/~ebelmont/">Eva Belmont</a>)</font></p>
        <h4>2015</h4>
          <h3>July</h3>
            <p>Fundamental Theorems of Algebraic K-theory [<PDF pdfFile={Fundamental} displayText='pdf' />]<br>
              </br><font size="3">European Talbot Workshop, Klosters, Switzerland</font></p>
        <h4>2014</h4>
          <h3>July</h3>
            <p>On the paper "Nilpotence and Stable Homotopy Theory II" [<PDF pdfFile={Nilpotence} displayText='pdf' />]<br>
              </br><font size="3">MSRI Summer School: Algebraic Topology, Guanajuato, Mexico</font></p>
  </Layout>
)

export default Talks
