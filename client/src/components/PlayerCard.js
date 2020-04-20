import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		margin: '1.25rem',
        border: 'thin solid gray',
        backgroundColor: '#e0f4ff',
        opacity: '1',
		padding: '1vh 1vw',
		width: '20vw',
		textAlign: 'center',	
	},
	country: {
		padding: '5px',
		color: 'gray',
        textShadow: '1px 1px 0px black',
	},
	name: {
		color: 'tomato',
		fontSize: '2em'
	}
};

class PlayerCard extends React.Component {
	state = '';
	componentDidMount() {
		fetch(this.props.player)
			.then((res) => {
				//console.log(res);
				return res.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({ player: json });
			});
	}
	render() {
		return (
			<div className={this.props.classes.root}>
				<p className={this.props.classes.name}>{this.props.player.name}</p>
				<p className={this.props.classes.country}> Country: {this.props.player.country}</p>
			</div>
		);
	}
}

export default withStyles(styles)(PlayerCard);
