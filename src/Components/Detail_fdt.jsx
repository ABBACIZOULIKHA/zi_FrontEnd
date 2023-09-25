import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import AddFdt from './AddFdt';
export default function Detail_fdt(props) {
    const [listOfFdts, setListOfFdts] = useState([]);
    
  useEffect(() => {
    axios.get(`http://localhost:3001/Fdts/${props.idolt}`).then((response) => {
      setListOfFdts(response.data);
    });
    
  }, []);
  const [showAddFdt, setshowAddFdt] = useState(false) ;
  const handelOnClose = () => setshowAddFdt(false)

  const deleteFdt = (id) => {
    const res = window.confirm('Do you really want to delete it ?')
   if (res) {axios
     .delete(`http://localhost:3001/fdts/${id}`)
     .then(() => {
       axios.get("http://localhost:3001/fdts").then((response) => {
     setListOfFdts(response.data);
   });
           });}
 };
 
  return (
    <div className='flex flex-row w-1/2 gap-10 '> 
     <div className='flex flex-col gap-4 mt-5 p-5 w-full border-2 rounded-md mr-7 '>
       <div className='flex items-start'> <h1 className='text-gris text-2xl'>FDT list </h1></div>
      <div className='flex flex-row justify-between'>
         <h1 className='text-gris'>Select FDT to display the sites list </h1> 
         {localStorage.getItem("profile") == "ADMIN" && 
       
       <button onClick={()=> setshowAddFdt(true)} className='bg-bleuf px-2 py-1 shadow-sm text-white rounded-xl'>+ Add FDT</button>
 }
         
      </div>
      <div className='flex flex-wrap gap-2'>
       {listOfFdts.map((value,key)=>{
        return(
            <div className='flex flex-col border-2 border-bleuf rounded-md p-2 '> 
            
            { localStorage.getItem("profile") == "ADMIN" && 
           <AiOutlineClose  onClick={() => {
            deleteFdt(value.id);
          }} />
          }
          <Link to={`/sites/${value.id}`}><h1>{value.name}</h1></Link>
          </div> 
        )})
        } 
      </div>
    </div>
    <AddFdt visible = {showAddFdt} onClose={handelOnClose} ids={props.idolt}/>
    </div>
  )
 
}
