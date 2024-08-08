import './EvCard.css';
function Card({ id,
    organization,
    title,
    city,
    location,
    image, link }) {
    return (
        <div className="w-[600px] h-[400px] border bg-[#ecf39e] rounded-lg relative card1">
            <img src={image} alt="error" className=" h-[400px] w-[600px] border rounded-lg " />
           <figcaption>
                <p className="title">{title}</p>
                <p className="city">{city}</p>
                <span className="text-black">Location:
                 </span>
                <a href={link} >{location}</a>
           </figcaption>
            
        </div>
    )
}

export default Card;

