import Link from 'next/link';

interface IPostProps {
	date: string;
	title: string;
	des: string;
	slug: string;
}

const PostList = ({ date, title, des, slug }: IPostProps) => {
	return (
		<Link href={`/posts/${slug}`} passHref legacyBehavior>
			<a className="w-full my-3 ">
				<span className="text-xs font-medium text-gray-400">{date}</span>
				<h2 className="mt-1 text-[22px] font-extrabold">{title}</h2>
				<p className="text-[15px] font-normal text-gray-500">{des}</p>
			</a>
		</Link>
	);
};

export default PostList;
