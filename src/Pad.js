import React from 'react';

const Pad = (props) => {
        return (
        <div id={props.drumName} onClick={props.clickHandler} className="drum-pad">
            <audio className="clip" id={props.drumKey} src={props.url}></audio>
            {props.drumKey}
        </div>
        )
    };

export default Pad;