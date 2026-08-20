import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Doctordetails() {
  let [doctor,setDoctor]=useState({})
  let {id}=useParams()

  function getapidata(){
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      }
    ];

    let finaldata=data.find((val)=>val.id==id)
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