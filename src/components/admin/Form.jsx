import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styleModules/form.module.css';

export default function UpdateForm({post, handleSubmit, handleChange, code}) {

    const [isValidated, setIsValidated] = useState({});
    const [showValidation, setShowValidation] = useState(false);
    const buttonCode = code;

    const checkValidation = (e) => {
        handleChange(e); // Update state

        // Check validation
        const name = e.target.name;
        const value = e.target.value;

        // Valiation for price and stock
        if(name === "price" || name === "stock") {
            if(value.match("^[0-9]+$")) {
                validateInput(name, true)
            } else {
                validateInput(name, false)
            }
        }

        if(name !== "price" && name !== "stock") {
            if(value.length > 0) {
                validateInput(name, true)
            } else {
                validateInput(name, false)
            }
        }
    }

    const validateInput = (name, bool) => {
        setIsValidated({
            ...isValidated,
            [name]: bool
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        const array = Object.values(isValidated); // put all boolean values in array

        // Checks if every boolean is true in array
        if(array.every(bool => bool === true)) {
            handleSubmit();
        } else {
            setShowValidation(true);
        }
    }

    return (
        <form onSubmit={submitForm}>
            <div className="container">
                <div className={styles.text}>
                <label>Titel:</label>

                <textarea name='title' value={post.title} onChange={checkValidation} cols="30" rows="2" 
                className={`form-control mb-2 
                ${showValidation ? 
                isValidated["title"] === true ? styles.validate : styles.unvalid
                : null}`} required></textarea>

                <label>Beskrivning:</label>

                <textarea name='description' value={post.description}  onChange={checkValidation} cols="30" rows="10" 
                className={`form-control mb-2 
                ${showValidation ? 
                isValidated["description"] === true ? styles.validate : styles.unvalid
                : null}`} required></textarea>

                <label>Pris:</label>

                <textarea name='price' value={post.price} onChange={checkValidation} cols="30" rows="2" 
                className={`form-control mb-2 ${showValidation ? isValidated["price"] === true ? styles.validate : styles.unvalid : null}`} required></textarea>

                <label>På lager:</label>

                <textarea name='stock' value={post.stock} onChange={checkValidation} cols="30" rows="2" 
                className={`form-control mb-2 
                ${
                showValidation ? isValidated["stock"] === true ? styles.validate : styles.unvalid
                : null}`} required></textarea>

                <label>Kategori:</label>
                <textarea name='category' value={post.category} onChange={checkValidation} cols="30" rows="2" 
                className={`form-control mb-2 
                ${
                showValidation ? isValidated["category"] === true ? styles.validate : styles.unvalid
                : null}`}></textarea>
                    
                </div>
                <button className="btn btn-success btn-lg m-2">{buttonCode}</button>
                <Link to='/manage-post'><button className="btn btn-outline-secondary btn-lg m-2">&larr; Backa</button></Link>
            </div>
        </form>
    )
}