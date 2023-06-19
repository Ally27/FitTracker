import React from 'react';
import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';

function Nav(){
    function displayNavigation(){
        return(
            <ul className="flex-row">
                <li className="mx-1">
                    <Link to="/">
                        Home
                    </Link>
                </li>
            </ul>
        )
    }
    <header>
        <nav>{displayNavigation()}</nav>
    </header>
}


  export default Nav;