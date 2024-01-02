import Image from 'next/image';
import Link from 'next/link';
import { projectProps } from '@/data/project';

interface IPostProps {
	post: projectProps;
}

const BoxList = ({ post }: IPostProps) => {
	// New Date Label
	const daySubtract = Math.abs(new Date().getTime() - new Date(post!.date).getTime());
	const dayAgo = Math.floor(daySubtract / (1000 * 60 * 60 * 24));

	return (
		<Link href={post.link ? post.link : `/posts/${post._raw?.flattenedPath}`} target={post.link && '_blank'}>
			<div
				className={`flex flex-col justify-between m-4 overflow-hidden duration-200 rounded-md max-w-[300px] min-w-[300px] max-md:mx-0 max-md:mb-2 ${
					post.thumbnail ? 'h-[380px]' : 'h-[200px]'
				} shadow-jsx bg-[#f7f8fa] dark:bg-[#2a2a2c] `}
			>
				<div className="flex-1 px-5 pt-6 pb-3 h-[280px]">
					<div className="flex items-center mb-2">
						<p className="px-3 py-1 text-[14px] rounded-2xl theme-bg-4 mr-2 theme-text-2">{post.category}</p>
						<p className="text-sm font-light theme-text-2">{post.date}</p>
						{dayAgo <= 30 && (
							<span className="px-[6px] leading-[21px] ml-2 bottom-[6px] text-[9px] font-light rounded-md right-0 text-[#fefefe] theme-bg-main-dark">
								New
							</span>
						)}
					</div>
					<h2 className="mb-2 leading-8 text-[22px] font-extrabold theme-text-2 relative ellipsis">
						{post.title}
						<span className="absolute px-[6px] leading-[21px] ml-2 bottom-1 text-[9px] font-light rounded-md text-[#fefefe] theme-bg-main-dark">
							{post.status}
						</span>
					</h2>
					<p className="text-[15px] font-normal theme-text-3 break-keep leading-5 h-[40px] mb-1">{post.description}</p>
					<div className="flex flex-wrap">
						{post.hashtags?.map((i: any) => (
							<span key={i} className="mr-2 text-[13px] mt-1 font-light text-zinc-500">
								#{i}
							</span>
						))}
					</div>
				</div>
				{post.thumbnail && (
					<Image
						src={post.thumbnail}
						alt="썸네일 이미지"
						width={320}
						height={180}
						className="min-h-[180px] flex-0 max-md:w-full"
					/>
				)}
			</div>
			<style jsx>{`
				.shadow-jsx {
					box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
					&:hover {
						box-shadow: 0 7px 18px rgba(0, 0, 0, 0.3);
						transform: translateY(-4px);
					}
				}
			`}</style>
		</Link>
	);
};

export default BoxList;
