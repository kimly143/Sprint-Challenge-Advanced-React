import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode('darkModeKey');
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
			<h1>This is the list of Greatest Soccer Players on Earth!</h1>
			<div className="dark-mode__toggle">
			{/* <div className="moon">`\1F31C`</div>
				<div className="sun">`\1F31E`</div> */}
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default Navbar;
