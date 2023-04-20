import Link from 'next/link';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<h1 className="text-3xl font-extrabold italic">Recent Posts 📝</h1>
			<div className="flex flex-col">
				{posts.slice(0, 5).map((post: any) => (
					<Link key={post._id} href={`/post/${post._raw.flattenedPath}`} passHref legacyBehavior>
						<a className="mt-5">
							<div className="font-medium text-xs text-gray-400">{post.date}</div>
							<div className="font-medium text-xl">{post.title}</div>
							<div className="font-light">{post.description}</div>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
