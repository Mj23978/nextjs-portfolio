import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';

import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import ThemeButton from './ThemeButton';
import useBlobity from './Cursor/useBlobity';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
		<NextLink href={href}>
			<a
				// data-no-blobity
				// data-blobity-radius="12"
				className={cn(
					isActive
						? 'font-semibold text-gray-800 dark:text-gray-200'
						: 'font-normal text-grgray-600 dark:text-gray-400',
					'z-10 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
				)}
			>
				<span className="capsize">{text}</span>
			</a>
		</NextLink>
	);
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

	const blobity = useBlobity({
		focusableElementsOffsetX: 5,
		focusableElementsOffsetY: 5,
		color: '#544545',
		dotColor: '#10BD7E',
		invert: true,
		focusableElements: '[data-blobity]',
		// '[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
		font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
		fontSize: 14,
		fontWeight: 400,
		opacity: 0.7,
		fontColor: '#ffffff',
		zIndex: 1,
		mode: 'bouncy',
		size: 28,
		radius: 1,
	});
	useEffect(() => {
		if (blobity.current) {
			// @ts-ignore
			window.blobity = blobity.current;
		}
	}, [blobity]);
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
		title: 'Fluttensor',
		description: `Full Stack Web & Mobile Developer.`,
		type: 'website',
		image: '/mj.png',
		...customMeta,
	};

  return (
		<div className="bg-gray-50 dark:bg-gray-900">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https:/fluttensor.tk${router.asPath}`}
				/>
				<link rel="canonical" href={`https:/fluttensor.tk${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Fluttensor" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />
				<meta property="og:title" content={meta.title} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
			{/* <CustomCursor/> */}
			<div className="flex flex-col justify-center px-8">
				<nav className="flex items-center justify-around w-full relative max-w-[95rem] border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
					<a href="#skip" className="skip-nav">
						Skip to content
					</a>
					<p className="font-mono lg:text-2xl text-black dark:text-white sm:text-base md:text-lg text-md">
						~/fluttensor{router.pathname.replace("/[slug]", "")}
					</p>
					<div className="ml-[-0.60rem]">
						<MobileMenu />
						<NavItem href="/" text="Home" />
						<NavItem href="/guestbook" text="GuestBook" />
						<NavItem href="/blog" text="Blog" />
						<NavItem href="/snippets" text="Snippets" />
						<ThemeButton
							mounted={mounted}
							resolvedTheme={resolvedTheme}
							setTheme={setTheme}
						></ThemeButton>
					</div>
				</nav>
			</div>
			<main
				id="skip"
				className="relative flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
			>
				{children}
				<Footer />
			</main>
		</div>
	);
}