import Template from "../components/authentication/Template";
import signupImg from "../assets/studentlearning.png"
function SignUp({setIsLoggedIn}){
    return(
        <div className="bg-[#020617] h-full p-10 pt-16">
            <Template
            title="Making green the new black: waste management with style and substance."
            desc1="From landfill to lifestyle, making sustainability accessible"
            
            desc2="Waste not, want not!1 paving the path to a greener tomorrow"
            image={signupImg}
            formtype="signup"
            setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default SignUp;