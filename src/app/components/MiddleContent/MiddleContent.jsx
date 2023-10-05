import './MiddleContent.css';

export default function MiddleContent() {
	return (
		<section className="MiddleContent">
			<div className="link-input-container">
				<input type="text" placeholder="Shorten a link here..." />
				<button className="shorten-link-button">Shorten it!</button>
			</div>
		</section>
	);
}
