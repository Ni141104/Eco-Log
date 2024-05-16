import { useState } from "react";

function SalesData1({ setSalesForm }) {
    const [salesData, setSalesData] = useState({ days: "Select Day", type: "Select Type", price: "" });

    function salesChange(event) {
        setSalesData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function salesSubmit(event) {
        event.preventDefault();
        setSalesForm(false);
    }

    return (
        <div>
            <form onSubmit={salesSubmit}>
                <label htmlFor="days" className="text-[0.875rem] text-[#070707]  mb-1 leading-[1.375rem]">Day:</label>
                <select id="days" value={salesData.days} name="days" onChange={salesChange} className="bg-white rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full">
                    <option >Select an option</option>
                    <option >Sunday</option>
                    <option >Monday</option>
                    <option >Tuesday</option>
                    <option >Wednesday</option>
                    <option >Thursday</option>
                    <option >Friday</option>
                    <option >Saturday</option>
                </select>

                <label htmlFor="waste" className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">Waste Type:</label>
                <select id="waste" value={salesData.type} name="type" onChange={salesChange} className="bg-white rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full">
                    <option value="">Select an option</option>
                    <option value="DryWaste">DryWaste</option>
                    <option value="WetWaste">Wet Waste</option>
                    <option value="EWaste">E-Waste</option>
                    <option value="MetalWaste">Metal Waste</option>
                </select>

                <label htmlFor="price">
                    <p className="text-[0.875rem] text-[#070707] mb-1 leading-[1.375rem]">Price<sup className="text-[#ff2a2a]">*</sup></p>
                    <input type="text" id="price" name="price" onChange={salesChange} placeholder="in Rs. (K)" value={salesData.price} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full text-white" />
                </label>

                <button type="submit" className="text-[#070707] mt-3 bg-red-600 px-2 border border-solid rounded-lg">Submit</button>
            </form>
        </div>
    );
}

export default SalesData1;
