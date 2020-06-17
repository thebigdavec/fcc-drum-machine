import React from 'react';
import Pad from './Pad.js';

const Pads = (props) => {
	return (
		<div className="darkbox controls">
			{props.drums[0].map((drum, index) => (
				<Pad clickHandler={props.clickHandler} drumKey={props.controls[index]} drumName={drum.name} />
			))}
		</div>
	);
};

export default Pads;

/**
                <span className="control-key">{props.controls[index]}</span><span className="control-name">{ drum.name }</span>
**/
