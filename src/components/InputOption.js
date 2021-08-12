import React from 'react';
import './InputOption.css';

/* For the input options in the feed -  */
/* This component takes in Props from it's parent, Feed.js :*/
function InputOption ( { Icon, title, color } ) {
    return (
        <div className="inputOption">
            <Icon style={ { color: color } }/>
            <h4>{ title }</h4>
        </div>

    )
}

export default InputOption;