import React from 'react';


const Display = (props) => {
	return (
		<div id="display" className="darkbox display">
			{props.currentDrum}
		</div>
	);
};

export default Display;

/**
                <span className="control-key">{props.controls[index]}</span><span className="control-name">{ drum.name }</span>
**/
