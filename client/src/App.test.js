import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
	afterEach(cleanup);

	it('Render and Fetch correct data', () => {
		const json = [ { name: 'Pipper', country: 'Hill Country' } ];
		const jsonPromise = Promise.resolve(json);
		const responsePromise = Promise.resolve({
			json: () => jsonPromise;
		});

    jest.spyOn(global, 'fetch').mockImplementation(() => responsePromise);
    
    const { container } = render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/players');

    const navbar = container.querySelector('nav.navbar');

    expect(navbar).toBeDefined();

    const players = container.querySelector('.players');

    expect(players).toBeDefined();
    expect(players.children.length).toEqual(1);
	});
});
