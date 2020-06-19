import React from 'react';
import Pad from './Pad.js';

const Pads = (props) => {
	return (
		<div className="darkbox controls">
			{props.drums[0].map((drum, index) => (
				<Pad
					clickHandler={props.clickHandler}
					drumKey={props.controls[index]}
					drumName={drum.name}
					url={drum.url}
					key={drum.name}
				/>
			))}
		</div>
	);
};

export default Pads;
