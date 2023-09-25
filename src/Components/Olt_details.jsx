import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Olt_details(props) {
    const [oltObject, setOltObject] = useState({});
    const [name,setname] = useState(oltObject.name) ;
    const [stackVlan,setstackVlan] = useState(oltObject.stackVlan) ;
    const [neName,setneName] = useState(oltObject.neName) ;
    const [cmp,setcmp] = useState(oltObject.cmp) ;
    const [investNature,setinvestNature] = useState(oltObject.investNature) ;
    const [dwellingType,setdwellingType] = useState(oltObject.dwellingType) ;
    const [projectCode,setprojectCode] = useState(oltObject.projectCode) ;
    const [budgetCode,setbudgetCode] = useState(oltObject.budgetCode) ;
    const [geomarketingCode,setgeomarketingCode] = useState(oltObject.geomarketingCode) ;
    const [dwellingsNumber,setdwellingsNumber] = useState(oltObject.dwellingsNumber) ;
    const [addressIp,setAddressIp] = useState(oltObject.addressIp) ;
    const [erreur ,seterreur] = useState(false)
    useEffect(() => {
       
      axios.get(`http://localhost:3001/olts/byId/${props.idprops}`).then((response) => {
        setOltObject(response.data);
      });
    });

    const editOLt = () => {
    
      axios.put(
        "http://localhost:3001/olts/name",
        {
          newName: name,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/olts/stackVlan",
        {
          newStackVlan: stackVlan,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/olts/neName",
        {
          newNeName: neName,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });

      axios.put(
        "http://localhost:3001/olts/cmp",
        {
          newCmp: cmp,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
        
      });
      axios.put(
        "http://localhost:3001/olts/investNature",
        {
          newInvestNature: investNature,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/olts/dwellingType",
        {
          newDwellingType: dwellingType,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
        
      });
      axios.put(
        "http://localhost:3001/olts/projectCode",
        {
          newProjectCode: projectCode,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
        
      });
      axios.put(
        "http://localhost:3001/olts/budgetCode",
        {
          newBudgetCode: budgetCode,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/olts/geomarketingCode",
        {
          newGeomarketingCode: geomarketingCode,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }        
        
        
      });
      axios.put(
        "http://localhost:3001/olts/dwellingsNumber",
        {
          newDwellingsNumber: dwellingsNumber,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.put(
        "http://localhost:3001/olts/addressIp",
        {
          newAddressIp: addressIp,
          id: oltObject.id ,
        },
      ).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          seterreur(!erreur);
        }
      });
      axios.get(`http://localhost:3001/olts/byId/${props.idprops}`).then((response) => {
        setOltObject(response.data);
        if (erreur){
          alert("NOT updated ");
         }else{
          alert("updated successfully !!! ");
         }
      });
    
  };

  return (
    <div className='flex flex-col  items-center w-1/2'>
      <div className='flex flex-col gap-2 my-5'>
        <div className='flex items-start'><h1 className='text-gris text-2xl'>OLT DETAILS</h1></div>
        <div className='grid grid-cols-3 gap-2 '>
        <div className='flex flex-col  gap-1 bg-slate-200 rounded-md shadow-sm '>
               <h1 className='text-bleuf'>Name</h1>
              <input className='text-black bg-slate-200' placeholder={oltObject.name} onChange={(event) => {
               setname(event.target.value);
             }} />
        </div> 
        <div className='flex flex-col  gap-1 bg-slate-200 rounded-md shadow-sm '>
               <h1 className='text-bleuf'>Address Ip</h1>
              <input className='text-black bg-slate-200' placeholder={oltObject.addressIp} onChange={(event) => {
               setAddressIp(event.target.value);
             }} />
        </div>  
           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Stack Vlan</h1>
              
               <input className='text-black bg-slate-200' placeholder={oltObject.stackVlan} onChange={(event) => {
               setstackVlan(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>NE Name</h1>
               <input className='text-black bg-slate-200' placeholder={oltObject.neName} onChange={(event) => {
               setneName(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>CMP</h1>

               <input className='text-black bg-slate-200' placeholder={oltObject.cmp} onChange={(event) => {
               setcmp(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Investment</h1>
               <input className='text-black bg-slate-200' placeholder={oltObject.investNature} onChange={(event) => {
               setinvestNature(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Dwelling Type</h1>
               <input className='text-black bg-slate-200' placeholder={oltObject.dwellingType} onChange={(event) => {
               setdwellingType(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Project Code</h1>
               <input className='text-black bg-slate-200' placeholder={oltObject.projectCode} onChange={(event) => {
               setprojectCode(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Budget Code</h1>

               <input className='text-black bg-slate-200' placeholder={oltObject.budgetCode} onChange={(event) => {
               setbudgetCode(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Gemarketing Code</h1>
              <input className='text-black bg-slate-200' placeholder={oltObject.geomarketingCode} onChange={(event) => {
               setgeomarketingCode(event.target.value);
             }} />
           </div>  

           <div className='flex flex-col items-center gap-1 bg-slate-200 rounded-md shadow-sm'>
               <h1 className='text-bleuf'>Dwellings Number</h1>
               <input className='text-black bg-slate-200' placeholder={oltObject.dwellingsNumber} onChange={(event) => {
               setdwellingsNumber(event.target.value);
             }} />
           </div>  

          

        </div>
      </div> 
      <button onClick={editOLt} className='bg-bleuf text-white w-20 rounded-md px-2 py-1'>Update</button>

    </div>
  )
}
