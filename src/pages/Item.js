import React, { useEffect, useState } from 'react';
import ItemComp from '../components/ItemComp';
import { Link } from 'react-router-dom';

export default function ItemPages({match}) {
    const [post, setPost] = useState({});

    // Get a specific post
    useEffect(() => {
        async function fetchUpdatePost(){
            const response = await fetch('http://localhost:5000/products/' + match.params.id);
            if(!response.ok){
                throw new Error ('HTTP Error ! status' + response.status);
            }
            const data = await response.json();
            setPost(data)
        }
        fetchUpdatePost()
    }, [match.params.id]);

    return (
        <div className="container">
            <div className="card m-4">
                <ItemComp post={post} length="single"/>
                <Link to='/' ><button className="btn btn-outline-dark">&larr; Backa</button></Link>
            </div>
        </div>
    )
}