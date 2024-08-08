import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';
function Cart() {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));//it is call back function for the summation of the total amount 
    }, [cart])//it will whenever change in cart occurs
    return (
        <div >
            {
                cart.length > 0 ? (
                    <div className='flex mt-[100px] gap-x-[20px] mx-[300px]'>

                        <div className='flex flex-col gap-y-5'>

                            {
                                cart.map((item) => {
                                    return <CartItem key={item.id} item={item} />
                                })
                            }
                        </div>
                        <div className='ml-6'>
                            <div className='font-bold font-serif text-xl text-[#543310]'>Your Cart</div>
                            <div className='font-bold  font-serif text-3xl text-[#543310] mt-[-8px]'>Summary</div>
                            <p className='font-semibold mt-4 text-[#AF8F6F]'><span>Total Item: {cart.length}</span></p>
                            <div>
                                <p className='font-semibold mt-4 text-[#AF8F6F]'>Total Amount:<span className='font-black'> ${totalAmount}</span></p>
                                <button className='mt-2 border border-[#74512D] text-[#74512D]  px-2 py-1 w-[200px] rounded-xl hover:bg-[#74512D]  hover:text-[#F8F4E1] transition duration-300 ease-in-out font-bold font-serif'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1> Cart is Empty</h1>
                        <Link to={"/"}><button> Shop Now</button></Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;