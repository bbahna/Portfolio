import Image from 'next/image';
import Link from 'next/link';

interface IPostProps {
	// title: string;
	// stack: string;
	// status: string;
	// link: string;
	// description: string;
	// image: string;
	// date: string;
	// hashtag: Array<string>;
	post: any;
}

const BoxList = ({ post }: IPostProps) => {
	return (
		<Link href={post.link ? post.link : `/posts/${post._raw?.flattenedPath}`} target={post.link && '_blank'}>
			<div
				className={`flex flex-col justify-between m-4 overflow-hidden duration-200 rounded-md max-w-[300px] min-w-[300px] max-md:mx-0 max-md:mb-2 ${
					post.thumbnail ? 'h-[380px]' : 'h-[200px]'
				} shadow-jsx dark:bg-[#2a2a2c]`}
			>
				<div className="flex-1 px-5 pt-6 pb-3 bg-[#f7f8fa] dark:bg-[#2a2a2c] h-[280px]">
					<div className="flex items-center mb-2">
						<p className="px-3 py-1 text-[14px] rounded-2xl theme-bg-4 mr-2 theme-text-2">{post.category}</p>
						<p className="text-sm font-light theme-text-2">{post.date}</p>
					</div>
					<h2 className="mb-2 text-[22px] font-extrabold theme-text-2 relative">
						{post.title}
						<span className="absolute px-[6px] leading-[21px] ml-2 bottom-1 text-[9px] font-light rounded-md theme-text-dark theme-bg-main opacity-75">
							{post.status}
						</span>
					</h2>
					<p className="text-[15px] font-normal theme-text-3 mb-2 break-keep leading-5 h-[40px]">{post.description}</p>
					<div className="flex flex-wrap">
						{post.tags?.map((i: any) => (
							<p key={i} className="mr-2 text-[13px] font-light text-zinc-500">
								#{i}
							</p>
						))}
					</div>
				</div>
				{post.thumbnail && (
					<Image
						src={post.thumbnail}
						alt="기본 이미지"
						width={300}
						height={200}
						className="h-[200px] flex-0 max-md:w-full"
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
