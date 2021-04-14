import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styleModules/manage.module.css';

function ManageComp({ post, deletePost }) {
    return (
        <tr>
            <td>{post.title}</td>
            <td>{post.price} kr</td>
            <td>{post.stock} st</td>
            <td>            
                <Link to={`/update-post/${post['_id']}`}><button className="btn btn-primary btn-manage">Uppdatera</button></Link>
                <button className={`btn btn-danger ${styles.btnManage}`} onClick={(e) => deletePost(post['_id'])}>Ta bort</button>
            </td>
        </tr>
    )
}

export default ManageComp
