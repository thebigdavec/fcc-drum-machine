import React from 'react';

const VolumeControl = (props) => {
	return <div onClick={props.clickHandler} className="darkbox volume-slider">
	<i className="fas fa-volume-down"></i> 
	<input onChange={props.changeHandler} id="volume-slider" name="volume" type="range" min="0" max="100" value={props.volumeLevel}></input> 
	<i className="fas fa-volume-up"></i>
	</div>;
};

export default VolumeControl;
