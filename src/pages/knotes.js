import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Complete from "../components/complete";
import Aklectureone from "../components/aklectureone";
import Aklecturetwo from "../components/aklecturetwo";
import Aklecturethree from "../components/aklecturethree";
import Aklecturefour from "../components/aklecturefour";
import Aklecturefive from "../components/aklecturefive";
import Aklecturesix from "../components/aklecturesix";
import Aklectureseven from "../components/aklectureseven";
import Aklectureeight from "../components/aklectureeight";
import Aklecturenine from "../components/aklecturenine";
import Aklectureten from "../components/aklectureten";
import Aklectureeleven from "../components/aklectureeleven";
import Aklecturetwelve from "../components/aklecturetwelve";
// import Aklecturethirteen from "../components/aklecturethirteen";
// import Aklecturefourteen from "../components/aklecturefourteen";
// import Aklecturefifteen from "../components/aklecturefifteen";

const Knotes = {
  complete: Complete,
  aklectureone: Aklectureone,
  aklecturetwo: Aklecturetwo,
  aklecturethree: Aklecturethree,
  aklecturefour: Aklecturefour,
  aklecturefive: Aklecturefive,
  aklecturesix: Aklecturesix,
  aklectureseven: Aklectureseven,
  aklectureeight: Aklectureeight,
  aklecturenine: Aklecturenine,
  aklectureten: Aklectureten,
  aklectureeleven: Aklectureeleven,
  aklecturetwelve: Aklecturetwelve,
  // aklectureeleven: Aklecturethirteen,
  // aklecturetwelve: Aklecturefourteen,
  // aklectureeleven: Aklecturefifteen,
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
