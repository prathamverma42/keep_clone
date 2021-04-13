import React from 'react';
import './Notes.css';

const Notes = ({title,note,onTitleChange,onNoteChange,onAdd}) => {
        return(
            <div className="notes-area">
                <input type="text" value={title} onChange={onTitleChange} placeholder="Title"/>
                <hr/>
                <textarea cols="120" rows="10" type="text-area" value={note} onChange={onNoteChange} placeholder="Add a Note..." />
                <br/>
                <input type="button" value="Add" onClick={onAdd}/>
            </div>
        );
}


export default Notes;
