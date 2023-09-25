import axios from 'axios';
import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



export default function AddFile({visible , onClose , ids}) {
  const [filename, setFilename] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();


  const addFile = () => {
   if (filename != ""){
    const data = { fileName: filename, url: url ,FdtId:ids };
    axios.post("http://localhost:3001/sites", data).then((response) => {
      navigate('/olt_list');
    });
   }
  };
  const handleOnClose =(e)=> {
    if (e.target.id === "container") onClose() ;
    
  } ;
  if (!visible) return null ;
  return (
   <div onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

       <form 
        className='w-96 h-64 rounded-md border-bleuf border-4 flex flex-col bg-white'>
       <div className='flex  flex-col items-end m-2'>
       <AiOutlineClose  
        id='container'
        onClick={onClose}
        className='text-gris' size={30}/>
       </div>
        <div className='flex flex-col mx-5 gap-2'>
         <div className='flex flex-col items-start'>
          <h1>File Name*</h1>
         <div className='border-2 rounded-md  w-full  flex flex-col items-start'> 
         <input   onChange={(event) => {
                  setFilename(event.target.value);
                }}  className='w-full'   type="text" required  /></div>
         </div>
        
      
         <div className='flex flex-col items-start'>
          <h1>File Url*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input    onChange={(event) => {
                  setUrl(event.target.value);
                }}  className='w-full' type="text" required/></div>
         </div>
        </div>

        <button onClick={addFile} className='text-white rounded-md py-2 my-5 bg-bleuf mx-5 '>Add File</button>
    </form>


   </div>
  )
}
