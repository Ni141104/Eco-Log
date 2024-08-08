import Template from "../components/authentication/Template";
import loginImg from "../assets/teacherteaching.png"
function Login({setIsLoggedIn}){
    return(
        <div className="bg-[#020617] h-[43rem] pt-16">
            <Template
            title="Welcome Back"
            desc1="Turning waste woes into eco wins, effortlessly."
            desc2="Trash to triumph where innovation meets conservation."
            image={loginImg}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login;