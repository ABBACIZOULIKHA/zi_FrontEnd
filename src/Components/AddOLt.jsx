import axios from 'axios';
import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
export default function AddOLt({visible , onClose }) {
  const [name,setName ] = useState("");
  const [stackVlan,setStackVlan ] = useState("");
  const [neName,setNeName ] = useState("");
  const [cmp,setCmp ] = useState("");
  const [investNature,setInvestNature ] = useState("");
  const [dwellingType,setDwellingType ] = useState("");
  const [projectCode,setProjectCode ] = useState("");
  const [budgetCode,setBudgetCode ] = useState("");
  const [ geomarketingCode,setGeomarketingCode ] = useState("");
  const [dwellingsNumber,setDwellingsNumber ] = useState("");
  const [addressIp,setAddressIp ] = useState("");
  const navigate = useNavigate();

  const addOlt = () => {
   if (name !== "" && cmp !== ""){
    const data = { name: name, stackVlan: stackVlan , neName:neName ,cmp: cmp  ,investNature : investNature,
      dwellingType : dwellingType,projectCode:projectCode,budgetCode:budgetCode,geomarketingCode:geomarketingCode , 
      dwellingsNumber: dwellingsNumber, addressIp:addressIp};
    axios.post("http://localhost:3001/olts", data).then((response) => {
      
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

      <form className=' w-96 h-screen rounded-md border-bleuf border-4 flex flex-col bg-white'>
       <div className='flex  flex-col items-end m-2'>
       <AiOutlineClose 
       id='container'
       onClick={onClose}
       className='text-gris' size={30}/>
       </div>
        <div className='overflow-auto flex flex-col mx-5 gap-2'>
          
         <div className='flex flex-col items-start'>
          <h1>Name*</h1>
         <div className='border-2 rounded-md  w-full  flex flex-col items-start'> 
         <input onChange={(event) => {
                  setName(event.target.value);
                }} className='w-full  required:border-red-500 ' type="text" required /></div>
         </div>
        
         <div className='flex flex-col items-start'>
          <h1>Address IP*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input onChange={(event) => {
                  setAddressIp(event.target.value);
                }}  className= 'w-full'/></div>
         </div>

         <div className='flex flex-col items-start'>
          <h1>Stack Vlan*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input onChange={(event) => {
                  setStackVlan(event.target.value);
                }}  className= '   w-full'/></div>
         </div>
        
         <div className='flex flex-col items-start'>
          <h1>NE Name*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setNeName(event.target.value);
                }} className= '   w-full '/></div>
         </div>

         <div className='flex flex-col items-start'>
          <h1>CMP*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
        
         <select onChange={(event) => {
                  setCmp(event.target.value);
                }} className='w-full'  required>
               <option   ></option>
               <option    name="TIPAZA" value="TIPAZA">TIPAZA</option>
               <option    name="HADJOUT" value="HADJOUT">HADJOUT</option>
               <option    name="CHERCHELL" value="CHERCHELL">CHERCHELL</option>
               <option    name="GOURAYA" value="GOURAYA">GOURAYA</option>
               <option    name="AHMER EL AIN" value="AHMER EL AIN">AHMER EL AIN</option>
               <option    name="FOUKA" value="FOUKA">FOUKA</option>
               <option    name="KOLEA" value="KOLEA">KOLEA</option>
               <option    name="BOUISMAIL" value="BOUISMAIL">BOUISMAIL</option>
  
         </select>
         
         </div>
         </div>
         <div className='flex flex-col items-start'>
          <h1>Investment Nature*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setInvestNature(event.target.value);
                }} className= '   w-full'/></div>
         </div>
         <div className='flex flex-col items-start'>
          <h1>Dwelling Type*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setDwellingType(event.target.value);
                }} className= '   w-full'/></div>
         </div>

         <div className='flex flex-col items-start'>
          <h1>Project Code*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setProjectCode(event.target.value);
                }} className= '   w-full'/></div>
         </div>
         <div className='flex flex-col items-start'>
          <h1>Budget Code*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setBudgetCode(event.target.value);
                }} className= '   w-full'/></div>
         </div>

         <div className='flex flex-col items-start'>
          <h1>Geomarketing Code*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setGeomarketingCode(event.target.value);
                }} className= '   w-full'/></div>
         </div>

         <div className='flex flex-col items-start'>
          <h1>Dwellings Number*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setDwellingsNumber(event.target.value);
                }} className= '   w-full'/></div>
         </div>
        </div>
        
      
      
        <button onClick={addOlt} className='text-white rounded-md py-2 my-5 bg-bleuf mx-5 '>Add Olt</button>
    </form>
   </div>
  )
}
