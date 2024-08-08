import toast from 'react-hot-toast';
import './EdCard.css';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { useState } from 'react';
// import { transformWithEsbuild } from 'vite';
function Card(props) {
    let chapters = props.chapters;
    let likedCourses = props.likedCourses;
    let setLikedCourse = props.setLikedCourse;
    // const [readMore,setReadMore]=useState('false');
    function clickHandler(){
        if (likedCourses.includes(chapters.id)) {
            //means it is already liked
            setLikedCourse((prev) => prev.filter((cid) => (cid !== chapters.id)));
            toast.error("Like removed");
        }
        else {
            if (likedCourses.length === 0) {
                //no element is present in likedcourses therefore we add this chapter.id
                setLikedCourse([chapters.id]);
            }
            else {
                //here likedcourses has element but not that one which we lk=iked now
                setLikedCourse((prev) => [...prev, chapters.id]);
            }

            toast.success("Liked Successfully");
        }
    }
    return (
        
        <div className=' w-[300px] h-[320px] bg-[#1A5D1A] hover:scale-105 duration-150 rounded-lg card2 '>
            <div>
                <a href='https://www.tandfonline.com/doi/full/10.1080/27658511.2021.1935532'>
                <img src={chapters.image.url} alt={chapters.image.alt} height={150} className='relative w-full rounded-t-lg h-[150px] image'></img>
                </a>
            </div>
            <div>
                <button className='absolute ml-[114px] -mt-7  bg-slate-600 p-2 rounded-full iconbtn2' onClick={clickHandler}>
                    {
                        likedCourses.includes(chapters.id) ? <FcLike fontSize={20}></FcLike> : <FcLikePlaceholder fontSize={20}></FcLikePlaceholder>
                    }
                </button>
            </div>
            <div className='p-4'>
                <p className='font-serif  title '>{chapters.title}</p>
                    
                <p className='text-sm details'>
                     {chapters.description.length > 100 ? (chapters.description.substr(0, 100)) + "..." : (chapters.description)}
                </p>
                   
                
            </div>
        </div>
    )
}
export default Card;