import Image from 'next/image';
import Link from 'next/link';
import NewMaker from '../common/NewMaker';

export interface postProps {
	post: {
		title: string;
		description: string;
		date: string;
		thumbnail?: string;
	};
	slug?: string;
}

const PostList = ({ post, slug }: postProps) => {
	return (
		<Link href={`/posts/${slug}`} passHref className="w-full">
			<div
				className={`relative p-2 mb-3 duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 ${
					post.thumbnail && 'pr-[135px]'
				}`}
			>
				<h2 className="text-xl font-bold theme-text-2 duration-200 theme-text-hover relative">
					{post.title}
					<NewMaker post={post} />
				</h2>
				<p className="my-2 text-[14px] font-normal theme-text-3 font-scdream">{post.description}</p>
				<span className="block leading-[14px] text-[13px] font-normal theme-text-5">{post.date}</span>
				{post.thumbnail && (
					<Image
						src={post.thumbnail}
						alt="썸네일 이미지"
						width={120}
						height={72}
						className="absolute rounded-lg top-[2px] right-2 min-h-[73px] max-h-[73px] border theme-border-light"
					/>
				)}
			</div>
		</Link>
	);
};

export default PostList;
