import Addnewdoctor from "./components/Addnewdoctor"
import Doctordetails from "./components/Doctordetails"
// import Doctorcard from "./components/Doctorcard"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import './components/styles.css'
import { Routes,Route } from "react-router-dom"
import Weather from "./components/Weather"

// import { useState } from "react"
// import { useEffect } from "react"
function App() {
// let [count,setCount]=useState(0)
// let [othercount,setOthercount]=useState(0)
// useEffect(()=>{
//   console.log('api call logic is running')
// },[othercount])
  return (
    <div>
       {/* {count}
       <button onClick={()=>setCount(count+1)}>click</button>
         {othercount}
       <button onClick={()=>setOthercount(othercount+1)}>click o count</button>
      */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/add-doctor' element={<Addnewdoctor/>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
    
{/* <div className='doctorcontainer'>
      <Doctorcard name='john' specialization='Hearts specialist' gender='male'/>
      <Doctorcard name='madhu' specialization='Neuro specialist'  gender='male'/>
      <Doctorcard name='sivaram' specialization='Bones Specialist'  gender='male'/>
      <Doctorcard name='jessy' specialization='ortho Specialist'  gender='female'/>
</div> */}




    </div>
  )
}

export default App