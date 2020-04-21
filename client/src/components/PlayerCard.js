import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
        '.dark-mode &': {
            background: '#2d200e'
        },
		margin: '1rem',
        border: 'thin solid gray',
        backgroundColor: '#e0f4ff',
		padding: '1vh 1vw',
		width: '20vw',
        textAlign: 'center',
        borderRadius: '5px'	
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
