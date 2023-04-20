import Link from 'next/link';

const BlogPost = ({ date, title, des, slug }: any) => {
	return (
		<Link href={`/post/${slug}`} passHref legacyBehavior>
			<a className="w-full mb-5 hover:-translate-x-1.5">
				<div className="text-xs font-medium text-gray-400">{date}</div>
				<div className="font-extrabold text-2xl mt-2">{title}</div>
				<div className="font-medium text-gray-500 text-lg mt-1">{des}</div>
			</a>
		</Link>
	);
};

export default BlogPost;
