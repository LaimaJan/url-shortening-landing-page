import './PageContent.css';
import BottomContent from '../BottomContent/BottomContent';
import TopContent from '../TopContent/TopContent';

export default function PageContent() {
	return (
		<main className="PageContent">
			<TopContent />
			<BottomContent />
		</main>
	);
}
