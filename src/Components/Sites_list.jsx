import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddFile from '../Components/AddFile' 
import {MdDelete} from "react-icons/md" 
import { Link } from 'react-router-dom';
import {BsFileEarmarkPdfFill} from 'react-icons/bs'
import {AiFillFileExcel} from 'react-icons/ai'
export default function Sites_list(props) {
  const [listOfSitesg, setListOfSitesg] = useState([]);
  const [show ,setShow] =useState(false)
  useEffect(() => {
    axios.get(`http://localhost:3001/sites/${props.fdt}`).then((response) => {
      setListOfSitesg(response.data);
      console.log(props.fdt) ;
      
    });
  }, []);
  

  const [showAddFile, setshowAddFile] = useState(false) ;
  const handelOnClose = () => setshowAddFile(false)

  const deleteSite = (id) => {
    const res = window.confirm('Do you really want to delete it ?')
   if (res) {axios
     .delete(`http://localhost:3001/sites/${id}`)
     .then(() => {
       axios.get(`http://localhost:3001/sites/${props.fdt}`).then((response) => {
       setListOfSitesg(response.data);
   });   });}
    
 };
 

  return (
  <div>


<div className='flex flex-col mt-5 border-2 rounded-md gap-4 p-5 mx-40 '>
     <div className='flex items-start'><h1 className='text-3xl text-gris'>Sites list</h1></div>
       <div className='flex flex-row justify-between'>
       <div className='flex flex-row items-start'>
       {/* <h1 className='text-gris'>Select FDT to display the sites list </h1> */}
        
       </div>

       {localStorage.getItem("profile") == "ADMIN" && 
       
             <button className='bg-bleuf text-white rounded-xl px-2 py-1' onClick={()=> setshowAddFile(true)}>+ Add File</button> 
       }

       </div>

       <div className='flex flex-row gap-2'> 
      {listOfSitesg.map((value,key)=>{

        return(
         <div className='flex flex-row justify-between border-2 border-gris rounded-md w-full'>
             
           
          
         <a href={value.url} className=' py-2'>{value.fileName}</a>
        
          <div className='flex flex-row'>
          <Link to={`/file/${value.fileName}`}><BsFileEarmarkPdfFill size={30} className='text-red-600 py-1'/></Link>
          <Link to={`/file2/${value.fileName}`}><AiFillFileExcel size={30} className='text-green-700 py-1'/></Link>
             
              { localStorage.getItem("profile") == "ADMIN" && 
           <MdDelete size={30} className='text-bleuf' onClick={() => {
            deleteSite(value.id);
          }} />
          }
      
          </div>
          
         </div>
        )
      })} 
      </div>
         <AddFile visible = {showAddFile} onClose={handelOnClose} ids={props.fdt}/>
        
    </div>
   

  </div>
  )
}
