import toast from 'react-hot-toast';
import logo from '../assets/Ecolog.png'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
function NavBar(props)
{
    let isLoggedIn=props.isLoggedIn;
    let setLoggedIn=props.setLoggedIn;
    const {cart}=useSelector((state)=>(state));
    return(
        <div className='flex px-12 justify-between text-[#10451d] text-lg items-center  max-w-full py-4 mx-auto font-medium  shadow '>

            <div className='flex space-x-8 item'>
            <Link to="/">
            <img src={logo} alt='logo' height={40} width={40}></img>
            </Link>
            
                <Link to="/" className='hover:text-[#543eed] hover:scale-110 transition duration-300'>Home</Link>
                <Link to="/Event" className='hover:text-[#543eed] hover:scale-110 transition duration-100'>Campaign</Link>
                <Link to="/Education" className='hover:text-[#543eed] hover:scale-110 transition duration-100'>Education</Link>
                <Link to="/Market" className='hover:text-[#543eed] hover:scale-110 transition duration-100'>Market</Link>
                <Link to="/Quiz" className='hover:text-[#543eed] hover:scale-110 transition duration-100'>Quiz</Link>
            </div>
            <div className='flex space-x-3 ' >
                <Link to="/Cart">
                <div  className='relative'>
                <FaShoppingCart color='#F8F4E1' className='scale-125 translate-x-[-4px] translate-y-[3px]'  ></FaShoppingCart>
                {
                    cart.length>0 &&
                    <span className='absolute -top-1 -right-2 bg-[#803D3B] text-xs w-5 h-5 flex justify-center items-center text-[#f7f7f7] animate-bounce rounded-full'>{cart.length}</span>
                }
                </div>
                </Link>
                {!isLoggedIn &&
                <Link to="/Login" className='border-solid border-2 border-sky-500 w-24 h-8 rounded-lg hover:scale-110 hover:bg-sky-500  hover:text-white transition duration-300 ease-in-out '>
                    <button>Login</button>
                </Link>
                }
                {
                    !isLoggedIn &&
                <Link to="/SignUp" className='border-solid border-2 border-sky-500 w-24 h-8 rounded-lg hover:scale-110 hover:bg-sky-500  hover:text-white transition duration-300 ease-in-out'>
                    <button >Sign Up</button>
                </Link>
                }

                {
                    isLoggedIn &&
                <Link to="/" className='border-solid border-2 border-sky-500 w-24 h-8 rounded-lg hover:scale-110 hover:bg-sky-500 hover:text-white transition duration-300 ease-in-out '>
                    <button onClick={()=>{
                        setLoggedIn(false);
                        toast.success("Logged Out");
                    }} >Log Out</button>
                </Link>
                }
                {
                    isLoggedIn &&
                <Link to="/Dashboard" className='border-solid border-2 border-sky-500 w-24 h-8 rounded-lg hover:scale-110 hover:bg-sky-500  hover:text-white transition duration-300 ease-in-out '>
                    <button>Dashboard</button>
                </Link>
                }
            </div>
        </div>
    )
}

export default NavBar;