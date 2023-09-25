import React from 'react' ;
import Header from '../Components/Header';
import Olt_details from '../Components/Olt_details';
import { useParams } from 'react-router-dom';
import Detail_fdt from '../Components/Detail_fdt';

export default function Sites_list() {
  let { id } = useParams();
  return (
    <div>
     <Header/>
    <div className='flex flex-row'> 
     <Olt_details idprops={id}/>
     <Detail_fdt idolt={id}/>
     </div>
      
    </div>
  )
}
