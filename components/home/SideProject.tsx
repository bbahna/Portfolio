import project from '@/data/project';
import SlideList from '../common/SlideList';

const SideProject = () => {
	return (
		<section className="mt-10 overflow-hidden">
			<h1 className="pb-4 mb-4 text-3xl italic font-extrabold border-b border-1 theme-border-y">Side Project 📚</h1>
			<div className="flex flex-row items-center pb-3 overflow-x-auto max-md:flex-col">
				{project.map((post) => (
					<SlideList key={post.id} post={post} />
				))}
			</div>
		</section>
	);
};

export default SideProject;
