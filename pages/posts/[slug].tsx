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
		category: post?.category,
		description: post?.description,
		date: new Date(post!.date).toISOString(),
		thumbnail: post?.thumbnail,
		tags: post?.tags,
	};

	return (
		<Container customMeta={customMeta}>
			<div className="max-w-3xl mx-auto mt-6 mb-5 prose">
				<div className="flex flex-col items-center border-b theme-border-light mb-7 pb-9 ">
					<div className="flex items-center justify-between mb-3">
						<p className="m-0 text-sm font-normal py-1 px-3 text-[14px] rounded-2xl theme-bg-4 theme-text-2">
							{post?.category}
						</p>
						<p className="leading-[16px] pl-4 m-0 ml-4 text-[13px] font-normal border-l-2 theme-border theme-text-3">
							{post?.date}
						</p>
					</div>
					<h1 className="mb-3 px-10 font-bold max-lg:text-[34px] text-center relative leading-[44px] break-keep">
						{post?.title}
						<CopyLinkBtn />
					</h1>
					<p className="mt-0 mb-0 text-lg font-normal text-center max-lg:text-base theme-text-2 break-keep">
						{post?.description}
					</p>
				</div>
				{post?.thumbnail && (
					<Image src={`${post?.thumbnail}`} width={800} height={600} className="w-full h-fit" alt="썸네일 이미지" />
				)}
				<MDXComponent />
				<div className="flex mt-8 border-t pt-7 theme-border-light">
					<p className="m-0 px-3 mb-1 italic leading-[26px] theme-text-2">Tags:</p>
					<div className="flex flex-wrap">
						{post?.tags.map((i: any) => (
							<span key={i} className="mb-1 mr-3 italic theme-text-main-dark">
								#{i}
							</span>
						))}
					</div>
				</div>
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
