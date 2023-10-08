import './MiddleContent.css';

export default function MiddleContent() {
	return (
		<section className="MiddleContent">
			<div className="middle-content-container">
				<div className="input-error-container activated-error-message">
					<input type="text" placeholder="Shorten a link here..." />
					<p className="error-message">Please add a link</p>
				</div>
				<div className="button-container">
					<button className="shorten-link-button">Shorten it!</button>
				</div>
			</div>
		</section>
	);
}
