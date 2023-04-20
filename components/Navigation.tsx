import navlinks from '@/data/navlinks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
	const router = useRouter();
	return (
		<header className="sticky top-0 left-0 flex flex-row items-center justify-between w-full max-w-screen-lg p-2 bg-white">
			<div className="flex flex-row items-center">
				<Link href="/">
					<Image src={`/logo.png`} alt="로고" width={45} height={45} objectFit={`cover`} className="rounded-full" />
				</Link>
			</div>
			<nav>
				{navlinks.map((nav) => (
					<Link href={nav.link} key={nav.title} legacyBehavior>
						<a className={`${router.pathname.startsWith(`${nav.link}`) && 'text-teal-400'} mr-5 text-base`}>
							{nav.title}
						</a>
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Navigation;
