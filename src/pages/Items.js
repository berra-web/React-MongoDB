import React, {useState, useEffect} from 'react';
import ItemComp from '../components/ItemComp';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import styles from '../components/styleModules/items.module.css';

export default function Home() {
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
  
    // Display all posts
    return (
        <div className="container padding-bot">
            <div className="row">
                {posts.map(post => 
                    <motion.div key={post['_id']} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
                        <div className={`${styles.length} card mt-4`}>
                            {/* Gets the posts and adds a link to the posts via react-router-dom */}
                            <ItemComp post={post} length="long" />
                            <Link to={`/item-page/${post['_id']}`} ><button className="btn btn-outline-dark m-2">Se mer</button></Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
