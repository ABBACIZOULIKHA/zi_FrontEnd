import React from 'react'
import Header from '../Components/Header'
import Users_list from '../Components/Users_list'
import Profile_detail from '../Components/Profile_detail'
export default function account() {
  return (
    <div>
    <Header/>
    <div className='flex flex-row gap-20 m-10'>
    <Profile_detail/>
    <Users_list/>
    </div>
    </div>
  )
}
