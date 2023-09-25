import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import AddUser from '../Components/AddUser' 
export default function Users_list() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/auth").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  const deleteUser = (id) => {
   
       const res = window.confirm('Do you really want to delete it ?')
      if (res) {axios
        .delete(`http://localhost:3001/auth/${id}`)
              .then(() => {
           axios.get("http://localhost:3001/auth").then((response) => {
              setListOfUsers(response.data);
    });
   });}
  };
  
  const [showAddUser, setshowAddUser] = useState(false) ;
  const handelOnClose = () => setshowAddUser(false)

  return ( 
    <div className='flex flex-col gap-4 w-1/2'>
{
      localStorage.getItem("profile") == "ADMIN" &&
         <div className='flex justify-end'> 
        <button  onClick={()=> setshowAddUser(true)} className='bg-bleuf text-white rounded-md px-4 py-2'>+ Add User</button>
        </div>
}      
        
      <div className='flex justify-start'>
      <h1 className='text-gris'>Users List </h1>
      </div>

  <div>     
<table className=' my-4'>
  <thead className='shadow-md h-10 rounded-t-lg rounded-xl '>
    <tr >
      <th className='px-8 '>First Name</th>
      <th className='px-8'>Last Name</th>
      <th className='px-8 '>Profile</th>
      {  localStorage.getItem("profile") == "ADMIN" && <th className='px-8 '>Delete</th>}
      
    </tr>
  </thead>
  <tbody>
   


    {
      listOfUsers.map((value,key)=>{
        return (
          
          <tr className='my-2'>
          <td className='px-8 py-4  '>{value.firstname}</td>
          <td className='px-8 py-4 '>{value.lastname}</td>
          <td className='px-8 py-4 '>{value.profile}</td>
          { localStorage.getItem("profile") == "ADMIN" && 
          <td  className='px-8 py-4 ' >
          <AiFillDelete 
          onClick={() => {
            deleteUser(value.id);
          }}
          className='text-orange' size={25} /></td>
          }
          
        </tr> 
        )
      })
     } 

  </tbody>
</table>
    </div> 

    <AddUser visible = {showAddUser} onClose={handelOnClose} />
</div>
  )
}
