import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import navlinks from '@/data/navlinks';
import metadata from '@/data/metadata';

const Container = (props: any) => {
	const meta = {
		title: metadata.title,
		description: metadata.description,
		author: metadata.author,
		...props.customMeta,
	};

	return (
		<div className={`w-full flex flex-col items-center`}>
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
				<meta property="og:site_name" content={meta.author} />
			</Head>
			{/* 헤더 */}
			<header
				className={`sticky top-0 left-0 bg-white w-full max-w-screen-lg flex flex-row justify-between items-center p-2`}
			>
				<div className={`flex flex-row items-center`}>
					<Link href="/">
						<Image src={`/logo.png`} alt="로고" width={45} height={45} objectFit={`cover`} className={`rounded-full`} />
					</Link>
				</div>
				<nav>
					{navlinks.map((nav) => (
						<Link href={nav.link} key={nav.title} legacyBehavior>
							<a className={`mr-5 text-base`}>{nav.title}</a>
						</Link>
					))}
				</nav>
			</header>
			{/* 바디 */}
			<main className={`w-full max-w-screen-lg p-3`}>{props.children}</main>
		</div>
	);
};
export default Container;
