import './MiddleContent.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

export default function MiddleContent({ onLinkInputChange }) {
	const [isEmptyInput, setIsEmptyInput] = useState(false);
	const [linkInputValue, setLinkInputValue] = useState('');

	const handleButtonClick = () => {
		if (linkInputValue.trim() === '') {
			setIsEmptyInput(true);
		} else {
			setIsEmptyInput(false);

			onLinkInputChange(linkInputValue);
		}

		setLinkInputValue('');
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
