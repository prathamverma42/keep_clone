import React from 'react';
import './Icons.css'
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
const Icons = () => {
    return(
        <div className="icons">
            <ViewStreamIcon/>
            <AccountCircleIcon/>
            <SettingsIcon/>
        </div>
    );
}

export default  Icons;