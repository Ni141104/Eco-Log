import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" })

    const [showPassword, setShowPassword] = useState(false);


    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    async function submitHandler(event) {
        const email=formData.email;
        const password=formData.password
        event.preventDefault();
        setIsLoggedIn(true);
        try {
            const response=await axios.post('http://localhost:3000/user/signin',{email,password})
            const {token}=response.data;
            console.log(token);
            localStorage.setItem('jwtToken',token);
        } catch (error) {
            console.log(error);
            
        }
        toast.success("Login in Successfully")
        navigate("/Dashboard")
    }
    return (
        <div >
            <form onSubmit={submitHandler} className="flex flex-col w-full  mt-5">
                <label className="w-full">
                    <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem]">Email Address<sup className="text-[#ff2a2a]">*</sup></p>
                    <input required type="text" name="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id" className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>
                </label>
                <label className="relative w-full">
                    <p className="text-[0.875rem] text-[#edefff] mb-1 leading-[1.375rem] ">Password<sup className="text-[#ff2a2a]">*</sup></p>
                    <input required type={showPassword ? ("text") : ("password")} name="password" value={formData.password} onChange={changeHandler} placeholder="Enter Password" className="bg-[#020617] rounded-[0.5rem] border border-[#26272a] p-[8px] hover:border-[#b9bac2] transition duration-100 w-full"/>
                    <span onClick={() => setShowPassword((prev) => !prev)} className="absolute bottom-[30px] right-[10px]">
                        {showPassword ? (<AiOutlineEye fontSize={24}/>) : (<AiOutlineEyeInvisible fontSize={24}/>)}
                    </span>

                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">
                            Forget Password?
                        </p>
                    </Link>
                </label>
                <button className="bg-yellow-400 py-2 rounded-xl text-[#333533] border border-black font-medium hover:border-[#edefff] ">
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default LoginForm;