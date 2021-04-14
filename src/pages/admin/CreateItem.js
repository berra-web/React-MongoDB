import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Form from '../../components/admin/Form';

export default function CreateItem() {
    const [post, setPost] = useState({});
    const history = useHistory();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPost({
            ...post,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        try {
            await fetch('http://localhost:5000/products/', {
                method: 'POST', 
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

    // Displays a form with functions from CreateItem
    return (
        <div>
            <h1 className="m-4">Skapa</h1>
            <Form post={post} handleSubmit={handleSubmit} handleChange={handleChange} code="Skapa"/>
        </div>
    )
}