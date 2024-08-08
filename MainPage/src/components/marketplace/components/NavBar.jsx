import { useSelector } from 'react-redux';
import cart from '../assets/cart.jpg';
import logo from '../assets/ecommerce.jpeg'
import {FaShoppingCart} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
function NavBar()
{
    const {cart}=useSelector((state)=>(state));
    return(
        <div >
            <nav className='bg-[#543310] flex relative z-50 top-0 w-full items-center justify-around h-20  mx-auto'>
            <NavLink to="/">    
            <img src={logo} alt='error' height={100} width={100}></img>
            </NavLink>
            <div className='flex w-24 gap-6' >
                <NavLink to="/">
                <p className='text-[#F8F4E1] font-black'>Home</p>
                </NavLink>
                
                 <NavLink to="/cart">
                <div  className='relative'>
                <FaShoppingCart color='#F8F4E1' className='scale-125 translate-x-[-4px] translate-y-[3px]'  ></FaShoppingCart>
                {
                    cart.length>0 &&
                    <span className='absolute -top-1 -right-2 bg-[#803D3B] text-xs w-5 h-5 flex justify-center items-center text-[#f7f7f7] animate-bounce rounded-full'>{cart.length}</span>
                }
                </div>
                </NavLink>

            
            </div>

            </nav>
        </div>
    )
}

export default NavBar;