import './MiddleContent.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

export default function MiddleContent({ linkInputValue, onLinkInputChange }) {
	const [isEmptyInput, setIsEmptyInput] = useState(false);

	const handleButtonClick = () => {
		console.log('kazkas vyksta');
		if (linkInputValue.trim() === '') {
			setIsEmptyInput(true);
			console.log('veikia, nera  value');
		} else {
			setIsEmptyInput(false);
			console.log('veikia, YRA  value');
		}
	};

	const handleInputChange = (e) => {
		const { value } = e.target;
		onLinkInputChange(value);
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
						onChange={handleInputChange}
					/>
					{isEmptyInput && <p className="error-message">Please add a link</p>}
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
