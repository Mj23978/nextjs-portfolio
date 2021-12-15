import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'react-feather'

import Container from '../components/Container';
import BlogPostCard from '../components/Home/BlogPostCard';
import Subscribe from '../components/Subscribe';
import Contact from 'components/Home/Contact';
import Projects from 'components/Home/Projects';
import About from 'components/Home/About';

export default function Home({ videos }) {
  return (
		<Container>
			<About />
			<div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
				<h3 className="bg-gradient-to-r from-[#EF9797] via-[#CE7EC7] #A364D6 to-[#A1D0F9] font-bold w-[fit-content] bg-clip-text text-black dark:text-transparent text-2xl md:text-4xl tracking-tight mb-6 py-2">
					Featured Posts
				</h3>
				<div className="flex gap-6 flex-col md:flex-row">
					<BlogPostCard
						title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
						slug="style-guides-component-libraries-design-systems"
						gradient="from-[#D8B4FE] to-[#818CF8]"
					/>
					<BlogPostCard
						title="Rust Is The Future of JavaScript Infrastructure"
						slug="rust"
						gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
					/>
					<BlogPostCard
						title="Past, Present, and Future of React State Management"
						slug="react-state-management"
						gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
					/>
				</div>
				<Link href="/blog">
					<a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
						Read all posts
						{/* <ArrowRight viewBox="0 0 24 24" className='h-6 w-6 ml-1 mt-1'/> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="h-6 w-6 ml-1 mt-1"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
							/>
						</svg>
					</a>
				</Link>
				<span className="h-16" />
				<Projects />
				<Contact />
				<Subscribe />
			</div>
		</Container>
	);
}
