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
				<span className="text-xs font-medium  theme-text-5">{date}</span>
				<h2 className="mt-1 text-[22px] font-extrabold theme-text-2 theme-text-hover duration-100">{title}</h2>
				<p className="text-[15px] font-normal theme-text-3">{des}</p>
			</a>
		</Link>
	);
};

export default PostList;
