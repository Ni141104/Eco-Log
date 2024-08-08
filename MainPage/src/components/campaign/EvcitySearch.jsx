import React, { useState, useEffect } from 'react';
// import './EvcitySearch.css'
import Card from './EvCard';
const citySearch = ({ data, cityName }) => {
    const [searchTerm, setSearchTerm] = useState("pune");
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    console.log(cityName);

    useEffect(() => {
        // Filter campaigns based on the initial cityName
        const filtered = data.filter(campaign =>
            campaign.city.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCampaigns(filtered);
    }, [searchTerm, data, cityName]);

    return (
        <div >
            <span className='text-black font-serif font-bold'>Search City: </span>
            <input
                type="text"
                placeholder="Search by city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='text-black rounded-lg font-serif px-3' />
            <div className='flex flex-wrap gap-8 justify-center mt-5'>

                {filteredCampaigns.map(campaign => {
                    return <Card key={campaign.id} {...campaign} />

                })}
            </div>

        </div>
    );
};

export default citySearch;


