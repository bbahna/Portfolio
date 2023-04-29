import Link from 'next/link';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<h1 className="pb-4 mb-4 text-3xl italic font-extrabold border-b border-1 theme-border-y">Recent Posts 📝</h1>
			<div className="flex flex-col">
				{posts.slice(0, 5).map((post: any) => (
					<Link key={post._id} href={`/posts/${post._raw.flattenedPath}`} passHref>
						<div className="p-2 mb-1 duration-150 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800">
							<span className="block text-xs font-medium leading-[14px] theme-text-5">{post.date}</span>
							<h2 className="my-[2px] text-[22px] font-bold duration-150 theme-text-2 theme-text-hover">
								{post.title}
							</h2>
							<p className="text-[15px] font-light theme-text-3">{post.description}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
