import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ManageComp from '../../components/admin/ManageComp';
import styles from '../../components/styleModules/manage.module.css';

export default function ManageItem() {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        fetchPosts()
    }, []);

    // Get all posts
    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/');
            if(!response.ok){
                throw new Error('HTTP Error' + response.status);
            }
            const data = await response.json();
            setPosts(data);
            console.log("error");
        } catch (error) {
            console.log(error);
        }
    }

    // Delete function
    const deletePost = async (postId) => {
        try {
            await fetch('http://localhost:5000/products/' + postId, {
            method: 'DELETE'
        });
        } catch (error) {
            console.log(error);
        }
        fetchPosts()
    }

    // Display all posts with buttons to edit and delete
    return (
        <div className="container padding-bot">
            <Link className={`${styles.createBtn} btn btn-success btn-lg`} to='/create-post'>Ny vara</Link>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
                <table className="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th >Titel</th>
                            <th >Pris</th>
                            <th >Lager</th>
                            <th >Hantera</th>
                        </tr>
                    </thead>
                    <tbody>
                    {posts && posts.map(post => {
                        return (
                            <ManageComp post={post} key={post['_id']} deletePost={deletePost}/>
                        )}
                    )}
                    </tbody>
                </table>
            </motion.div>
        </div>
    )
}