import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

export default function useDarkMode(key) {
	const [ darkMode, setDarkMode ] = useLocalStorage(key, false);
	useEffect(
		() => {
			document.body.classList.toggle('dark-mode', darkMode);
		},
		[ darkMode ]
	);

	return [ darkMode, setDarkMode ];
}
