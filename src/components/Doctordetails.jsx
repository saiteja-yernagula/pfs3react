import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
function Doctordetails() {
  let [doctor,setDoctor]=useState({})
  let {id}=useParams()

  async function getapidata(){
    let response=await axios.get('https://doctorapibackend.onrender.com/doctors')//{}
    let finaldata=response.data.find((val)=>val.id==id)
    setDoctor(finaldata)
    console.log(finaldata)
  }
  useEffect(()=>{
   getapidata()
  },[])
  return (
    <div>
    <h1>{doctor.name}</h1>
    <div>{doctor.age}</div>
    <div>{doctor.salary}</div>
    <div>{doctor.gender}</div>
    <div>{doctor.specialization}</div>
    </div>
  )
}

export default Doctordetails