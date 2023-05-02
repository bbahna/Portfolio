import Link from 'next/link';
import Container from '@/components/Container';
import Title from '@/components/Title';

const Notfound = () => {
	return (
		<Container>
			<Title main="🚫 404" description="어쩌다 여기까지 오셨나요." />
			<Link href="/">
				<div className="block p-2 text-sm border rounded-md theme-border-light theme-border-hover-light theme-bg-hover">
					홈으로 가기
				</div>
			</Link>
		</Container>
	);
};

export default Notfound;
