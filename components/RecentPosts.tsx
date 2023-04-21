import Link from 'next/link';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<h1 className="pb-4 text-3xl italic font-extrabold border-b border-1 border-y-gray-300">Recent Posts 📝</h1>
			<div className="flex flex-col">
				{posts.slice(0, 5).map((post: any) => (
					<Link key={post._id} href={`/posts/${post._raw.flattenedPath}`} passHref legacyBehavior>
						<a className="mt-4">
							<div className="text-xs font-normal text-gray-400">{post.date}</div>
							<div className="text-xl font-bold text-gray-800">{post.title}</div>
							<div className="text-base font-light text-gray-600">{post.description}</div>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
