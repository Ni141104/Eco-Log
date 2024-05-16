import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './Campaign.css'
import TajMahal from '../assets/riverCleaning.jpg';
import HawaMahal from '../assets/ngo.jpeg';
import Kedarnath from '../assets/foodDrive.png';
import Mumbai from '../assets/cleanupdrive.jpg';
import Ahmedabad from '../assets/EnvironmentDay.png';
import Pune from '../assets/volunteers.png';
import Banglore from '../assets/treePlantation.jpeg';
import Container from './EvContainer';
import NavBar from './EvNavBar';
import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import CitySearch from './EvcitySearch';
function Campaign() {
  const data = [
    {
      id: 1,
      organization: "Catch Foudation",
      title: "River Cleaning Campaign",
      city: "Agra",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: TajMahal,
      link: "https://maps.app.goo.gl/bkCAZWxrbLHK6F8SA"
    },
    {
      id: 2,
      organization: "Swachta Foudation",
      title: "Clean Up Drive",
      city: "Jaipur",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Mumbai
    },
    {
      id: 3,
      organization: "Catch Foudation",
      title: "Environment Day Campaign",
      city: "Ahmedabad",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Ahmedabad
    },
    {
      id: 4,
      organization: "Catch Foudation",
      title: "Food Drive",
      city: "Ahmedabad",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Kedarnath
    },
    {
      id: 5,
      organization: "Catch Foudation",
      title: "Food Drive Campaign",
      city: "Pune",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Kedarnath
    },
    {
      id: 6,
      organization: "Catch Foudation",
      title: "Tree Plantation",
      city: "Pune",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Banglore
    },
    {
      id: 7,
      organization: "Catch Foudation",
      title: "NGO-Drive",
      city: "Mumbai",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Banglore
    },
    {
      id: 8,
      organization: "Catch Foudation",
      title: "River Cleaning Campaign",
      city: "Ahmedabad",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Banglore
    },
    {
      id: 9,
      organization: "Catch Foudation",
      title: "Go Green Campaign",
      city: "Aurangabad",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: HawaMahal
    },
    {
      id: 10,
      organization: "Catch Foudation",
      title: "Clean Up Drive",
      city: "Pune",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Mumbai
    },
    {
      id: 11,
      organization: "Catch Foudation",
      title: "Green Revolution",
      city: "Banglore",
      location: "panhala boys hostel,near NRI road, Opp.Mohini Guest house,Sinhagad College,Pune-411041",
      image: Banglore
    },

  ];
  let APIkey = "45c11af2e628e4bd88c3269b4f18a43a"
  const [grantLocation, setgrantLocation] = useState(false);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    }
    else {
      console.log("Geolocation is not supported");
    }
  }
  function showPosition(position) {

    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    showWeather(userCoordinates);
  }
  function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    // Here we get coordinates from user location using getlocation and showlocationfunctions
    if (!localCoordinates) {
      // If we cant able to find that means we doesnt gave access to give location
      setgrantLocation(true);
    }
    else {

      const coordinates = JSON.parse(localCoordinates);
      showWeather(coordinates);
    }
  }
  const [cityName, setcityName] = useState("");
  async function showWeather(coordinates) {
    const { lat, lon } = coordinates;

    setgrantLocation(false);
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': "yRE3D7gYD95LDcoKpZ4suQ==EHNR9XTk2xOB0STD",
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      // const data = JSON.parse(response);
      setcityName(data[0].name);
      // userContainer.classList.add("active");
      // console.log({ cityName });
    }
    catch (err) {

      console.log("Error in API fetching", err);
    }
  }

  useEffect(getLocation, []);
  const [myLocation, setmyLocation] = useState(0);

  return (
    <>
    <div className='bg-[#dad7cd] py-4 min-h-screen'>

      {/* <p className='text-[#111d13]'>Campaign</p> */}
      <div>
        {
          <CitySearch data={data} cityName={cityName}></CitySearch>
        }
        {/* <CitySearch data={data} cityName={cityName}></CitySearch> */}
        {/* <button onClick={() => getLocation()}>Allow</button> */}
        {/* <p>{cityName}</p> */}
        {/* <p>{search}</p> */}
        {/* <input type="text" placeholder="Search City.." onChange={changeHandler}></input> */}
        {/* <button onClick={submitCity}><AiOutlineSearch /></button> */}
        {/* <NavBar cityName={cityName} setcityName={setcityName} submitHandler={submitHandler} /> */}
        {/* <Container campaign={campaign} cityName={cityName} /> */}
    </div>
      </div>
    </>
  )
}

export default Campaign;
