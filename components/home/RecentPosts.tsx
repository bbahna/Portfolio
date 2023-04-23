import Link from 'next/link';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<h1 className="pb-4 mb-4 text-3xl italic font-extrabold border-b border-1 theme-border-y">Recent Posts 📝</h1>
			<div className="flex flex-col">
				{posts.slice(0, 5).map((post: any) => (
					<Link key={post._id} href={`/posts/${post._raw.flattenedPath}`} passHref legacyBehavior>
						<a className="my-2">
							<span className="text-xs font-medium theme-text-5">{post.date}</span>
							<h2 className="text-xl font-bold theme-text-2 theme-text-hover duration-100">{post.title}</h2>
							<p className="text-[15px] font-light theme-text-3">{post.description}</p>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
