import Image from 'next/image';
import Link from 'next/link';

interface IPostProps {
	date: string;
	title: string;
	des: string;
	slug: string;
	thumbnail?: string;
}

const PostList = ({ date, title, des, slug, thumbnail }: IPostProps) => {
	return (
		<Link href={`/posts/${slug}`} passHref>
			<div
				className={`relative w-full p-2 mb-2 duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 ${
					thumbnail && 'pr-[135px]'
				}`}
			>
				<span className="block leading-[14px] text-xs font-medium theme-text-5">{date}</span>
				<h2 className="mt-1 text-[22px] font-extrabold theme-text-2 duration-200 theme-text-hover">{title}</h2>
				<p className="text-[15px] font-normal theme-text-3">{des}</p>
				{thumbnail && (
					<Image
						src={thumbnail}
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
