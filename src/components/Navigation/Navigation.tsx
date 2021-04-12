import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.module.css';
import s from "./Navigation.module.css";
import FriendsContainer from "./Friends/FriendsContainer";



function Navigation() {
    return (
        <nav className={s.navigation}>
            <ul>
                <li className={`${s.item}`}><NavLink to="/profile" >Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" >Dialogs</NavLink></li>
                <li className={s.item}><NavLink to="/news" >News</NavLink></li>
                <li className={s.item}><NavLink to="/music" >Music</NavLink></li>
                <li className={s.item}><NavLink to="/users" >Users</NavLink></li>
                <li className={s.item}><NavLink to="/settings" >Settings</NavLink></li>
            </ul>
        <FriendsContainer/>
        </nav>
    );
}

export default Navigation;