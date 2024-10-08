import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function SignUpForm({ setIsLoggedIn }) {
    const navigate = useNavigate()
    const [FormData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        password: "",
        confirmPassword: "",
        role:""
    })
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [accountType,setAccountType]=useState("student");
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    const username=FormData.firstName;
    const password=FormData.password;
    const email=FormData.email;
    const role=FormData.role;

    async function submitHandler(event) {
        event.preventDefault();
        console.log(username, password, email , role);
        try {
            const response = await axios.post('http://localhost:3000/user/signup', {username, password,email,role}, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error in signup:', error);
            toast.error("error in signup");
            return;
        }


        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...FormData,
            accountType
        };
        console.log(accountData);
        navigate("/Dashboard");
    }
    return (
        <div>
            <div className="flex bg-[#39393d] p-1 px-2 gap-x-2 my-6 rounded-full max-w-max text-[#b9bac2]">
                <button onClick={()=>setAccountType("student")} className={`${accountType==="student"?"bg-[#020617] rounded-full py-1 px-3":""}`}>
                    User
                </button>
                <button onClick={()=>setAccountType("instructor")} className={`${accountType==="instructor"?"bg-[#020617] rounded-full py-1 px-3":""}`}>
                    Company
                </button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col w-full mt-5 gap-y-3">

                <div className="flex gap-x-3">
                    <label>
                        <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">First Name<sup className="text-[#ff2a2a]">*</sup></p>
                        <input required type="text" name="firstName" onChange={changeHandler} placeholder="Enter First Name" value={FormData.firstName} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] text-[#edefff]  p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Last Name<sup className="text-[#ff2a2a]">*</sup></p>
                        <input required type="text" name="lastName" onChange={changeHandler} placeholder="Enter last Name" value={FormData.lastName} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] text-[#edefff]  p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>
                    </label>

                </div>

                <label>
                    <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Mobile Number<sup className="text-[#ff2a2a]">*</sup></p>
                    <input required type="tel" pattern="[0-9]*" name="phone" onChange={changeHandler} placeholder="Enter your mobile number here" value={FormData.phone} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] text-[#edefff] p-[8px] font-normal hover:border-[#b9bac2] transition duration-100 w-full"/>
                </label>
                <label>
                    <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Email Address<sup className="text-[#ff2a2a]">*</sup></p>
                    <input required type="email" name="email" onChange={changeHandler} placeholder="Enter Email Address" value={FormData.email} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] text-[#edefff]  hover:border-[#b9bac2] transition duration-100 w-full"/>
                </label>
                <label>
                    <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Role<sup className="text-[#ff2a2a]">*</sup></p>
                    <select required name="role" onChange={changeHandler}  value={FormData.role} className="bg-[#020617]  text-[#949499] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full">
                        <option className=" text-[#edefff]" value="select" >Select your role</option>
                        <option className=" text-[#edefff]" value="company" >Company</option>
                        <option className=" text-[#edefff]" value="user">User</option>
                        <option className=" text-[#edefff]" value="vendors">Vendors</option>
                    </select>
                </label>

                <div className="flex gap-x-2">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-[#ff2a2a]">*</sup></p>
                        
                        <input required type={showPassword ? ("text") : ("password")} name="password" onChange={changeHandler} placeholder="Enter Password " value={FormData.password} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>

                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute bottom-[7px] right-[10px]">
                            {showPassword ? (<AiOutlineEye className="fill-current text-white" fontSize={24}/>) : (<AiOutlineEyeInvisible className="fill-current text-white" fontSize={24}/>)}
                        </span>
                    </label>
                    <label className="relative w-full">
                        <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Confirm Password<sup className="text-[#ff2a2a]">*</sup></p>
                        
                        
                        <input required type={showConfirmPassword ? ("text") : ("password")} name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password " value={FormData.confirmPassword} className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>

                        <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute bottom-[7px] right-[10px]">
                            {showConfirmPassword ? (<AiOutlineEye  className="fill-current text-white" fontSize={24} />) : (<AiOutlineEyeInvisible className="fill-current text-white" fontSize={24}/>)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-400 py-2 mt-2 rounded-xl text-[#333533] border border-black font-medium hover:border-[#edefff] "> 
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm;