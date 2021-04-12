import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.module.css';
import s from './Header.module.css';

type HeaderPropsType = {
    login: string,
    id: number,
    isAuthorized: boolean,
    logOut: () => void
};


function Header({login, id, isAuthorized, logOut}: HeaderPropsType) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                    alt=""/>

            </div>
            <div className={s.auth}>
                {isAuthorized ?
                    <div>
                        <NavLink to={`profile/` + id}>{login}</NavLink>
                        <div>
                            <button onClick={logOut}>log out</button>
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>login</NavLink>}

            </div>
        </header>
    );
}

export default Header;