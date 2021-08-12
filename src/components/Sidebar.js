import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar () {
    return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img src=" alt=" />
                <Avatar className="sidebar__avatar"/>
                <h2>Trinidad Padilla</h2>
                <h4>tpadilla101@live.com</h4>

            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">

                </div>
                
                <div className="sidebar__stat">

                </div>
                
            </div>


        </div>
    );
};

export default Sidebar;