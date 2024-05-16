import { colors } from "@mui/material";
import PieActiveArc from "../components/Graph";
import { green } from "@mui/material/colors";
import Graph from "../components/Graph";
import { Form } from "react-router-dom";
import { useState } from "react";
import PieChart from "../components/pieChart";

import BarChart1 from "../components/BarChart1";

import SalesData1 from "../components/SalesData1";
function Dashboard() {
  const[salesForm,setSalesForm]=useState(false);
const[inputData,setInputData]=useState(false);
const[FormData,setFormData]=useState({DryWaste:"", WetWaste:"",EWaste:"",MetalWaste:""})
function changeHandler(event){
    setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
    }))
}

function submitHandler(event){
event.preventDefault();
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