import React from 'react';
import './Label.css';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import DeleteIcon from '@material-ui/icons/Delete';
// import PinDropIcon from '@material-ui/icons/PinDrop';

const Label = ({notePage,trashPage}) => {
    return (
        <div className="body">
            <span onClick={notePage}>&emsp;<SpeakerNotesIcon/>&nbsp;
                Notes
            </span><br/>
            <span onClick={trashPage}>&emsp;<DeleteIcon/>&nbsp;
                Trash
            </span>
        </div>
    );
}


export default Label;