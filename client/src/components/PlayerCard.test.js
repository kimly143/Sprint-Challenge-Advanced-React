import React from 'react';
import PlayerCard from './PlayerCard.js';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('PlayerCard', () => {
    afterEach(cleanup);

	it('Render correct data', () => {
        // make fake player with fake data
		const player = { name: 'Pipper', country: 'Hill Country' };

        // render player card with fake player object, get container element
        const { container } = render(<PlayerCard player={player} />)

        // fetch both ps from inside container
        const paragraphs = container.querySelectorAll('p');

        // make sure first p contains players name
        expect(paragraphs[0]).toHaveTextContent('Pipper');
        // make sure second p contains players country
        expect(paragraphs[1]).toHaveTextContent('Hill Country');
	});
});
