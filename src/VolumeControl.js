import React from 'react';

const VolumeControl = (props) => {
	return (
		<div id={props.drumName} onClick={props.clickHandler} className="drum-pad">
		</div>
	);
};

export default VolumeControl;
