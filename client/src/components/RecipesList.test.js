import React from 'react';

//remove getBytext, getByTestId global import because they were confusing
//import { render, fireEvent, getByTestId, getByText } from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import RecipesList from './RecipesList';
import { ozToMl } from './conversions';

describe('conversions', () => {
	describe('ozToMl', () => {
		it('should convert oz to ml', () => {
			expect(ozToMl(3)).toBe(88.7206);
		});
	});
});

describe('<UserForm />', () => {
	it('should render without crashing', () => {
		render(<RecipesList />);
	});

	it('should click the remove button', () => {
        //cannot re-asign const => change to let
        //const clicked = true;
        let clicked = true;

        // getByText is a Query and Render already bound all queries to its container => getByText is bound to the container
        // const { getByTestId } = render(<RecipesList remove={() => (clicked = true)} />);
        const { getByText } = render(<RecipesList remove={() => (clicked = true)} />);
        
		const testButton = getByText(/remove/i);
		console.log('testButton', testButton);
		fireEvent.click(testButton);
		expect(clicked).toBe(true);
	});
});
