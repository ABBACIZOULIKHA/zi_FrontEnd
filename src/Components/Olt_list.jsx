import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import {MdNavigateNext} from 'react-icons/md'
import { useEffect, useState } from "react";
import AddOlt from "../Components/AddOLt"
import {AiOutlineClose} from 'react-icons/ai'
export default function Olt_list() {
  const [listOfOlts, setListOfOlts] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/olts").then((response) => {
      setListOfOlts(response.data);
      setRecords(response.data)
    });
    
  }, []);
  
  const Filter = (event)=> {
    setRecords(listOfOlts.filter(f => f.cmp.toLowerCase().includes(event.target.value
      )))
  }
  const [showAddOlt, setShowAddOlt] = useState(false) ;
  const handelOnClose = () => setShowAddOlt(false)

  const deleteOlt = (id) => {
     const res = window.confirm('Do you really want to delete it ?')
    if (res) {axios
      .delete(`http://localhost:3001/olts/${id}`)
      .then(() => {
        axios.get("http://localhost:3001/olts").then((response) => {
      setListOfOlts(response.data);
      setRecords(response.data)
    });
            });}
     
  };
  return (

<div className='flex flex-col'>
  
<div className='flex flex-row justify-between  mx-32 my-10'>
    <div className='flex flex-row gap-4 '>
      <div className='flex flex-row border-2 rounded-md px-4 py-2'>
      <input onChange={Filter} placeholder='Select a technical center'/>
        <MdNavigateNext className='text-gris' size={30}/>
      </div>
      <button className='bg-bleuf text-white px-4 py-2 rounded-md'>Search</button>
    </div>
    { localStorage.getItem("profile") == "ADMIN" && 
    <button onClick={()=> setShowAddOlt(true)} className='bg-bleuf text-white px-4 py-2 rounded-md'>+ Add</button>
    }
    
    </div>
    <div className='grid grid-cols-4  mx-32 my-10 gap-4'>
     
     {
      records.map((value,key)=>{
        return (
        
          <div className='flex flex-col  border-2 rounded-md border-bleuf pb-4'>
        
          { localStorage.getItem("profile") == "ADMIN" && 
             <AiOutlineClose  onClick={() => {
            deleteOlt(value.id);
          }} size={30} className=' relative right-0 text-bleuf'/>
          }
         <Link to={`/sites_list/${value.id}`}>
          <h1>{value.cmp}</h1>
          <h1>{value.name}</h1>
          </Link>
          </div>   
         
        )
      })
     } 
  
    </div>

    <AddOlt visible = {showAddOlt} onClose={handelOnClose} />
</div>
  )
}
