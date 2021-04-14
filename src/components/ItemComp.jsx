import React from 'react';
import { motion } from "framer-motion";
import styles from './styleModules/items.module.css'

// Framer motion code to create animations
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  };
  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
// Creates the post information for all pages
export default function HomeItem({ post, length }) {
    return (
        <motion.ul variants={container} initial="hidden" animate="visible">
            <div className="card-body">
                <motion.li key={0} variants={item}><img src="https://i2.wp.com/futurelearningorganisation.com/wp-content/uploads/2020/12/UnderConstruction.png?ssl=1" alt="Temp"></img></motion.li>
                <motion.li key={1} variants={item} className={`${styles.head} m-4`}>{post.title}</motion.li>
                <motion.li key={2} variants={item} className="mb-4"> 
                    {length === "long" ?
                        post.description.length > 80 ?
                            `${post.description.substring(0, 80)}...` : post.description
                        : post.description
                    }
                </motion.li>
                <motion.li key={3} variants={item} className="text-center"><strong>Pris: {post.price} kr</strong></motion.li>
                <motion.li key={4} variants={item} className="text-center">På lager: {post.stock} st</motion.li>
                <motion.li key={5} variants={item}>Kategori: {post.category}</motion.li>
            </div>
        </motion.ul>
    )
}