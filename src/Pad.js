import React from 'react';

const Pad = (props) => {
        return (
        <button id={props.drumName} onClick={props.clickHandler} className="drum-pad">
            {props.drumKey}
        </button>
        )
    };

export default Pad;