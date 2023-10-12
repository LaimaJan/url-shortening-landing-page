import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import TopContent from './components/TopContent/TopContent';
import MiddleContent from './components/MiddleContent/MiddleContent';
import BottomContent from './components/BottomContent/BottomContent';
import BottomBanner from './components/BottomBanner/BottomBanner';
import Footer from './components/Footer/Footer';

function App() {
	const [linkInputValue, setLinkInputValue] = useState('');
	const [arrayShortenedLinks, setArrayShortenedLinks] = useState([]);
	console.log(arrayShortenedLinks);

	const handleLinkInputChange = (value) => {
		setLinkInputValue(value);
	};

	const API_TOKEN =
		'QGeWt9MUSz3FrXs8fANQKbhBfPsdgWZvPba0ntYJvHAy6o9BD9KXuxylSOdm';

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (linkInputValue.trim() === '') {
					console.log('Input URL is empty.');
				} else {
					const response = await axios.post(
						'https://api.tinyurl.com/create',
						{
							url: linkInputValue,
							domain: 'tinyurl.com',
							description: 'string',
						},
						{
							headers: {
								accept: 'application/json',
								'content-type': 'application/json',
								Authorization: `Bearer ${API_TOKEN}`,
							},
						}
					);

					console.log('response: ', response);

					const newLink = {
						originalLink: linkInputValue,
						shortenedLink: response.data.data.tiny_url,
					};
					setArrayShortenedLinks([...arrayShortenedLinks, newLink]);
					setLinkInputValue('');
				}
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [linkInputValue, arrayShortenedLinks]);

	return (
		<div className="App">
			<NavBar />
			<TopContent />
			<MiddleContent
				linkInputValue={linkInputValue}
				onLinkInputChange={handleLinkInputChange}
			/>
			<BottomContent shortLinkArray={arrayShortenedLinks} />
			<BottomBanner />
			<Footer />
		</div>
	);
}

export default App;
