import Link from 'next/link';
import Container from '@/components/Container';
import Title from '@/components/Title';

const Notfound = () => {
	return (
		<Container>
			<Title main="🚫 404" description="어쩌다 여기까지 오셨나요." />
			<Link href="/">
				<div className="block p-2 text-sm border rounded-md border-slate-300 hover:border-slate-400 hover:bg-slate-50">
					홈으로 가기
				</div>
			</Link>
		</Container>
	);
};

export default Notfound;
