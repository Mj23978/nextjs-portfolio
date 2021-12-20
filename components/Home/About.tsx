import React from 'react';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { ArrowRight } from 'react-feather';

const AboutComponent: React.FC = () => {
	const skills = [
		'TypeScript',
		'Node',
		'React',
		'PostgreSQL',
		'MongoDB',
		'Prisma',
		'Fastify',
		'GraphQL',
	];

	return (
		<div
			className="flex flex-col max-w-sm sm:max-w-lg md:max-w-none mx-24 mb-8 items-center justify-center"
			id="about"
		>
			<div className="flex lg:absolute w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] lg:ml-[600px]">
				<img src="/computer.png" alt="Computer" width={500} height={400} />
				<ParallaxProvider>
					<div className="flex absolute w-[130px] sm:w-[160px] md:w-[200px] lg:w-[200px] ml-[160px] sm:ml-[200px] lg:ml-[230px]">
						<Parallax x={[-30, 30]}>
							<img src="/videoPlayer.png" alt="Video Player" />
						</Parallax>
					</div>
					<div className="flex absolute w-[135px] sm:w-[175px] md:w-[200px] lg:w-[240px] mt-[75px] sm:mt-[85px] md:mt-[105px] lg:mt-[130px]">
						<Parallax y={[-100, 100]}>
							<img src="/idCard.png" alt="ID Card" />
						</Parallax>
					</div>
				</ParallaxProvider>
			</div>
			<div className="flex flex-col my-24 max-w-lg lg:mr-[450px]">
				<p className="text-black dark:text-white text-3xl mb-6">
					Hi I'm Fluttensor, a passionate Full-stack Web & Mobile Developer
				</p>
				<p className="text-black dark:text-white text-xl mb-6">
					I Develop & Design Beautiful Websites & Mobile Apps In NextJs Flutter
					Golang Node also Develop Chatbots with Rasa, Blockchains with
					Substrate, NLP Models with Tensorflow and Much More...
				</p>
				<div className="grid gap-x-6 w-[300px] grid-cols-fill-120px">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="flex items-center text-xl text-black dark:text-white w-[140px]"
						>
							<ArrowRight className="mr-4" />
							{skill}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
