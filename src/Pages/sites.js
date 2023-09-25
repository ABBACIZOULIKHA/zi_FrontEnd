import React from 'react'
import Header from '../Components/Header'
import Sites_list from '../Components/Sites_list'
import { useParams } from 'react-router-dom'

export default function Sites() {
    let {idfdt} = useParams() ;
   
  return (
    <div>
        <Header/>
        <Sites_list fdt={idfdt}  />
    </div>
  )
}
