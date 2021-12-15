import React from 'react';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

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
		<div className="flex mx-24 mb-8 items-center justify-center" id="about">
			<div className="flex flex-col my-24 max-w-lg mr-[450px]">
				<ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
					<p className="text-black dark:text-white text-3xl mb-6">
						Hi I'm Fluttensor, a passionate Full-stack Web & Mobile Developer
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
					<p className="text-black dark:text-white text-xl mb-6">
						I Develop & Design Beautiful Websites & Mobile Apps In NextJs Flutter Golang Node also 
					  Develop Chatbots with Rasa, Blockchains with Substrate, NLP Models with Tensorflow and Much More... 
					</p>
				</ScrollAnimation>
				<div className="grid gap-x-6 w-[300px] grid-cols-fill-120px">
					{skills.map((skill, index) => (
						<ScrollAnimation
							animateIn="animate__flipInX"
							animateOnce={true}
							key={index}
						>
							<div className='flex items-center text-xl text-black dark:text-white w-[140px]'>
								<ArrowRight className="mr-4" />
								{skill}
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
			<div className="flex absolute w-[480px] ml-[600px]">
				<img src="/computer.png" alt="Computer" width={500} height={400} />
				<ParallaxProvider>
					<div className="flex absolute w-[300px] ml-[220px]">
						<Parallax x={[-30, 30]}>
							<img
								src="/videoPlayer.png"
								alt="Video Player"
								width={200}
								height={200}
							/>
						</Parallax>
					</div>
					<div className="flex absolute w-[300px] mt-[100px]">
						<Parallax y={[-100, 100]}>
							<img src="/idCard.png" alt="ID Card" width={150} height={90} />
						</Parallax>
					</div>
				</ParallaxProvider>
			</div>
		</div>
	);
};


export default AboutComponent;
