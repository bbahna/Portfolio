import { useEffect, useState } from 'react';
import Head from 'next/head';
import metadata from '@/data/metadata';
import Navigation from './Navigation';
import Footer from './Footer';

const Container = (props: any) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleWindowScroll = () => {
			if (window.scrollY > 50) setShow(true);
			else setShow(false);
		};

		window.addEventListener('scroll', handleWindowScroll);
		return () => window.removeEventListener('scroll', handleWindowScroll);
	}, []);

	const meta = {
		title: metadata.title,
		description: metadata.description,
		author: metadata.author,
		...props.customMeta,
	};

	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="flex flex-col items-center w-full min-h-screen theme-bg-0 pt-[60px]">
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
				<meta property="og:site_name" content={meta.author} />
			</Head>
			<Navigation />
			<main className="flex-1 w-full max-w-screen-lg p-3">{props.children}</main>
			<Footer />
			<div className="fixed right-8 bottom-8">
				<button
					aria-label="Scroll To Top"
					type="button"
					onClick={handleScrollTop}
					className={`p-3 transition-all rounded-full theme-bg-2  ${show ? 'flex' : 'hidden'}`}
				>
					<svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fillRule="evenodd"
							d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
export default Container;
