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
			<div className="flex justify-between w-full my-3">
				<div>
					<span className="text-xs font-medium theme-text-5">{date}</span>
					<h2 className="mt-1 text-[22px] font-extrabold theme-text-2 duration-200 theme-text-hover">{title}</h2>
					<p className="text-[15px] font-normal theme-text-3">{des}</p>
				</div>
				{thumbnail && (
					<Image src={thumbnail} alt="썸네일 이미지" width={100} height={100} className="ml-5 rounded-lg" />
				)}
			</div>
		</Link>
	);
};

export default PostList;
