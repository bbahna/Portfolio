import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { allPosts } from 'contentlayer/generated';

import Container from '@/components/layout/Container';
import Intro from '@/components/home/Intro';
import RecentPosts from '@/components/home/RecentPosts';
import SideProject from '@/components/home/SideProject';
import metadata from '@/data/metadata';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<NextSeo title={metadata.title} description={metadata.description} />
			<h1 className="text-3xl italic font-extrabold">Hi, I&apos;m hyoon 👋🏻</h1>
			<Intro />
			<RecentPosts posts={posts} />
			<SideProject />
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
