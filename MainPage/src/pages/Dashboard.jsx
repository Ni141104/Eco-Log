import { colors } from "@mui/material";
import PieActiveArc from "../components/dashboard/Graph";
import { green } from "@mui/material/colors";
import Graph from "../components/dashboard/Graph";
import { Form } from "react-router-dom";
import { useState } from "react";
import PieChart from "../components/dashboard/pieChart";
import Calendar from 'react-calendar';
import BarChart1 from "../components/dashboard/BarChart1";

import SalesData1 from "../components/dashboard/SalesData1";
import axios from "axios";
import { FcCalendar } from "react-icons/fc";
function Dashboard() {
  const[salesForm,setSalesForm]=useState(false);
const[inputData,setInputData]=useState(false);
const[FormData,setFormData]=useState({DryWaste:null, WetWaste:null,EWaste:null,MetalWaste:null,date: new Date() })

const [calendar,setCalendar]=useState(false);
function changeHandler(event){
  if (event.target) {
    // Handle text input changes
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  } else {
    // Handle calendar date changes
    setFormData((prevData) => ({
      ...prevData,
      date: event
    }));
  }
}
const jwtToken=localStorage.getItem('jwtToken');
async function submitHandler(event){
  event.preventDefault();
  const date=FormData.date
  const DrywasteVolume=FormData.DryWaste;
  const DrywasteType="dryWaste";
  const wetWasteVolume=FormData.WetWaste;
  const wetWasteType="wetWaste";
  const EwasteVolume=FormData.EWaste;
  const EwasteType="eWaste";
  try{
  const response= await axios.post('http://localhost:3000/dashboard/updateWaste',{dryWasteVolume: Number(DrywasteVolume),
    wetWasteVolume: Number(wetWasteVolume),
    EWasteVolume: Number(EwasteVolume)},{
    headers: {
      'Authorization': `Bearer ${jwtToken}`,
      'Content-Type': 'application/json'
    }
  });
   const data=response.json();
   console.log(data);
  }
  catch(error){
    console.log("Error:",error);
  }
console.log(FormData);
setInputData(true);
}
    return (
        <div className="bg-white h-screen p-4 flex justify-center  ">
          
            <div >
              {
                (!inputData ) &&
                <div className="border border-solid w-[450px] h-96 mt-16 border-gray-400 shadow-lg">
            <p>
              Welcome to Dashboard
            </p>
           
            <form onSubmit={submitHandler}>
                    <label>            
                      <p className="text-[0.875rem] text-black mb-1 leading-[1.375rem]">Dry Waste<sup className="text-[#ff2a2a]">*</sup></p>
                     <input type="text" name="DryWaste" onChange={changeHandler} placeholder="dry waste" value={FormData.DryWaste} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-[400px] text-white"/>
                   </label>
                    <label>            
                      <p className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">Wet Waste<sup className="text-[#ff2a2a]">*</sup></p>
                     <input type="text" name="WetWaste" onChange={changeHandler} placeholder="wet waste" value={FormData.WetWaste} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-[400px] text-white"/>
                   </label>
                    <label>            
                      <p className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">E-Waste<sup className="text-[#ff2a2a]">*</sup></p>
                     <input type="text" name="EWaste" onChange={changeHandler} placeholder="E-waste" value={FormData.EWaste} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-[400px] text-white"/>
                   </label>
                    <label>     
                      <p className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">Wet Waste<sup className="text-[#ff2a2a]">*</sup></p>
                     <input type="text" name="MetalWaste" onChange={changeHandler} placeholder="Metal waste" value={FormData.MetalWaste} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-[400px] text-white"/>
                   </label>
                    <label>  
                      <p className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">Date<sup className="text-[#ff2a2a]">*</sup></p>
                      <div className="flex w-full">
                     <input type="text" name="MetalWaste" onChange={changeHandler} placeholder="Ex:Aug 7,2024" value={FormData.MetalWaste} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] relative hover:border-[#b9bac2] transition duration-100 w-[400px] text-white"/>
                     <FcCalendar size={30} className="absolute ml-[364px] mt-1" onClick={()=>setCalendar((prev)=>!prev)}/>
                     <p className='text-center'>
      {FormData.date.toDateString()}
      </p>
                      </div>
                  {
                    (calendar && <Calendar value={FormData.date} onChange={changeHandler}/>)
                  }          
                   </label>
                   <button className="text-[#070707] mt-3 bg-red-600 px-2 border border-solid rounded-lg">Submit</button>
                </form>
            </div>
              }

            </div>

            <div>
              {
                salesForm &&
                <SalesData1 setSalesForm={setSalesForm}/>
              }
            </div>
            <div className="flex ">
              {
                (inputData && !salesForm) &&
                <div className="flex flex-col gap-4">
                   <div className="flex gap-[600px]">
                   <PieChart FormData={FormData}/>
                  <BarChart1/>
                  </div>
                  <div className="flex justify-around gap-3 w-full" >
                    <button onClick={()=>{setInputData(false)}} className="bg-green-700 border rounded p-2 mx-2 hover:bg-green-900 hover:border-black hover:scale-105 transition duration-150"> Update the Waste Category </button>
                   <button onClick={()=>{setSalesForm(true)}}className="bg-green-700 border rounded p-2 mx-2 hover:bg-green-900 hover:border-black hover:scale-105 transition duration-150"> Update the Sales Data </button>
                   </div>
                   </div>
              }
            </div>
        </div>
    )
}

export default Dashboard;