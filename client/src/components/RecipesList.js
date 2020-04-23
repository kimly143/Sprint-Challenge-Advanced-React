import React from 'react';
import axios from 'axios';

class UserDisplay extends React.Component {
	state = {
		recipes: []
	};

	remove = (e) => {
		console.log('e', e);
		this.setState({
			recipes: this.state.recipes.filter((item) => item === item)
		});
	};

	async componentDidMount() {
		await axios
			.get('http://localhost:5000/api/restricted/data')
			.then((res) => {
				this.setState({ recipes: res.data });
			})
			.catch((err) => {
				console.log('failed to load', err);
			});
	}

	render() {
		return (
			<div>
				<h1>Southern Fried Recipes</h1>
				<button data-testid="removeButton" onClick={this.remove}>
					Remove
				</button>
				{this.state.recipes.map((recipe) => (
					<div key={recipe.name}>
						<h3>Name: {recipe.name}</h3>
						<h4>Course: {recipe.course}</h4>
						<h4>Technique: {recipe.technique}</h4>
						<h4>Ingredients</h4>
						<ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
					</div>
				))}
			</div>
		);
	}
}

export default UserDisplay;
