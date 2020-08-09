import React from "react"

const PDF = ({ pdfFile, displayText }) =>  (
    <>
    <a href={pdfFile}>{displayText}</a>
    </>
)

export default PDF

