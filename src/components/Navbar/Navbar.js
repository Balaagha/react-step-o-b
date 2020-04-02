import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';
const Navbar = () => {
    return (
        <div className={'nav-container'}>
            <Link to={'/'} >Actual </Link>
            <Link to={'/archive'} >Archive </Link>
            <Link to={'/nodes/25'} >singlenodes </Link>
            <Link to={'/create'} >Create </Link>
        </div>
    );
};

export default Navbar;