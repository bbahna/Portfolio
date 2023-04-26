import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from 'contentlayer/generated';
import Container from 'components/Container';
import Utterances from 'components/posts/Utterances';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const MDXComponent = useMDXComponent(post!.body.code);

	const customMeta = {
		title: post?.title,
		description: post?.description,
		date: new Date(post!.date).toISOString(),
	};

	return (
		<Container customMeta={customMeta}>
			<div className="max-w-3xl mx-auto my-10 prose">
				<h1 className="my-3">{post?.title}</h1>
				<h2 className="my-3 text-lg font-medium text-gray-500">{post?.description}</h2>
				<p className="font-light text-gray-400 text-s">{post?.date}</p>
				<MDXComponent />
			</div>
			<Utterances />
		</Container>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }: any) => {
	const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
	return {
		props: {
			post,
		},
	};
};

export default Post;
