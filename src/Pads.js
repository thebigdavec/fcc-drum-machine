import React from 'react';
import Pad from './Pad.js';

const Pads = (props) => {
        return ( <ul className="controls">
        {props.drums[0].map((drum, index) => <li className="control" key={props.controls[index]}>
        <Pad drumKey= {props.controls[index]} drumName = { drum.name } />
        </li>)}
</ul>
);
}
                
export default Pads;

/**
                <span className="control-key">{props.controls[index]}</span><span className="control-name">{ drum.name }</span>
**/