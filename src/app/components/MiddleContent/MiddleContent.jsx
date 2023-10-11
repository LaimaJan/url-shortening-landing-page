import './MiddleContent.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

export default function MiddleContent({ onLinkInputChange }) {
	const [isEmptyInput, setIsEmptyInput] = useState(false);
	const [linkInputValue, setLinkInputValue] = useState('');
	const [urlValidate, setUrlValidate] = useState(false);
	console.log(urlValidate);

	const handleButtonClick = () => {
		validateURL(linkInputValue);

		if (linkInputValue.trim() === '') {
			setIsEmptyInput(true);
		} else if (urlValidate) {
			console.log('negeras url');
			setIsEmptyInput(true);
		} else {
			console.log('url keliauja atgal i app');
			setIsEmptyInput(false);

			onLinkInputChange(linkInputValue);
		}

		setLinkInputValue('');
	};

	const validateURL = (url) => {
		console.log('veikia');

		if (url.trim() !== '') {
			if (
				/^(http(s)?:\/\/)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
					url
				)
			) {
				console.log('Valid');
				setUrlValidate(false);
			} else {
				console.log('Not Valid');
				setUrlValidate(true);
			}
		} else {
			setIsEmptyInput(true);
		}
	};

	return (
		<section className="MiddleContent">
			<div className="middle-content-container">
				<div
					className={`input-error-container ${
						isEmptyInput ? 'activated-error-message' : ''
					}`}
				>
					<input
						type="text"
						placeholder="Shorten a link here..."
						value={linkInputValue}
						onChange={(e) => setLinkInputValue(e.target.value)}
					/>
					{isEmptyInput && (
						<p className="error-message">
							{urlValidate ? 'Invalid URL inserted' : 'Please add a link'}
						</p>
					)}
				</div>
				<div className="button-container">
					<button className="shorten-link-button" onClick={handleButtonClick}>
						Shorten it!
					</button>
				</div>
			</div>
		</section>
	);
}

MiddleContent.propTypes = {
	linkInputValue: PropTypes.string.isRequired,
	onLinkInputChange: PropTypes.func.isRequired,
};
