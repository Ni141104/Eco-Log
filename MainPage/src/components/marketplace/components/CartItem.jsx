import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import { remove } from '../redux/slices/cartSlice';
function CartItem({item})
{
    const dispatch=useDispatch();
    return (
        <div>
        <div className='flex h-[200px] w-[500px] gap-3  '>
            <div className='h-[180px] min-w-[200px] '>
                <img src={item.image} className='h-full px-3'></img>
            </div>
            <div className='flex flex-col gap-y-[10px]'>
                
                <h1 className='font-bold text-[#543310] text-lg text-left  mt-1 '>{item.title}</h1>
                <h1 className='text-[#74512D]'>{item.description.length>70?(item.description.substr(0,70)+"..."):(item.description)}</h1>
                <div className='flex w-[270px] justify-between'>
                    <p className='text-[#74512D] font-black '>${item.price}</p>
                <AiFillDelete onClick={()=>{
                    dispatch(remove(item.id));
                    toast.error("Item removed from cart")
                }} className='bg-[#74512D] p-[3.5px] scale-150 rounded-full ' color='#F8F4E1'/>
                </div>
            </div>
        </div>
        <div className='border border-[#74512D]'>

        </div>

        </div>
    )
}

export default CartItem;