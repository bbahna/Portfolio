import PostList from '../posts/PostList';

const RecentPosts = ({ posts }: any) => {
	return (
		<section className="mt-10">
			<h1 className="pb-4 mb-4 text-3xl italic font-extrabold border-b border-1 theme-border-y">Recent Posts 📝</h1>
			<div className="flex flex-col">
				{posts.slice(0, 5).map((post: any) => (
					<PostList post={post} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
