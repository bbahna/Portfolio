import Link from 'next/link';

const Post = ({ date, title, des, slug }: any) => {
	return (
		<Link href={`/posts/${slug}`} passHref legacyBehavior>
			<a className="w-full my-3">
				<div className="text-xs font-medium text-gray-400">{date}</div>
				<div className="mt-1 text-[25px] font-extrabold">{title}</div>
				<div className="text-[16px] font-normal text-gray-500">{des}</div>
			</a>
		</Link>
	);
};

export default Post;
