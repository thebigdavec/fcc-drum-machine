import React from 'react';
import './App.css';
import AppTitle from './AppTitle.js';
import Pads from './Pads.js';
import Display from './Display.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appTitle: 'Drum Machine',
			keyList: 'QWEASDZXC',
			currentDrum: 'the drum',
			banks: [
				[
					{ name: 'clap', url: './samples/Clap03 Drums1DOTcom.wav' },
					{ name: 'snap', url: './samples/Snap02 Drums1DOTcom.wav' },
					{ name: 'hihat', url: './samples/CHH07 Drums1DOTcom.wav' },
					{ name: 'crash', url: './samples/Crash10 Drums1DOTcom.wav' },
					{ name: 'ride', url: './samples/Ride02 Drums1DOTcom.wav' },
					{ name: 'ridecup', url: './samples/Ride03 Drums1DOTcom.wav' },
					{ name: 'snare', url: './samples/Snare22 Drums1DOTcom.wav' },
					{ name: 'tom', url: './samples/Tom28 Drums1DOTcom.wav' },
					{ name: 'kick', url: './samples/Kick01 Drums1DOTcom.wav' }
				],
				[
					{ name: 'plop', url: '' },
					{ name: 'whoosh', url: '' },
					{ name: 'click', url: '' },
					{ name: 'open hihat', url: '' },
					{ name: 'closed hihat', url: '' },
					{ name: 'ride cup', url: '' },
					{ name: 'snare', url: '' },
					{ name: 'tom', url: '' },
					{ name: 'kick', url: '' }
				]
			],
			bank: 0
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleClick(e) {
    e.preventDefault();
		const drumLetter = e.target.innerText;
		this.triggerSound(drumLetter);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress(e) {
		const drumLetter = e.key.toUpperCase();

		if (this.state.keyList.includes(drumLetter)) {
      this.triggerSound(drumLetter);
    }
	}

	triggerSound(drumLetter) {
		const drumIndex = this.state.keyList.indexOf(drumLetter);
		const drumName = this.state.banks[this.state.bank][drumIndex].name;
		const sound = document.getElementById(drumLetter);
    const pad = document.getElementById(drumName);

		sound.currentTime = 0;
		sound.play();
		this.setState({
			currentDrum: drumName
    });
    // document.getElementById(drumName).classList.toggle('drum-pad-active');
    this.activatePad(pad);
    setTimeout(() => this.activatePad(pad), 100);
    // document.getElementById(drumName).classList.toggle('drum-pad-active');
	}

  activatePad(pad) {
    console.log(pad);
    pad.classList.toggle('drum-pad-active');
  }

	render() {
		return (
			<div className="App">
				<header id="drum-machine" className="App-header">
					<AppTitle apptitle={this.state.appTitle} />
					<Display currentDrum={this.state.currentDrum} />
					<Pads
						clickHandler={this.handleClick}
						controls={this.state.keyList}
						drums={[ this.state.banks[this.state.bank] ]}
					/>
				</header>
			</div>
		);
	}
}

export default App;
