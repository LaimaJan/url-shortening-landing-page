// import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import TopContent from './components/TopContent/TopContent';
import MiddleContent from './components/MiddleContent/MiddleContent';
import BottomContent from './components/BottomContent/BottomContent';

function App() {
	return (
		<div className="App">
			<div className="nav-bar-top-content-container">
				<NavBar />
				<TopContent />
			</div>
			<MiddleContent />
			<BottomContent />
			<div className="start-today-banner"></div>
			<footer></footer>
		</div>
	);
}

export default App;
