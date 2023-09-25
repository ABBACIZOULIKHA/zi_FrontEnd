import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Profile_detail() {
  const [userObject, setUserObject] = useState({});
  const [firstname, setFirstName] = useState(userObject.firstname)
  const [lastname, setLastName] = useState(userObject.lastname)
  const [profile, setProfile] = useState(userObject.profile)
  const [username, setUsername] = useState(userObject.username)
  const [password, setPassword] = useState(userObject.password)
  const [erreur ,seterreur] = useState(false)
  useEffect(() => {
     
    axios.get(`http://localhost:3001/auth/byusername/${localStorage.getItem("username")}`).then((response) => {
      setUserObject(response.data);
    });
    
  });
   const editUser = () => {
    
      axios.put(
        "http://localhost:3001/auth/firstname",
        {
          newfirstname: firstname,
          id: userObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/auth/lastname",
        {
          newlastname: lastname,
          id: userObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/auth/profile",
        {
          newprofile: profile,
          id: userObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });

      axios.put(
        "http://localhost:3001/auth/username",
        {
          newusername: username,
          id: userObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.get(`http://localhost:3001/auth/byusername/${localStorage.getItem("username")}`).then((response) => {
      setUserObject(response.data);
      if (erreur){
        alert("not updated ");
       }else{
        alert("updated successfully !!! ");
       } 
    });
    
  };
  const editUserpassword = () => {
    axios.put(
      "http://localhost:3001/auth/password",
      {
        newpassword: password,
        id: userObject.id ,
      },
    ).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
       
      }else{
        alert("password updated successfully")
      }
    });
  }
  return (
    <div className='w-1/3 bg-bleuf rounded-md flex flex-col gap-3 '>
    <h1 className='text-white mt-2'>My Profile</h1>
    <div className='flex flex-col gap-3'>

    <div className='flex flex-col items-start mx-4'>
    <h1 className='text-white pl-3 '>First Name*</h1>
    <div className='flex items-start bg-white rounded-xl pl-3 w-full py-2' >
      <input onChange={(event) => {
               setFirstName(event.target.value);
             }} placeholder={userObject.firstname} /></div>
    </div>
    
    <div className='flex flex-col items-start mx-4'>
    <h1 className='text-white pl-3 '>Last Name*</h1>
    <div className='flex items-start bg-white rounded-xl pl-3 w-full py-2' >
      <input onChange={(event) => {
               setLastName(event.target.value);
             }} placeholder={userObject.lastname}/>
    </div>
    </div>
    
    <div className='flex flex-col items-start mx-4'>
    <h1 className='text-white pl-3 '>Profile*</h1>
    <div className='flex items-start bg-white rounded-xl pl-3 w-full py-2' >
      <input onChange={(event) => {
               setProfile(event.target.value);
             }}  placeholder={userObject.profile}/></div>
    </div>
    
    <div className='flex flex-col items-start mx-4'>
    <h1 className='text-white pl-3 '>Username*</h1>
    <div className='flex items-start bg-white rounded-xl pl-3 w-full py-2' >
      <input onChange={(event) => {
               setUsername(event.target.value);
             }}  placeholder={userObject.username}/>
    </div>
    </div>
    
    <div className='flex flex-col items-start mx-4'>
    <h1 className='text-white pl-3 '>Password*</h1>
    <div className='flex items-start bg-white rounded-xl pl-3 w-full py-2' >
      <input onChange={(event) => {
               setPassword(event.target.value);
             }} placeholder='.................'/>
             <button className='bg-bleuf rounded-md text-white py-1 px-1' onClick={editUserpassword}>Edit password</button>
             </div>
    </div>

    </div>

      <button onClick={editUser} className='bg-white text-bleuf rounded-md mx-4 my-5 py-2'>Update</button>
    </div>
  )
}
