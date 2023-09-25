import axios from 'axios';
import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
export default function AddUser({visible , onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");

  
  const addUser = () => {
   if (username !== "" && password !== "" && profile !== ""){
    const data = { username: username, password: password ,profile: profile };
    axios.post("http://localhost:3001/auth", data).then((response) => {
      alert("ADDED SUCCESSFULLY !!");
      
    });
   }
  };
  const handleOnClose =(e)=> {
    if (e.target.id === "container") onClose() ;
    
  } ;
  if (!visible) return null ;

  return (
    <form onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
       <div className='w-96 h-80 rounded-md border-bleuf border-4 flex flex-col bg-white '>
       <div className='flex  flex-col items-end m-2'>
       <AiOutlineClose 
        id='container'
        onClick={onClose}
       className='text-gris' size={30}/>
       </div>
        <div className='flex flex-col mx-5 gap-2'>
         <div className='flex flex-col items-start'>
          <h1>UserName*</h1>
         <div className='border-2 rounded-md  w-full  flex flex-col items-start'> 
         <input  onChange={(event) => {
                  setUsername(event.target.value);
                }}
                 className='w-full'  required   /></div>
         </div>
      
         <div className='flex flex-col items-start'>
          <h1>PassWord*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         <input   onChange={(event) => {
                  setPassword(event.target.value);
                }}
                 className= '   w-full' required /></div>
         </div>
         <div className='flex flex-col items-start'>
          <h1>Profile*</h1>
         <div className='border-2 rounded-md w-full flex flex-col items-start'> 
         {/* <input  onChange={(event) => {
                  setProfile(event.target.value);
                }}
                  className= 'w-full'/> */}



 <select onChange={(event) => {
                  setProfile(event.target.value);
                }} className='w-full' required >
  <option    ></option>
  <option    name="USER" value="USER">USER</option>
  <option    name="ADMIN" value="ADMIN">ADMIN</option>
  
</select>









         </div>
         </div>

        </div>
        
      
      
        <button onClick={addUser} className='text-white rounded-md py-2 my-5 bg-bleuf mx-5 '>Add User</button>
    </div>
    </form>
   
  )
}
