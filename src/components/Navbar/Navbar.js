import React from 'react';
import {NavLink,Link} from 'react-router-dom'
import './Navbar.scss';
const Navbar = () => {
    return (
        <div className={'nav-container'}>
            <div className="nav-left">
                <div className="logo-box">
                    <Link to={'/'}>NotesApp</Link>
                </div>
                <div className={"navlink-wrapper"}>
                    <NavLink to={'/'} exact >Actual </NavLink>
                    <NavLink to={'/archive'} >Archive </NavLink>
                </div>
            </div>
            <div className="nav-right">
                <div className={'navlink-wrapper-right'}>
                    <NavLink to={'/create'} >Create </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;