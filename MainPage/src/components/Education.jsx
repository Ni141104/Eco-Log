// import logo from './logo.svg';
// import './Education.css';
import { filterData,data } from './EdData';
import Navbar from './EducationNavbar';
import Filter from './EdFilter';
import Container from './EdContainer';
// import Card from './components/Card';
import { useEffect, useState } from 'react';
import Spinner from './EdSpinner';
import { toast } from 'react-toastify';// To use it we have to install npm i react-toastify and will import first in index js then in this

function Education() {

  const [courses, setCourses] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);
  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(apiUrl);
  //     const output = await res.json();
  //     setCourses(output.data);
  //     console.log(output.data);

  //   }
  //   catch (error) {
  //     toast.error("Something went wrong");
  //   }
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchData();//Because the data will require and we doesn't need any on click function to call it
  // }, []);
  return (
    <div className=' justify-items-center bg-[#fff5c6]'>
      <div className='overflow-x-hidden'>
        <Navbar />
      </div>
      <div className='overflow-x-hidden mt-3'>
        <Filter filterData={filterData} category={category} setCategory={setCategory} >

        </Filter>
      </div>
      <div className='overflow-x-hidden'>
        {
          loading ? <Spinner></Spinner> : <Container courses={courses} category={category}></Container>
        }
      </div>
     
    </div>
  );
}

export default Education;
