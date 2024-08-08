import React from 'react'
import './EdFilter.css'
import { filterData } from './EdData'
function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div className='flex justify-center  w-[1480px] gap-x-3 mt-2'>
            {
                filterData.map((data) => {
                    return (<button key={data.id} className='border border-solid rounded-md w-[150px] text-center py-2  text-white bg-[#0c830c]  changer shadow-lg transform hover:scale-110 transition duration-300 ease-in-out' onClick={() => filterHandler(data.title)}>
                        {data.title}
                    </button>)
                })
            }
        </div>
    )
}

export default Filter;