import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import linkdata from '@/data/linkdata';
import CopyLinkBtn from '@/components/posts/CopyLinkBtn';

const Index = () => {
	return (
		<div className="flex flex-col min-h-screen m-auto bg-gray-100">
			<div className="max-w-[460px] flex flex-col items-center w-full min-h-screen px-5 py-8 m-auto">
				<div className="flex flex-col items-center flex-1 w-full mb-5">
					<Image
						src="/hyoon.jpg"
						alt="프로필_이미지"
						width={500}
						height={500}
						className="w-[100px] h-[100px] rounded-[30px] mb-6"
					/>
					<h1 className="mb-3 text-xl font-bold dark:text-zinc-800">프론트엔드 개발자 효동동</h1>
					<p className="mb-5 text-sm dark:text-zinc-700 text-zinc-700">디자인도 하고 웹도 만들고 앱도 만드는 새럼</p>
					{linkdata.map((data) => (
						<Link href={data.link} key={data.title} className="w-full" target="_blank">
							<div className="flex flex-row items-center p-4 mb-3 duration-300 bg-white rounded-xl dark:bg-white shadow-jsx hover:bg-teal-200 hover:dark:bg-teal-200">
								<div className="mr-4 w-[72px] h-[72px] overflow-hidden rounded-md flex justify-center">
									<Image src={data.image} alt="로고" width={500} height={500} className="max-w-none w-auto h-[72px]" />
								</div>
								<div>
									<h2 className="text-[17px] font-semibold dark:text-zinc-800">{data.title}</h2>
									<p className="text-[13px] dark:text-zinc-800">{data.description}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div className="flex items-center mb-2">
					<Image src="/logo.png" alt="푸터_로고_이미지" width={500} height={500} className="w-11 h-11" />
					<h2 className="ml-2 text-2xl font-extrabold dark:text-zinc-800">Hyoon</h2>
				</div>
				<p className="text-[11.5px] text-zinc-500 dark:text-zinc-500 italic">
					이 사이트의 코드는
					<Link
						href="https://github.com/bbahna/Portfolio"
						target="_blank"
						className="p-[5px] underline dark:text-zinc-800 hover:text-teal-600 hover:dark:text-teal-600 duration-200"
					>
						여기서
					</Link>
					확인 할 수 있어요 (*´∀`*)ゞ
				</p>
			</div>
			<style jsx>{`
				p {
					font-family: 'SCDream', system-ui, sans-serif;
				}
				.hover-effect {
					&:hover {
						box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
						transform: scale(1.05);
					}
				}
				.shadow-jsx {
					box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
					&:hover {
						box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);
						transform: scale(1.03);
						// transform: translateY(-4px);
					}
				}
			`}</style>
		</div>
	);
};

export default Index;
