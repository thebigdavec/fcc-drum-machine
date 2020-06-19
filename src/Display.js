import React from 'react';

const Display = (props) => {
	return (
		<div id="display" className="darkbox display">
			{props.currentDrum}
		</div>
	);
};

export default Display;
