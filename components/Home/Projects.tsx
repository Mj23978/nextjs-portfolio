import { useTheme } from 'next-themes'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { Paperclip, GitHub } from 'react-feather'

export type Project = {
  title: string
  description: string
  tags: string
  link: string
  github: string
}

const AboutComponent: React.FC = () => {
  const Projects: Project[] = [
    {
      title: 'Geethoob',
      description:
        'View, and visualise your GitHub profile and stats with beautiful graphs',
      tags: 'React Chart.js TypeScript',
      link: 'geethoob.vercel.app',
      github: 'harshhhdev/geethoob',
    },
    {
      title: 'Glassmorphicssm',
      description:
        'Generate glassy CSS code for all your glassmorphism needs',
      tags: 'React TypeScript',
      link: 'harshhhdev.github.io/glassmorphicssm',
      github: 'harshhhdev/glassmorphicssm',
    },
    {
      title: 'Issure',
      description:
        'Fetch random issues from your GitHub repositories to work on',
      tags: 'React Octokit TypeScript',
      link: 'issure.vercel.app',
      github: 'harshhhdev/issure',
    },
    {
      title: 'Calvera',
      description: 'A minimal portfolio + blog template for Abell.js',
      tags: 'Abell',
      link: 'harshhhdev.github.io/calvera',
      github: 'harshhhdev/calvera',
    },
    {
      title: 'Kraftuur',
      description:
        'A colour system for designing beautiful and accesible interfaces',
      tags: 'React TypeScript Node',
      link: 'harshhhdev.github.io/kraftuur',
      github: 'harshhhdev/kraftuur',
    },
    {
      title: 'pastemyst.js',
      description: 'Complete REST API wrapper for pastemyst v2',
      tags: 'Axios TypeScript node',
      link: 'www.npmjs.com/package/pastemyst',
      github: 'harshhhdev/pastemyst',
    },
    {
      title: 'App Idea Generator',
      description: 'Generate silly, or cool app ideas for inspiration',
      tags: 'Svelte',
      link: 'harshhhdev.github.io/app-idea-generator',
      github: 'harshhhdev/app-idea-generator',
    },
  ]

  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme)

  return (
		// <div className="flex md:m-24 justify-center flex-col my-24 mx-3 sm:items-center">
		<div className="">
			<ScrollAnimation animateIn="animate__bounceInRight" animateOnce={true}>
				<h1 className="bg-gradient-to-r from-[#EF9797] via-[#CE7EC7] #A364D6 to-[#A1D0F9] font-bold w-[fit-content] bg-clip-text text-black dark:text-transparent inline-block text-4xl py-2 my-10 text-center">
					Things I've Built...
				</h1>
			</ScrollAnimation>
			<div className="py-5 w-[70vw] flex flex-col items-center md:grid md:gap-8 lg:grid-cols-fill-300px md:grid-cols-fill-250px overflow-hidden">
				{Projects.map((project, index) => (
					<ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
						<div className="flex flex-col bg-[#ffdbdb] dark:bg-[#232222] w-[300px] h-[300px] p-7 justify-between transition delay-100 ease-linear rounded-lg hover:-translate-y-2">
							<div className="flex flex-col">
								<div className="flex justify-between items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										viewBox="0 0 24 24"
										fill="none"
										stroke={resolvedTheme == 'dark' ? '#F4F4F5' : '#232222'}
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
									</svg>
									<div className="flex">
										<a
											className="ml-6 text-black dark:text-white transition delay-100 ease-linear hover:scale-110"
											href={`https://${project.link}`}
											target="_blank"
										>
											<Paperclip />
										</a>
										<a
											className="ml-6 text-black dark:text-white transition delay-100 ease-linear hover:scale-110"
											href={`https://github.com/${project.github}`}
											target="_blank"
										>
											<GitHub />
										</a>
									</div>
								</div>
								<h3 className="text-3xl my-4 text-black dark:text-white">
									{project.title}
								</h3>
								<p className="text-xl text-black dark:text-white">
									{project.description}
								</p>
							</div>
							<p className="font-mono text-black dark:text-white">
								{project.tags}
							</p>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
}

export default AboutComponent
