import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Products from '../components/Products';

function Home() {
    const url = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProducts() {
        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            setPosts(data);
            console.log(posts);
        }
        catch (e) {
            console.log("Error occurs in fetching API");
            setPosts([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='mt-[130px]'>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ? (
                        <div className=' grid grid-cols-4 max-w-6xl p-2 mx-auto  space-x-5 space-y-10  min-h-[80vh]'>
                            {
                                posts.map((post) => (
                                    <Products key={post.id} post={post} />
                                ))
                            }
                        </div>
                    ) : (<div>
                        <p>No post found</p>
                    </div>)
            }
        </div>
    )
}

export default Home;