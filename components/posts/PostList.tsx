import Image from 'next/image';
import Link from 'next/link';

// interface IPostList {
// 	title: string;
// 	description: string;
// 	date: string;
// 	tags: string;
// 	series?: string;
// 	thumbnail?: string;
// }

interface IPostProps {
	// post: Array<IPostList>;
	post: any;
	slug: string;
}

const PostList = ({ post, slug }: IPostProps) => {
	// New Date Label
	const daySubtract = Math.abs(new Date().getTime() - new Date(post!.date).getTime());
	const dayAgo = Math.floor(daySubtract / (1000 * 60 * 60 * 24));

	return (
		<Link href={`/posts/${slug}`} passHref>
			<div
				className={`relative w-full p-2 mb-2 duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 ${
					post.thumbnail && 'pr-[135px]'
				}`}
			>
				<span className="block leading-[14px] text-xs font-medium theme-text-5">{post.date}</span>
				<h2 className="mt-1 text-[22px] font-extrabold theme-text-2 duration-200 theme-text-hover relative">
					{post.title}
					{dayAgo <= 30 && (
						<span className="absolute px-[6px] leading-[21px] ml-2 bottom-[6px] text-[9px] font-light rounded-md theme-text-dark theme-bg-main opacity-75">
							New
						</span>
					)}
				</h2>
				<p className="text-[15px] font-normal theme-text-3">{post.description}</p>
				{post.thumbnail && (
					<Image
						src={post.thumbnail}
						alt="썸네일 이미지"
						width={120}
						height={100}
						className="absolute rounded-lg top-2 right-2 min-h-[75px]"
					/>
				)}
			</div>
		</Link>
	);
};

export default PostList;
