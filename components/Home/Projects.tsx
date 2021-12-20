import React from 'react';
import { useTheme } from 'next-themes';

import { GitHub, Paperclip } from 'react-feather';

export type Project = {
	title: string;
	description: string;
	tags: string;
	link: string;
	github: string;
};

const AboutComponent: React.FC = () => {
	const Projects: Project[] = [
		{
			title: 'Beca',
			description:
			'Highly customizable, feature-packed calendar works like google calendar but with more features',
			tags: 'Flutter',
			link: '',
			github: 'mj23978/beca',
		},
		{
			title: 'Next Ecommerce',
			description:
			'eCommerce Sample Made With Next, Saleor, Apollo, Stripe, Tailwindcss, React Hook Form',
			tags: 'React Next Apollo Saleor',
			link: '',
			github: 'mj23978/next-ecommerce',
		},
		{
			title: 'Mafia Commentator',
			description:
			'🐱‍👤 this app made for commentators of mafia game. could manage players and player actions and add roles',
			tags: 'Flutter Rive',
			link: '',
			github: 'mj23978/mafia_comentator',
		},
		{
			title: 'Polkadot Plugins',
			description:
			'Base Plugins for PokeWal App. Support Polkadot and Kusama Network',
			tags: 'Flutter Polkadot Web3',
			link: '',
			github: 'mj23978/polkadot_plugins',
		},
		{
			title: 'Seemer Backend',
			description:
			'One-on-one and group E2EE Messaging with Golang, YugyabyteDB and NATS',
			tags: 'Golang YugaByteDB NATS',
			link: '',
			github: 'mj23978/chat-backend',
		},
		{
			title: 'Flutter UIX',
			description: 'Flutter UI Library Similar to tailwindcss',
			tags: 'Flutter Tailwindcss',
			link: '',
			github: 'mj23978/flutter_uix',
		},
		{
			title: 'TypeGraphQL-ORM',
			description:
				'Cli Tool Create TypeGraphQL Crud Resolvers and Orm Classes and Functions from Speacial TS Files',
			tags: 'TypeScript Node Oclif',
			link: '',
			github: 'mj23978/typegraphql-orm',
		},
		{
			title: 'Financial Chatbot',
			description:
				'🤖 a Financial Chatbot with handoff ability built with Rasa',
			tags: 'Python Rasa',
			link: '',
			github: 'mj23978/financial-chatbot',
		},
		{
			title: 'Substrate Demo',
			description: 'Basic Substrate Based Blockchain',
			tags: 'Rust Substrate Web3',
			link: '',
			github: 'mj23978/substrate-demo',
		},
	];

	const { resolvedTheme } = useTheme();
	console.log(resolvedTheme);

	return (
		<div className="flex flex-col justify-center my-8 sm:items-center">
			<h1
				id="project-header"
				className="md:w-[75vw] lg:w-[80vw] text-4xl py-2 my-10 bg-gradient-to-r from-[#EF9797] via-[#CE7EC7] #A364D6 to-[#A1D0F9] font-bold w-[fit-content] bg-clip-text text-black dark:text-transparent"
			>
				Things I've Built...
			</h1>
			<div className="py-5 flex flex-col gap-6 items-center md:w-[75vw] lg:w-[80vw] md:grid md:grid-cols-fill-250px overflow-hidden">
				{Projects.map((project, index) => (
					<div
						key={project.title + index}
						id={'project-' + index}
						className="flex flex-col w-[250px] h-[250px] bg-[#ffdbdb] dark:bg-[#232222] p-4 justify-between transition delay-100 ease-linear rounded-lg hover:-translate-y-2"
					>
						<div className="flex flex-col">
							<div className="flex justify-between items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									viewBox="0 0 24 24"
									fill="none"
									stroke={resolvedTheme != 'dark' ? '#232222' : '#F4F4F5'}
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
								</svg>
								<div className="flex">
									<a
										className="mr-6 text-black dark:text-white transition delay-100 ease-linear hover:scale-110"
										href={`https://github.com/${project.github}`}
										target="_blank"
									>
										<GitHub />
									</a>
									{project.link == '' ? (
										<div></div>
									) : (
										<div>
											<a
												className="mr-6 text-black dark:text-white transition delay-100 ease-linear hover:scale-110"
												href={`https://${project.link}`}
												target="_blank"
											>
												<Paperclip />
											</a>
										</div>
									)}
								</div>
							</div>
							<h3 className="text-2xl my-4 text-black dark:text-white">
								{project.title}
							</h3>
							<p className="text-lg text-black dark:text-white">
								{project.description.length > 50 ? project.description.substring(0, 49) + "..." : project.description}
							</p>
						</div>
						<p className="font-mono text-sm text-black dark:text-white mt-1.5">
							{project.tags}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutComponent;
