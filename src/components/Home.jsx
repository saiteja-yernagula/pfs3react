import { useState,useEffect } from "react";
import Doctorcard from "./Doctorcard";
import axios from 'axios'

function Home({newdoctor,deletedata,updatedata}) {
    let [doctors,setDoctors]=useState([])

    let [search ,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')

   async function getapidata(){
    let response=await axios.get('https://doctorapibackend.onrender.com/doctors')//{}
    console.log(response.data)
    setDoctors(response.data)
    }
    useEffect(()=>{
        getapidata()
    },[newdoctor])

    // useEffect(()=>{
    //   if(newdoctor){
    //     setDoctors(prev=>[...prev,newdoctor])
    //   }
    // },newdoctor)

    const filtereddoctors=doctors.filter((val)=>{
    return ((val.name.toLowerCase().includes(search.toLowerCase()))
     &&
     (specialization=="" || specialization==val.specialization)
      )
    })

  return (
    <div> 
      <input type="text" placeholder='search doctor' value={search} onChange={(e)=>setSearch(e.target.value)}  />
      <select name="" id=""  value={specialization} onChange={(e)=>setSpecialization(e.target.value)}>
        <option value="">All</option>
        <option value="Heart">Heart</option>
        <option value="Bones">Bones</option>
        <option value="Muscles">Muscles</option>
      </select>


    <div className='doctorcontainer'>
        {filtereddoctors.length>0 ?(filtereddoctors.map((doctor)=>(
           <Doctorcard updatedata={updatedata} deletedata={deletedata} id={doctor.id} key={doctor.id} name={doctor.name} gender={doctor.gender}
            specialization={doctor.specialization}/>
        ))): <h1>loading....</h1>} 
      
    </div>
    </div>
  )
}

export default Home