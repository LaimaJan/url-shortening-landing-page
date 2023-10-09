import './ShortenedLinks.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ShortenedLinks({ linksArray }) {
	const [copiedLinks, setCopiedLinks] = useState(linksArray.map(() => false));

	return (
		<div className="created-shortened-links-container">
			{linksArray.map((link, index) => {
				return (
					<div className="link" key={index}>
						<p className="link-before">{link.originalLink}</p>
						<div className="hr-line" />
						<div className="link-after-container">
							<p className="link-after">{link.shortenedLink}</p>
							<button
								className={copiedLinks[index] ? 'copied-link' : 'copy-button'}
								onClick={() => {
									navigator.clipboard
										.writeText(link.shortenedLink)
										.then(() => {
											const newCopiedLinks = [...copiedLinks];
											newCopiedLinks[index] = true;
											setCopiedLinks(newCopiedLinks);
										})
										.catch((err) => {
											console.error('Copy to clipboard failed: ', err);
										});
								}}
							>
								{copiedLinks[index] ? 'Copied!' : 'Copy'}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

ShortenedLinks.propTypes = {
	linksArray: PropTypes.array.isRequired,
};
