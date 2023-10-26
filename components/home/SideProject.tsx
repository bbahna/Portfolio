import Link from 'next/link';
import project from '@/data/project';
import SlideList from '../common/SlideList';

const SideProject = () => {
	return (
		<section className="mt-10 overflow-hidden">
			<Link href="/project" className="flex items-end justify-between pb-4 mb-4 border-b border-1 theme-border-y">
				<h1 className="text-3xl italic font-extrabold">Side Project 📚</h1>
				<p className="px-2 text-lg font-light transition-transform theme-text-2">→</p>
			</Link>
			<div className="flex flex-row items-center pb-3 overflow-x-auto max-md:flex-col">
				{project.map((post) => (
					<SlideList key={post.id} post={post} />
				))}
			</div>
		</section>
	);
};

export default SideProject;
