import React from 'react';
import { withStyles, withTheme } from '@material-ui/styles';

const styles = {
	root: {
        '.dark-mode &': {
			background: '#2d200e',
        },
		margin: '1rem',
        border: 'thin solid tomato',
        backgroundColor: '#e0f4ff',
		padding: '10px',
		width: '18vw',
        textAlign: 'center',
		borderRadius: '8px',
		opacity: '0.9'	
    },
	country: {
		padding: '2px',
		color: 'gray',
        textShadow: '1px 1px 0px black',
	},
	name: {
		color: 'tomato',
		fontSize: '2em',
		textShadow: '1px 1px 0px black',
		marginBottom: '5px'
	}
};

class PlayerCard extends React.Component {
	render() {
		return (
			<div className={this.props.classes.root}>
				<p className={this.props.classes.name}>{this.props.player.name}</p>
				<p className={this.props.classes.country}> Country: {this.props.player.country}</p>
				<p className={this.props.classes.country}> Ranking: {this.props.player.id+ 1}</p>
			</div>
		);
	}
}

export default withStyles(styles)(PlayerCard);
