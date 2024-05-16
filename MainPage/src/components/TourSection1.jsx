import Card1 from './TourCard1';
// import './TourSection1.css'
function TourSection({ tour, removeTour }) {
    return (
        <div className='bg-white flex flex-wrap gap-x-20 justify-center'>
            {
                tour.map((obj) => {
                    return <Card1 key={obj.id} {...obj} removeTour={removeTour}></Card1>//We have to use key when we are using map function.It is thumb rule
                })
            }

        </div>
    );
}
export default TourSection;