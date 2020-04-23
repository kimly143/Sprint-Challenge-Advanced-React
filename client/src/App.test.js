import React from 'react';
import App from './App';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
	afterEach(cleanup);

	it('Render and Fetch correct data', async () => {

    //setting up fetch to return fake data.
		const json = [ { name: 'Pipper', country: 'Hill Country' } ];
		const jsonPromise = Promise.resolve(json);
		const responsePromise = Promise.resolve({
			json: () => jsonPromise
		});

    // jest.spyOn(object, methodName) create a mock function but also tracks call to object[methodName] and return a jest mock function.
    // https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname

    // mockImplementation run function I give it instead of real fetch, which is return a fake response above.
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

    // has to wait for the update to verify the length, the first render children of players on dom is empty.
    await waitForDomChange({ container });
    
    expect(players.children.length).toEqual(1); 
	});
});
