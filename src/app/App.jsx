import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TopContent from './components/TopContent/TopContent';
import MiddleContent from './components/MiddleContent/MiddleContent';
import BottomContent from './components/BottomContent/BottomContent';
import BottomBanner from './components/BottomBanner/BottomBanner';
import Footer from './components/Footer/Footer';

function App() {
	const [linkInputValue, setLinkInputValue] = useState('');

	const handleLinkInputChange = (value) => {
		setLinkInputValue(value);
		console.log('parsinese value kazkoki');
		console.log(linkInputValue);
	};

	return (
		<div className="App">
			<NavBar />
			<TopContent />
			<MiddleContent
				linkInputValue={linkInputValue}
				onLinkInputChange={handleLinkInputChange}
			/>
			<BottomContent />
			<BottomBanner />
			<Footer />
		</div>
	);
}

export default App;
