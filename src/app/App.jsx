// import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import TopContent from './components/TopContent/TopContent';
import MiddleContent from './components/MiddleContent/MiddleContent';
import BottomContent from './components/BottomContent/BottomContent';
import BottomBanner from './components/BottomBanner/BottomBanner';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<div className="nav-bar-top-content-container">
				<NavBar />
				<TopContent />
			</div>
			<MiddleContent />
			<BottomContent />
			<BottomBanner />
			<Footer />
		</div>
	);
}

export default App;
