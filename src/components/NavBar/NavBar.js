import React from 'react';
import styles  from './NavBar.module.scss';

const NavBar = () => {

    return(
        <nav>
          <container className={styles.navContainer}>
            <a href="/"><span className='fa fa-tasks'></span></a>
                <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/favorite">Favourite</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                </ul>
          </container>
        </nav>
    );
};

export default NavBar;