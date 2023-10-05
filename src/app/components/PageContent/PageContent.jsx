import './PageContent.css';
import BottomContent from '../BottomContent/BottomContent';
import TopContent from '../TopContent/TopContent';
import MiddleContent from '../MiddleContent/MiddleContent';

export default function PageContent() {
	return (
		<main className="PageContent">
			<TopContent />
			<MiddleContent />
			<BottomContent />
		</main>
	);
}
