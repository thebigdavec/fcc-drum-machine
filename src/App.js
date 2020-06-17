import React from 'react';
import './App.css';
import AppTitle from './AppTitle.js';
import Pads from './Pads.js';
import Display from './Display.js';

class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      appTitle: "Drum Machine",
      keyList: "QWEASDZXC",
      currentDrum: "the drum",
      banks: [[
          {name: 'clap', url: 'public/samples/Clap03 Drums1DOTcom.wav'},
          {name: 'snap', url: 'public/samples/Snap02 Drums1DOTcom.wav'},
          {name: 'hihat', url: 'public/samples/CHH07 Drums1DOTcom.wav'},
          {name: 'crash', url: 'public/samples/Crash10 Drums1DOTcom.wav'},
          {name: 'ride', url: 'public/samples/Ride02 Drums1DOTcom.wav'},
          {name: 'ridecup', url: 'public/samples/Ride03 Drums1DOTcom.wav'},
          {name: 'snare', url: 'public/samples/Snare22 Drums1DOTcom.wav'},
          {name: 'tom', url: 'public/samples/Tom28 Drums1DOTcom.wav'},
          {name: 'kick', url: 'public/samples/Kick01 Drums1DOTcom.wav'},
        ],[
          {name: 'plop', url: ''},
          {name: 'whoosh', url: ''},
          {name: 'click', url: ''},
          {name: 'open hihat', url: ''},
          {name: 'closed hihat', url: ''},
          {name: 'ride cup', url: ''},
          {name: 'snare', url: ''},
          {name: 'tom', url: ''},
          {name: 'kick', url: ''},
        ]
      ],
      bank: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    console.log(e.target.innerText);
  }

	render() {
		return (
			<div className="App">
				<header id="drum-machine" className="App-header">
					<AppTitle apptitle={this.state.appTitle} />
          <Display currentDrum={this.state.currentDrum} />
          <Pads clickHandler={this.handleClick} controls={this.state.keyList} drums={[this.state.banks[this.state.bank]]} />
				</header>
			</div>
		);
	}
}

export default App;
