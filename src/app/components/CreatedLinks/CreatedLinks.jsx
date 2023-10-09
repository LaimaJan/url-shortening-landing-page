import './CreatedLinks.css';

export default function CreatedLinks() {
	return (
		<div className="created-shortened-links-container">
			<div className="link">
				<p className="link-before">https://www.frontendmentor.io</p>
				<div className="hr-line" />
				<div className="link-after-container">
					<p className="link-after">https://rel.ink/k4IKyk</p>
					<button>Copy</button>
				</div>
			</div>
		</div>
	);
}
