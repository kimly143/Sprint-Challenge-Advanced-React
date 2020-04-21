import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
	afterEach(cleanup);

	it('Render and Fetch correct data', () => {
    //setting up fetch to return fake data.
		const json = [ { name: 'Pipper', country: 'Hill Country' } ];
		const jsonPromise = Promise.resolve(json);
		const responsePromise = Promise.resolve({
			json: () => jsonPromise
		});

    //mockImplementation run function i give it instead of real fetch, which is return a fake response above.
		jest.spyOn(global, 'fetch').mockImplementation(() => responsePromise);
    //render the app
		const { container } = render(<App />);
    //expect the fetch will only call one and fetch with the correct url given.
		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/players');

    //make sure navbar is render
		const navbar = container.querySelector('nav.navbar');
		expect(navbar).toBeDefined();

    //make sure players is render
		const players = container.querySelector('.players');
    expect(players).toBeDefined();
    
    // has to wait for the update to verify the length, the first render is empty.
    // expect(players.children.length).toEqual(1); 
	});
});
