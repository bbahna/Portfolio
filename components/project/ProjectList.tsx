import Image from 'next/image';
import Link from 'next/link';

interface IPostProps {
	title: string;
	des: string;
	link: string;
}

const ProjectList = ({ title, des, link }: IPostProps) => {
	return (
		<Link href={link} passHref>
			<div className="flex flex-col justify-between m-4 overflow-hidden duration-200 rounded-md w-[300px] h-[380px] shadow-jsx dark:bg-[#2a2a2c]">
				<div className="px-5 py-7 dark:bg-[#2a2a2c]">
					<h2 className="mb-2 text-[22px] font-extrabold theme-text-2">{title}</h2>
					<p className="text-[15px] font-normal theme-text-3">{des}</p>
				</div>
				<Image src={'/default.jpg'} alt="기본 이미지" width={300} height={300} className="min-h-[220px]" />
			</div>
			<style jsx>{`
				.shadow-jsx {
					box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
					&:hover {
						box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
						transform: translateY(-4px);
					}
				}
			`}</style>
		</Link>
	);
};

export default ProjectList;
