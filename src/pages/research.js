import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Imported pdf files in order of appearance
import ResearchStatement from "../components/career/research"
import Limits from "../components/papers/limits"
import Kyn from "../components/papers/kyn"
import Beta from "../components/papers/beta"
import Segal from "../components/papers/segal"
import THHj from "../components/papers/thhj"
import THHMay from "../components/papers/thhmay"
import Reedy from "../components/papers/reedy"
import LieMay from "../components/papers/liemay"
import Masters from "../components/papers/masters"
import Quiver from "../components/papers/quiver"

const Research = () => (
  <Layout>
    <SEO title="Research" />
    <h1>Research</h1>
      <p>My work focuses on how algebraic K-theory interacts with periodicity in the homotopy groups of spheres. 
        Specifically, I do computations of approximations of algebraic K-theory of structured ring spectra and analyze how chromatic complexity behaves in this context.
			  I also work on developing tools for doing trace methods computations.
			  More recently, I have been working on approximations to algebraic K-theory of ring spectra with anti-involution with the long term goal of seeing how chromatic 
        homotopy theory interacts with algebraic K-theory of ring spectra with anti-involution.
			  For more information about my research, see my <ResearchStatement /></p>
    
    <h2>Preprints under review</h2>
      <p>Commuting unbounded homotopy limits with Morava K-theory [<Limits /> | <a href="https://arxiv.org/abs/2003.03510">arxiv</a>] <br></br>
        <font size="3"> We give conditions for Morava K-theory to commute with certain homotopy limits with an eye towards applications to topoligical periodic cyclic homology and algebraic K-theory. As our application, we prove a version of Mitchell's theorem for truncated Brown-Peterson spectra</font><br>
			  </br><font size="3">Joint with <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a>.</font></p> 
      <p> Chromatic complexity of algebraic K-theory of y(n) [ <Kyn /> | <a href="https://arxiv.org/abs/1908.09164">arxiv</a>] <br>
				</br><font size="3">We compute Morava K-theory of topological periodic cyclic homology and topological negative cyclic homology of the Thom spectra y(n). This gives evidence for a version of the red-shift conjecture for topological periodic cyclic homology at all chromatic heights. </font><br>
				</br><font size="3">Joint with <a href="https://e.math.cornell.edu/people/jdq27/">J.D. Quigley</a></font></p>
      <p>Detecting the beta family in iterated algebraic K-theory of finite fields [<Beta /> | <a href="https://arxiv.org/abs/1810.10088">arxiv</a>] <br>
        </br><font size="3"> I prove that the beta family is detected in iterated algebraic K-theory of finite fields and consequently iterated algebraic K-theory of the integers. This gives evidence for a higher chromatic height version of the Lichtenbaum conjecture, which I call the Greek-letter-family red-shift conjecture, after the red-shift conjecture of Ausoni-Rognes.</font></p>  
      <p>The Segal Conjecture for Topological Hochschild Homology of the Ravenel spectra X(n) and T(n) [<Segal /> | <a href="https://arxiv.org/abs/1705.03343">arxiv</a>]<br>
				</br><font size="3">We solve the homotopy limit problem for topological Hochschild homology of Ravenel's spectra X(n) with respect to all cyclic groups of order a power of p. This implies that, after p-completion, topological negative cyclic homology and topological periodic cyclic homology of X(n) are homotopy equivalent.</font><br>
        </br><font size="3">Submitted. Joint with <a href="https://e.math.cornell.edu/people/jdq27/">J.D. Quigley</a>.</font></p>
      <p>On topological Hochschild homology of the K(1)-local sphere  [<THHj /> | <a href="https://arxiv.org/abs/1612.00548">arxiv</a>]<br>
				</br><font size="3"> I compute mod (p,v_1) topological Hochschild homology of the connective cover of the K(1)-local sphere spectrum using the topological Hochschild-May spectral sequence.</font></p>
    <h2>Publications</h2>
      <p>A May-type spectral sequence for topological Hochschild homology [<THHMay /> | <a href="https://arxiv.org/abs/1612.00541">arxiv</a>]<br>
				</br><font size="3">We construct a spectral sequence for higher topological Hochschild homology associated to a multiplicative filtration of a commutative ring spectrum. In particular, we show that the Whitehead tower 
          of a commutative ring spectrum can be built as a multiplicative filtered commutative ring spectrum. We use this spectral sequence to give a bound on topological Hochshcild homology of a connective commutative ring spectrum.</font><br>
				</br><font size="3">Published in Algebraic & Geometric Topology in 2018.</font><br>
				</br><font size="3">Joint with <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a>.</font></p>
    <h2>In preparation</h2>
      <p>Topological Hochschild homology of the second truncated Brown-Peterson spectrum <br> 
          </br><font size="3">We compute topological Hochschild homology of the second truncated Brown-Peterson spectrum with coefficients in the first truncated Brown-Peterson spectrum.</font><br>
					</br><font size="3">In progress. Joint with <a href="https://dlculver.github.io/">Dominic Culver</a> and <a href="https://evahoening.netlify.app/">Eva Honing</a>.</font></p>
      <p>Real Topological Hochschild homology and Witt vectors for noncommutative rings with anti-involution<br>
          </br><font size="3">We give a description of the Mackey functor homotopy groups of Real topological Hochschild homology in terms of Witt vectors for unital Hermitian Mackey functors.</font><br>
		  		</br><font size="3">In progress. Joint with <a href="https://users.math.msu.edu/users/teena/Home.html">Teena Gerhardt</a> and <a href="https://www.math.ucla.edu/~mikehill/">Mike Hill</a>.</font> </p>
	  <h2>Unpublished and Expository Papers:</h2>
      <p>Maps of simplicial spectra whose realizations are cofibrations [<Reedy /> | <a href="https://arxiv.org/abs/1611.06215">arxiv</a>]<br> 
				</br><font size="3">This paper provides user friendly conditions for checking when a map of simplicial spectra induces a cofibration on geometric realizations. (A simpler proof of the main theorem was pointed out by a generous referee and therefore this paper remains a preprint even though the main theorem is correct.)</font><br>
				</br><font size="3">Joint with <a href="https://clasprofiles.wayne.edu/profile/dy8211">Andrew Salch</a></font></p>
      <p>K(n)-local homotopy groups via Lie algebra cohomology [<LieMay />]<br>
        </br><font size="3"> We compute the homotopy groups of the K(1)-local mod p Moore spectrum at odd primes in order to illustrate a method that could be used to compute K(n) local homotopy of more general type n complexes. This paper is an exposition of work of Ravenel.</font></p>
      <p>Galois cohomology and algebraic K-theory of finite fields [<Masters />]<br>
        </br><font size="3">We describe how to compute algebraic K-theory of finite fields using Galois cohomology and an Atiyah-Hirzebruch type spectral sequence for algebraic K-theory. This project is my master's thesis completed under the direction of Andrew Salch. </font></p>
      <p>Auslander-Reiten quiver of the category of unstable modules over a sub-Hopf algebra of the Steenrod algebra [<Quiver />]<br>
        </br><font size="3"> We provide partial results about the Auslander-Reiten quiver associated to the category of unstable E(1)-modules where E(1) is the sub-Hopf algebra of the Steenrod algebra generated by the first two Milnor primitives.</font></p>		 
  </Layout>
)

export default Research
