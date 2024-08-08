import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-hot-toast';
import { add, remove } from "../redux/slices/cartSlice";
function Products({post})
{
    const{cart}=useSelector((state)=>(state));
    const dispatch=useDispatch();  

// function addToCart()
//     {
//         dispatch(add(post));
//         toast.success("Item added to Cart");
//     }

// function removeFromCart()
// {
//     dispatch(remove(post.i));

// }
    return (
        <div className=" flex flex-col items-center justify-between hover:scale-110 hover:z-10   gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-2xl transition duration-300 ease-in group">
            <div className="font-bold text-[#543310] text-xl text-left truncate w-40 mt-1">
                <h1>{
                post.title.length>0 ?(post.title.substr(0,15)+"..."):(post.title)}</h1>
            </div>
            <div className="w-40 text-[#AF8F6F] font-normal text-[11px] text-left">
                <p>
                    
                {
                post.description.length>50 ?(post.description.substr(0, 50) + "...") : (post.description)
                }
                </p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} alt="image" className="h-full w-ful "></img>
            </div>
            <div className="flex justify-around w-[280px] ">
                <p className="text-[#74512D] font-black ">${post.price}</p>
            <button>
                {
                 cart.some((p)=>p.id==post.id)
                 ?(<div>
                    <button className="text-[#74512D] border-2 border-[#74512D] rounded-full font-bold text-[12px] p-1 px-3 uppercase group-hover:bg-[#74512D] group-hover:text-[#F8F4E1] transition duration-200 ease-in-out " onClick={()=>{
                        dispatch(remove(post.id));
                        toast.error("Item remove from cart")
                        }}>Remove Item</button>
                 </div>)
                 :(<div>
                    <button className="text-[#74512D] border-2 border-[#74512D] rounded-full font-bold text-[12px] p-1 px-3 uppercase group-hover:bg-[#74512D] group-hover:text-[#F8F4E1] transition duration-200 ease-in-out" onClick={()=>{
                        dispatch(add(post));
                        toast.success("Item added to cart");
                    }}>Add to Cart</button>
                 </div>)//Means if the post id is present in cart then we have to show remove otherwise add
                }
            </button>
            </div>
        </div>
    )
}

export default Products;