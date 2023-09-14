import Image from 'next/image';
import Link from 'next/link';
import { projectProps } from '@/data/project';

const SlideList = ({ post }: { post: projectProps }) => {
	return (
		<Link href={post.link} target={post.link && '_blank'}>
			<div
				className={`flex flex-col justify-between m-3 overflow-hidden rounded-md max-w-[250px] min-w-[250px] max-md:mx-0 max-md:mb-2 h-[300px] bg-[#f7f8fa] dark:bg-[#2a2a2c] shadow-jsx `}
			>
				{post.thumbnail && (
					<div className="h-[166px] overflow-hidden">
						<Image src={post.thumbnail} alt="기본 이미지" width={250} height={166} className="flex-0 max-md:w-full" />
					</div>
				)}
				<div className="flex-1 px-[15px] pt-4 pb-3">
					<h2 className="mb-2 leading-8 text-[22px] font-extrabold theme-text-2 relative ellipsis">{post.title}</h2>
					<p className="text-[13.5px] font-scdream font-normal theme-text-3 break-keep leading-5 h-[40px] mb-2">
						{post.description}
					</p>
					<span className="block leading-[14px] text-[13px] font-normal theme-text-5">{post.date}</span>
				</div>
			</div>
			<style jsx>{`
				.shadow-jsx {
					box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.18);
				}
			`}</style>
		</Link>
	);
};

export default SlideList;
