import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Lecture1 from "../components/CV";
import Lecture2 from "../components/CV"
import Lecture3 from "../components/CV"
import Lecture4 from "../components/CV";
import Lecture5 from "../components/CV"
import Lecture6 from "../components/CV"
import Lecture7 from "../components/CV";
import Lecture8 from "../components/CV";
import Lecture9 from "../components/CV";
import Lecture10 from "../components/CV";

// import CV from "../static/CV.pdf";
// import Research from "../static/research_Angelini-Knoll.pdf";

const Lectures = {
   lecture1: Lecture1,
   lecture2: Lecture2,
   lecture3: Lecture3,
   lecture4: Lecture4,
   lecture5: Lecture5,
   lecture6: Lecture6,
   lecture7: Lecture7,
   lecture8: Lecture8,
   Lecture9: Lecture9,
   Lecture10: Lecture10,
};

export default block => {
  // component does exist
  if (typeof Lectures[block.lecture] !== "undefined") {
    return React.createElement(Lectures[block.lecture], {
      key: block._uid,
      block: block
    });
    // <PDF  pdfFile={block.paper} displayText={block.displayText}/> 
  }
  // component doesn't exist yet
  return React.createElement(
    () =><div></div>, // <div>The pdf {block.paper} has not been created yet.</div>
    { key: block._uid }
  );
}