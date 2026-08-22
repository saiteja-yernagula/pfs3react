import { useState } from "react";
import Home from "./Home";
import axios from "axios";
function Addnewdoctor() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");
  let [specialization, setSpecialization] = useState("");
  let [salary, setSalary] = useState("");
  let [newdoctor, setNewdoctor] = useState(null);
  async function handleform(e) {
    e.preventDefault();
    let formdetails = { name,age,gender,specialization,salary,id: Date.now(),
    };
    await axios.post(
      "https://doctorapibackend.onrender.com/doctors", formdetails
    );
    alert("data posted successfully");
    setNewdoctor("posted");
  }

async function deletedata(id){
    await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
    alert('deleteed')
    setNewdoctor('deleted')
}


  return (
    <div>
      <form action="" className="form-container" onSubmit={handleform}>
        <h1>Add new doctor</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter doctor name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="text"
          placeholder="Enter Age"
        />
        <select
          name=""
          id=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">others</option>
        </select>
        <input
          onChange={(e) => setSpecialization(e.target.value)}
          value={specialization}
          type="text"
          placeholder="Enter Specialization"
        />
        <input
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          type="text"
          placeholder="Enter Salary"
        />
        <button type="submit">Add doctor</button>
      </form>
      <Home newdoctor={newdoctor} deletedata={deletedata} />
    </div>
  );
}

export default Addnewdoctor;
