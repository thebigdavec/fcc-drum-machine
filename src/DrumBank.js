import React from 'react';

const DrumBank = (props) => {
	return (
		<div id="display" className="darkbox display">
			<i class="fas fa-cogs"></i> {props.bankName}
		</div>
	);
};

export default DrumBank;
