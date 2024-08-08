import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Container from './EvContainer';
function NavBar({ cityName, setcityName, submitHandler }) {
    function changeHandler(event) {
        setcityName(event.target.value);
        console.log(cityName);
    }

    // Call the submitHandler function when the button is clicked
    function submitCity() {
        submitHandler(cityName);
    }

    return (
        <div>
            <input type="text" placeholder="Search City.." onChange={changeHandler}></input>
            {/* Call the submitCity function when the button is clicked */}
            <button onClick={submitCity}><AiOutlineSearch /></button>
        </div>
    );
}


export default NavBar;