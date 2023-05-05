import Image from 'next/image';
import Link from 'next/link';

interface IPostProps {
	title: string;
	stack: string;
	status: string;
	link: string;
	description: string;
	image: string;
	date: string;
	hashtag: Array<string>;
}

const ProjectList = ({ title, stack, status, link, description, image, date, hashtag }: IPostProps) => {
	return (
		<Link href={link} target="_blank">
			<div className="flex flex-col justify-between m-4 overflow-hidden duration-200 rounded-md max-w-[300px] min-w-[300px] max-md:mx-0 max-md:mb-2 h-[380px] shadow-jsx dark:bg-[#2a2a2c]">
				<div className="flex-1 px-5 pt-6 pb-3 bg-[#f7f8fa] dark:bg-[#2a2a2c] h-[280px]">
					<div className="flex items-center mb-2">
						<p className="px-2.5 py-1.5 text-sm font-light rounded-lg theme-bg-3 mr-2 theme-text-2">{stack}</p>
						<p className="text-sm font-light theme-text-2">{date}</p>
					</div>
					<h2 className="mb-2 text-[22px] font-extrabold theme-text-2 relative">
						{title}
						<span className="absolute px-[6px] leading-[21px] ml-2 bottom-1 text-[9px] font-light rounded-md theme-text-dark theme-bg-main opacity-75">
							{status}
						</span>
					</h2>
					<p className="text-[15px] font-normal theme-text-3 mb-2 break-keep leading-5 h-[40px]">{description}</p>
					<div className="flex flex-wrap">
						{hashtag.map((i) => (
							<p key={i} className="mr-2 text-[13px] font-light text-zinc-500">
								#{i}
							</p>
						))}
					</div>
				</div>
				<Image src={image} alt="기본 이미지" width={300} height={200} className="h-[200px] flex-0 max-md:w-full" />
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

export default ProjectList;
