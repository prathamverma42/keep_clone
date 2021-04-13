import React from 'react';
import './Title.css';
import image from './keep.png';
const Title = () => {
    return(
        <div className="title">
            <img src={image} width="50px" alt="Nothing"/>
            <span>NOTES</span>
        </div>
    );
}
export default Title;