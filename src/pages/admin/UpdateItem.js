import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from '../../components/admin/Form';


export default function UpdateItem({match}) {
    const [post, setPost] = useState({});
    const history = useHistory();

    // Get specific post
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

    const handleSubmit = async (e) => {
        try {
            await fetch('http://localhost:5000/products/' + post['_id'], {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        history.push('/manage-post')
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name] : value
        })
    }

    // Displays a form with functions from UpdateItem
    return (
        <div>
            <h1 className="m-4">Uppdatera</h1>
            <Form post={post} handleSubmit={handleSubmit} handleChange={handleChange} code="Uppdatera"/>
        </div>
    )
}