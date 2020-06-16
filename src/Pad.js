import React from 'react';

const Pad = (props) => {
        return (
        <>
        <span className="control-key">{props.drumKey}</span>
        <span className="control-name">{props.drumName}</span>
        </>
        )
    };

export default Pad;