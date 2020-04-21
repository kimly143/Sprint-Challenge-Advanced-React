import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';

export default class App extends React.Component {
	state = { players: [] };

	componentDidMount() {
		fetch('http://localhost:5000/api/players')
			.then((res) => {
				//console.log(res);
				return res.json();
			})
			.then((json) => {
				//console.log(json);
				this.setState({ players: json });
			});
	}

	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="players">{this.state.players.map((player) => <PlayerCard player={player} />)}</div>
			</div>
		);
	}
}
