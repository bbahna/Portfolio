import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from 'contentlayer/generated';
import Container from '@/components/layout/Container';
import Utterances from '@/components/posts/Utterances';
import CopyLinkBtn from '@/components/posts/CopyLinkBtn';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const MDXComponent = useMDXComponent(post!.body.code);

	const customMeta = {
		title: post?.title,
		description: post?.description,
		date: new Date(post!.date).toISOString(),
		thumbnail: post?.thumbnail,
	};

	return (
		<Container customMeta={customMeta}>
			<div className="max-w-3xl mx-auto my-12 prose">
				<div className="flex flex-col items-center border-b mb-7 pb-7 theme-border-light">
					<h1 className="mb-3 px-10 font-bold max-lg:text-[34px] text-center relative leading-[44px] break-keep`">
						{post?.title}
						<CopyLinkBtn />
					</h1>
					<p className="mt-0 mb-3 text-lg font-normal text-center max-lg:text-base theme-text-3 break-keep">
						{post?.description}
					</p>
					<span className="m-0 text-sm font-medium theme-text-5">{post?.date}</span>
				</div>
				{post?.thumbnail && (
					<Image src={`${post?.thumbnail}`} width={100} height={100} className="w-full h-fit" alt="썸네일 이미지" />
				)}
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
