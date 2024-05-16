import background from '../assets/gif.gif'
import foreground from '../assets/ah9vefdf-removebg-preview.png'
import NavBar from './NavBar'
import './Parallex.css'
import { useNavigate } from 'react-router-dom'
function Parallex(){
    const navigate = useNavigate()
    return (
        <div className="main">
             {/* <NavBar className="bg-[#10451d] w-[1518px]  min-h-screen text-white"/> */}
        <div className="demo">
            {/* <img src={background} alt="Error"  width="100%" height="100%" className="background"/> */}
            <img src={background} alt="Error" height="100%" width="100%" className="foreground"/>
            <h1 className="description">ECO-LOG</h1>
        </div>

        <div className="first second third fourth section">
            <div className='border bg-slate-50 border-gray shadow-lg  w-[1200px] ml-40 -mt-[50px] mb-5 '>

            <div className="secHead">
                <h2>
                Say goodbye to overflowing bins and hello to efficiency! 
                </h2>
            </div>
                <p className="text">
             
                <br></br>
                Our smart technology ensures overflowing waste is promptly addressed with automatic notifications to nearby organizations
                Smart bins streamline waste management with real-time monitoring and automated notifications. Revolutionize waste management with our cutting-edge technology, ensuring timely responses to overflowing bins and seamless coordination with nearby organizations.
                </p>
            </div>

            <div className="bg bg1">
               
                <button className="desc" onClick={()=>navigate("/Market")}>Market Place </button>
                 {/* <img src={DaddyHundred} alt="Error" width="100%"/> */}
            </div>
            <div className='border bg-slate-50 border-gray-300 shadow-lg p-4 w-[1200px] ml-40 mt-[30px] mb-5 '>
                <p className="text">
                Recycle, Sell, Reward
              
                <br></br>
                Join us in closing the loop on waste while earning exciting perks!
                Sell your waste, earn perks, and enjoy discounts on our sustainable products!  Explore market place and get exclusive recycled products at lowest cost!!  
                Unleash Your Brand's Potential by diving into the world of marketing and learn how to build a strong brand identity that resonates with your audience.         
                </p>
            </div>

            <div className="bg bg2">
                <button className="desc" onClick={()=>navigate("/Education")}> Learn the process</button>

            {/* <img src={MumbaiKing} alt="Error" width="100% "/> */}
            </div>

            <div className='border bg-slate-50 border-gray-300 shadow-lg p-4 w-[1200px] ml-40 mt-[30px] mb-5'>
                <p className="text">
                Waste Segregation Made Simple Learn how to sort your waste like a pro, reducing landfill waste and promoting recycling
                <br></br> 
                  Seamless Navigation for effortlessly browse through our intuitive platform, with clear guides on how to buy, sell, and redeem rewards.
                  <br></br> 
                  Unleash Your Brand's Potential by diving into the world of marketing and learn how to build a strong brand identity that resonates with your audience.

                </p>
            </div>

            <div className="bg bg3">
                <button className="desc" onClick={()=>navigate("/Event")}>Campaign</button>
                {/* <img src={captain} alt="Error" width="100%"/>  */}
            </div>

            <div className='border bg-slate-50 border-gray-300 shadow-lg p-4 w-[1200px] ml-40  mt-8 mb-5 '>
                <p className="text">
                Stay connected with local environmental initiatives like river cleanings and tree plantations, and leverage our platform to promote and participate in these events for free marketing opportunities.              
                <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate quis aperiam esse enim ipsa sed quam delectus saepe vel.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Parallex