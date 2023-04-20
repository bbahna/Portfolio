import Head from 'next/head';

import metadata from '@/data/metadata';
import Navigation from './Navigation';

const Container = (props: any) => {
	const meta = {
		title: metadata.title,
		description: metadata.description,
		author: metadata.author,
		...props.customMeta,
	};

	return (
		<div className="flex flex-col items-center w-full">
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
				<meta property="og:site_name" content={meta.author} />
			</Head>
			<Navigation />
			<main className="flex-1 w-full max-w-screen-lg p-3">{props.children}</main>
		</div>
	);
};
export default Container;
