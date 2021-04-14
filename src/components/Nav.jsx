import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to='/'>Hem</Link>
                <Link className="navbar-brand" to='/manage-post'>Admin</Link>
            </div>
        </nav>
    )
}