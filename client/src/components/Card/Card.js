import React from 'react';
import './Card.css';
import { Button } from 'react-bootstrap';

const Card = ({title,notes,onCardClick}) => {
    return(
        <div className="card">
            <center>
                <span className="card_title">{title}</span>
                <hr/>
                <textarea rows="12" cols="18">{notes}</textarea>
                {/* <input type="button" onClick={onCardClick} value="Delete"/> */}
                <Button variant="primary" onClick={onCardClick}> Delete </Button>
                {/* <Button variant="primary">Primary</Button> */}
            </center>
        </div>
    );
}

export default Card;