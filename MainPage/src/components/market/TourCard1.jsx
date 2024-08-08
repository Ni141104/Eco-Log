import React, { useState } from 'react';
import './TourCard1.css';
import cart from '../../assets/shopcart2.jpg'
function Card1({ id, name, volume, info, image, removeTour, price, type,cancel }) {
    const [weight, setWeight] = useState(volume);
    const [remaining, setRemaining] = useState(volume);

    const addition = () => {
        if (weight < volume) {
            setWeight(prevWeight => prevWeight + 1);
        }
    };

    const subtract = () => {
        if (weight > 0 ) {

            setWeight(prevWeight => prevWeight - 1);
        }
    };

    const sell = () => {
        removeTour(id)
        setRemaining(prevRemaining => (prevRemaining - weight) < 0 ? 0 : prevRemaining - weight);

    };

    return (
        <div className='flex  h-[360px] w-[600px] mt-10 bg-white product1'>
            <div className='w-[300px] h-[360px]'>
            <img src={image} alt='error' className="w-full h-full" ></img>
            </div> 
            <div className="w-[400px] ml-[30px] flex flex-col text-left">
                <h4 className="text-black text-2xl font-serif mt-5 head">{name}</h4>
                <h4 className="head text-xl">Volume :- {remaining} Kg</h4>
                <p className="type1">Type:- {type}</p>
                <p className="content1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores alias in accusantium fugiat officiis vel!</p>
            <p className='rate'>
                <span className='original'>{price}</span>
                {/* <span className='cancel'>{cancel}</span> */}
            </p>
            <div className='border shadow-md hover:shadow-lg rounded-lg flex justify-between bg-white text-black w-[100px]'>

            <button onClick={addition} className='bg-black bg-opacity-25 w-1/3'>+</button>
            <span>{weight}</span>
            <button onClick={subtract} className='bg-black bg-opacity-25 w-1/3'>-</button>
            </div >
            <button className='w-[200px] h-[40px] shadow-md hover:shadow-xl border-black bg-[#e84f69] rounded-lg flex mt-[20px] gap-x-1' onClick={sell}>
                <img src={cart} width={30} className='mt-[4px] align-middle ml-[60px] rounded-lg'></img>
                <span className='ml-[10px] mt-1 text-2xl font-serif'>
                Sell
                </span>
            </button>
            </div>
        </div>
    );
}

export default Card1;
