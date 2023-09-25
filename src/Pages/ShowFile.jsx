import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ShowFile() {
  const [file, setFile] = useState({})
  let {name } = useParams() ;
   
  useEffect(() => {
    try {
      let file = require( `../Fills/Pdfs/${name}.pdf`)
     setFile(file) 
    } catch (error) {
      console.log("the file doesn't existe")
    }
  }, []);
  return (
    <div>
     
        <iframe src={file} className='bg-slate-300 w-full h-screen'></iframe>
    </div>
  )
}
