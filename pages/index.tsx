import { InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';
import Container from '@/components/Container';
import Intro from '@/components/home/Intro';
import RecentPosts from '@/components/home/RecentPosts';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<h1 className="text-3xl italic font-extrabold">Hi, I&apos;m hyoon 👋🏻</h1>
			<Intro />
			<RecentPosts posts={posts} />
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
