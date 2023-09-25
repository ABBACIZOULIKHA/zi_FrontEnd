import React from 'react'
import {MdNavigateNext} from 'react-icons/md'
export default function searchCenTech() {
  return (
    <div className='flex flex-row justify-between  mx-32 my-10'>
        <div className='flex flex-row gap-4 '>
          <div className='flex flex-row border-2 rounded-md px-4 py-2'>
          <input placeholder='Select a technical center'/>
            <MdNavigateNext className='text-gris' size={30}/>
          </div>
          <button className='bg-bleuf text-white px-4 py-2 rounded-md'>Search</button>
        </div>
        <button className='bg-bleuf text-white px-4 py-2 rounded-md'>+ Add</button>
    </div>
  )
}
