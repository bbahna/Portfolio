import { InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';
import Post from '@/components/Post';
import Container from '@/components/Container';
import Title from '@/components/Title';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Container>
			<Title main="✍🏻 Posts" description="배우고 알게된 것들을 기록합니다." />
			<div className="flex flex-col">
				{posts.map((post) => (
					<Post
						date={post.date}
						title={post.title}
						des={post.description}
						slug={post._raw.flattenedPath}
						key={post._id}
					/>
				))}
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

export default Posts;
