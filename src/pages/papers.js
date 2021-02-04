import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import CV from "../components/CV";
import ResearchStatement from "../components/research"
import Limits from "../components/limits"
import Kyn from "../components/kyn"
import Beta from "../components/beta"
import THHMay from "../components/thhmay"
import Reedy from "../components/reedy"
import LieMay from "../components/liemay"
import Masters from "../components/masters"
import Quiver from "../components/quiver"

// import CV from "../static/CV.pdf";
// import Research from "../static/research_Angelini-Knoll.pdf";

const Papers = {
  cv: CV,
  research: ResearchStatement,
  limits: Limits,
  kyn: Kyn,
  beta: Beta,
  thhmay: THHMay,
  reedy: Reedy,
  liemay: LieMay,
  masters: Masters,
  quiver: Quiver,
};

export default block => {
  // component does exist
  if (typeof Papers[block.paper] !== "undefined") {
    return React.createElement(Papers[block.paper], {
      key: block._uid,
      block: block
    });
    // <PDF  pdfFile={block.paper} displayText={block.displayText}/> 
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The pdf {block.paper} has not been created yet.</div>,
    { key: block._uid }
  );
}