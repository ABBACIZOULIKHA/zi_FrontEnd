import React, { useState } from 'react'
// import {Document , Page} from 'react-pdf/dist/esm/entry.webpack'
// import pdfFile from '../Fills/pdfFile.pdf'
export default function () {
    const [numPages,setnumPages] = useState(null) 
    function onDocumentSuccess ({numPages}) {
        setnumPages(numPages)
    }
  return (
    <div>
      {/* <div>
        <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
            {
                Array(numPages).fill.map((_,i)=>(
                    <Page pageNumber={i+1}></Page>
                ))
            }
        </Document>
      </div> */}
    </div>
  )
}
