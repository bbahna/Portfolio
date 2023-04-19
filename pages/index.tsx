import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import Container from '@/components/Container';
import RecentPosts from '@/components/RecentPosts';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<div className={`my-5 w-full`}>
				<h1 className={`text-3xl font-extrabold italic`}>Hi, I&apos;m hyoon 👋🏻</h1>
				<div className={``}>
					<Image src={`/home.png`} alt="대표 이미지" width={300} height={300} className={``} />
				</div>
				<RecentPosts posts={posts} />
			</div>
		</Container>
	);
};

export const getStaticProps = async () => {
	const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
	return {
		props: {
			posts,
		},
	};
};

export default Home;
