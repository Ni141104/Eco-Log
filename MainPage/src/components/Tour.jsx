// import logo from './logo.svg';
// import './Tour.css';
import TourSection1 from './TourSection1';
import { useState } from 'react';
import TajMahal from '../assets/Logo/tata.png';
import HawaMahal from '../assets/Logo/Nike.jpeg';
import Kedarnath from '../assets/Logo/Oak.jpeg';
import Mumbai from '../assets/Logo/apple.jpg';
import Ahmedabad from '../assets/Logo/Ford.png';
import Pune from '../assets/Logo/Louis.jpg';
import Banglore from '../assets/Logo/NFC.jpeg';
import Slider from './Carousel';
import Carousel from './Carousel';
import market from '../assets/MarketPlace.png'
import demo from '../assets/RecyCledPlantPot.png'
import demo1 from '../assets/ecommerce.gif'
import demo2 from '../assets/SellGarbage.png'
import plant from '../assets/PlantPot.png'
import bussiness from '../assets/bussiness.gif'
import NavBar from './NavBar';
import Product from './Product';
function Tour() {
  const data = [
    {
      id: 1,
      name: "Tata",
      volume: 10,
      type: "Dry Waste",
      price: "2,500",
      image: TajMahal,
      cancel: "10,450"
    },
    {
      id: 2,
      name: "Nike",
      volume: 10,
      type: "Wet Waste",
      price: "3,000",
      image: HawaMahal,
      cancel: "10,450"
    },
    {
      id: 3,
      name: "Ford",
      volume: 25,
      type: "E-Waste",
      price: "6,000",
      image: Ahmedabad,
      cancel: "10,450"
    },
    {
      id: 4,
      name: "Oak Furniture",
      volume: 12,
      type: "Dry Waste",
      price: "4,000",
      image: Kedarnath,
      cancel: "10,450"
    },
    {
      id: 5,
      name: "Louis Vuitton",
      volume: 17,
      type: "Wet Waste",
      price: "7,000",
      image: Pune,
      cancel: "10,450"
    },
    {
      id: 6,
      name: "Apple",
      volume: "21",
      type: "E-Waste",
      price: "8,000",
      image: Mumbai,
      cancel: "10,450"
    },
    {
      id: 7,
      name: "National Fertilizer Company ",
      volume: "21",
      type: "E-Waste",
      price: "8,000",
      image: Banglore,
      cancel: "10,450"
    }
  ];
  const [tours, setData] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tours => tours.id !== id);
    setData(newTour);
  }
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <div>
          <button onClick={() => setData(data)}>
            Refresh to get all tours
          </button>
        </div>
      </div>
    )
  }
  return (

    < div >
    <div className='max-w-screen max-h-[500px]'>


      <Carousel>
        <img src={market} alt='error'></img>
        <img src={demo2} alt='error'></img>
        <img src={bussiness} alt='error'></img>
        <img src={demo} alt='error' className='border rounded-md'></img>
        <img src={plant} alt='error' className='border rounded-md'></img>
        <img src={demo1} alt='error' ></img>

      </Carousel>

    </div>
      <div className=' text-xl p-4 bg-slate-400/20 font-serif font-bold'>
        <h1 >Companies Demand </h1>
      </div>
      {/* <Product/> */}
      <TourSection1 tour={tours} removeTour={removeTour}></TourSection1>
      <div className="App">
      </div>
    </div >
  );
}

export default Tour;
