import React from 'react';
import Icons from './Icons/Icons';
import Title from './Title/Title';
import Search from './Search/Search';
import './Nav.css';
const Nav = () => {
    return(
        <div className="nav">
            <Title/>
            <Search/>
            <Icons/>
        </div>
    );
}
export default Nav;