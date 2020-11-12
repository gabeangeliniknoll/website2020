import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Complete from "../components/complete";
import Aklectureone from "../components/aklectureone";
import Aklecturetwo from "../components/aklecturetwo";

// import CV from "../static/CV.pdf";
// import Research from "../static/research_Angelini-Knoll.pdf";

const Knotes = {
  complete: Complete,
  aklectureone: Aklectureone,
  aklecturetwo: Aklecturetwo,
};

export default block => {
  // component does exist
  if (typeof Knotes[block.lecture] !== "undefined") {
    return React.createElement(Knotes[block.lecture], {
      key: block._uid,
      block: block
    });
    //  <PDF  pdfFile={block.lecture} displayText={pdf}/> 
  }
  // component doesn't exist yet
    return React.createElement(
      () => <div>The pdf {block.lecture} has not been created yet.</div>
      // { key: block._uid }
   );
}
