import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from 'react-icons/fc'
import pattern from '../../assets/pattern.jpg';
import './Template.css'
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}){
    return(
        <div className="flex justify-center gap-x-8 w-11/12 max-w-[1260px] mx-auto ">
            <div className="flex flex-col  text-start w-11/12 max-w-[450px] ">
                <h1 className="text-lg font-serif font-bold text-[#767781]">{title}</h1>
                <p className="text=[1.125rem] leading[1.625rem] mt-4">
                    <span className="text-[#767781]">{desc1}</span>
                    <br></br>
                    <span className="text-blue-200 italic">{desc2}</span>
                </p>
                {formtype==="signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-2 gap-x-2">
                    <div className="h-[1px] w-full bg-[#26272a]"></div>
                    <p className="font-medium leading[1.375rem] text-[#26272a]">OR</p>
                    <div className="h-[1px] w-full bg-[#26272a]"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#b9bac2] border border-[#26272a] px-[12px] py-[8px] gap-x-2 hover:border-[#b9bac2] transition duration-100">
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div>
                <img src={pattern} alt="pattern" width={300} height={100} loading="lazy" className="pattern" ></img>
                <img src={image} alt="Students" width={300} height={100} loading="lazy" className="absolute bottom-80"></img>
            </div>
        </div>
    )
}

export default Template;