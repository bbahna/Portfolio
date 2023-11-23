import { NextSeo } from 'next-seo';
import Link from 'next/link';

import Container from '@/components/layout/Container';
import Title from '@/components/common/Title';

const Notfound = () => {
	return (
		<Container>
			<NextSeo title="Hyoon - 404" description="잘못된 경로입니다." />
			<Title main="🚫 404" description="잘못된 경로입니다." />
			<Link href="/home">
				<div className="block p-2 text-sm border rounded-md theme-border-light theme-border-hover-light theme-bg-hover">
					홈으로 가기
				</div>
			</Link>
		</Container>
	);
};

export default Notfound;
