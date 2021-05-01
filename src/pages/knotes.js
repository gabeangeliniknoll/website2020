import React from "react";

// import PDF from "../components/pdf"

// Imported pdf files in order of appearance
import Complete from "../components/akthyw2021/complete";
import Aklectureone from "../components/akthyw2021/aklectureone";
import Aklecturetwo from "../components/akthyw2021/aklecturetwo";
import Aklecturethree from "../components/akthyw2021/aklecturethree";
import Aklecturefour from "../components/akthyw2021/aklecturefour";
import Aklecturefive from "../components/akthyw2021/aklecturefive";
import Aklecturesix from "../components/akthyw2021/aklecturesix";
import Aklectureseven from "../components/akthyw2021/aklectureseven";
import Aklectureeight from "../components/akthyw2021/aklectureeight";
import Aklecturenine from "../components/akthyw2021/aklecturenine";
import Aklectureten from "../components/akthyw2021/aklectureten";
import Aklectureeleven from "../components/akthyw2021/aklectureeleven";
import Aklecturetwelve from "../components/akthyw2021/aklecturetwelve";
import Aklecturethirteen from "../components/akthyw2021/aklecturethirteen";
import Aklecturefourteen from "../components/akthyw2021/aklecturefourteen";

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
  aklecturethirteen: Aklecturethirteen,
  aklecturefourteen: Aklecturefourteen,
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
