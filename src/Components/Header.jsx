import React, { useEffect, useState } from 'react'
import Logo from '../Images/Logo.png'
import {BiUserCircle} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function Header() {
  const [userObject, setUserObject] = useState({});
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.setItem("accessToken", "");
    navigate('/');
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/auth/byusername/${localStorage.getItem("username")}`).then((response) => {
      setUserObject(response.data);
     
    });
    localStorage.setItem("profile",userObject.profile) ;
  });
  return (
    <div className='bg-bleuf flex flex-row justify-between py-2 px-6'> 
   <Link to='/olt_list'> <img src={Logo} className='w-32'/></Link>
    <div className='flex flex-row gap-4 items-center'>
    <button onClick={logOut} className='bg-white rounded-xl text-bleuf px-4  h-8'>Log out </button>
    <div className='flex flex-row gap-2'>
        <Link to='/account'><BiUserCircle className='opacity-70' size={50}/></Link>
        <div className='flex flex-col'>
           <h1 className='text-xl'>{userObject.profile}</h1>
           <h1 className='text-white'>{userObject.firstname} {userObject.lastname}</h1>   
        </div>
    </div>
    </div>
    </div>
  )
}
