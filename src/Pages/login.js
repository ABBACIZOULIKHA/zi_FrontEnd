import React, { useState } from 'react'
import Logo from '../Images/Logo.png'
import {BiSolidUser} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        navigate('/olt_list');
       localStorage.setItem("username",username) ;
       
      }
    });
  };
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-bleuf'>
       <div className='flex flex-col gap-8'>
       <div className='flex justify-center items-center'>
       <img className=' w-40' src={Logo}/>
       </div>
       
       
       <div className='flex flex-col gap-4 bg-white shadow-2xl  rounded-md w-96  p-5'>
              <h1 className='text-2xl'>Welcome Back</h1>
              <h1
              className='text-gris'>Enter your credentials to access your accoount</h1>
              <div className='flex flex-col gap-3'>

              <div className='opacity-80  flex flex-row border-2 gap-1 rounded-md shadow-sm border-[#818080] px-3 py-2'>
                <BiSolidUser size={23} className='text-gris'/>
                <input className='text-gris ' 
                placeholder='Enter your username '
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                type="text"  />
              </div>
              <div className='opacity-80 flex flex-row border-2 gap-1 rounded-md shadow-sm border-[#818080] px-3 py-2' >
                <RiLockPasswordFill size={23} className='text-gris '/>
                <input placeholder='Enter your password' 
                 onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type='password' />
                </div>
              </div>
             {/* <Link to ='/olt_list'> */}
              <button onClick={login} className='bg-bleuf w-full text-white rounded-md py-2'>Sign in </button>
              {/* </Link>  */}
        </div>
       </div>
    </div>
  )
}
