import { useState,useEffect } from "react";
import Doctorcard from "./Doctorcard";

function Home({newdoctor}) {
    let [doctors,setDoctors]=useState([])

    let [search ,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')

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
    setDoctors(data)

    }
    useEffect(()=>{
        getapidata()
    },[])

    useEffect(()=>{
      if(newdoctor){
        setDoctors(prev=>[...prev,newdoctor])
      }
    },newdoctor)

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
           <Doctorcard id={doctor.id} key={doctor.id} name={doctor.name} gender={doctor.gender}
            specialization={doctor.specialization}/>
        ))): <h1>loading....</h1>} 
      
    </div>
    </div>
  )
}

export default Home