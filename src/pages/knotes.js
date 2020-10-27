import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Complete from "../components/complete";
// import Lecture1 from"../components/lecture1";
// import Lecture2 from "../static/complete.pdf";
// import Lecture3 from "../static/complete.pdf";
// import Lecture4 from "../static/complete.pdf";
// import Lecture5 from "../static/complete.pdf";
// import Lecture6 from "../static/complete.pdf";
// import Lecture7 from "../static/complete.pdf";
// import Lecture8 from "../static/complete.pdf";

// import CV from "../static/CV.pdf";
// import Research from "../static/research_Angelini-Knoll.pdf";

const Knotes = {
  complete: Complete,
  // lecture1: Lecture1,
  //  lecture2: Lecture2,
  //  lecture3: Lecture3,
  //  lecture4: Lecture4,
  //  lecture5: Lecture5,
  //  lecture6: Lecture6,
  //  lecture7: Lecture7,
  //  lecture8: Lecture8,
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
