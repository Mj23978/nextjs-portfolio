import React from 'react';
import useForm from 'lib/hooks/useForm';
import Image from 'next/image';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import classNames from 'classnames';

const Contact: React.FC = () => {
	const { formData, errors, handleInput, handleMessageInput, isFormValid } =
		useForm();

	return (
		<div
			// className="flex flex-col w-[100vw] justify-center mt-20 mb-36"
			className="flex flex-col mt-20 mb-20 w-full"
			id="contact"
		>
			<h1 className="inline-block text-4xl bg-gradient-to-r from-[#EF9797] via-[#CE7EC7] #A364D6 to-[#A1D0F9] font-bold w-[fit-content] bg-clip-text text-black dark:text-transparent">
				Contact
			</h1>
			{/* <div id="hands" className="absolute flex flex-[space-beetwen] items-center w-[105vw] z-1">
				<ParallaxProvider>
					<Parallax y={[-50, 0]}>
						<Image src="/hand2.png" alt="hand-2" width={433} height={727} />
					</Parallax>
					<Parallax x={[-10, 10]}>
						<Image src="/hand3.png" alt="hand-3" width={434} height={1014} />
					</Parallax>
				</ParallaxProvider>
			</div> */}
			<form
				className="flex flex-col items-center mt-6"
				noValidate
				action="https://formspree.io/f/mdoyezjy"
				method="POST"
			>
				<ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
					<p className="text-black dark:text-white text-3xl">
						👋 Hello, what's up?
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
					<p className="text-black dark:text-white text-xl w-[400px] my-6 mb-10 text-center ">
						Whether you have a question, want to say hi, or anything else that
						it might be, my inbox is always open!
					</p>
				</ScrollAnimation>
				<input
					className={classNames(
						'p-8 outline-none border-none bg-[#f8eeee] dark:bg-[#37393E] text-xl w-[500px] rounded-md my-6 transition ease-linear delay-100 z-10 w-max-[90vw] focus:scale-[98%]',
						errors!.name && 'invalid'
					)}
					placeholder="your@email.com"
					type="email"
					onChange={() => handleInput}
					value={formData!.email}
					id="email"
					name="_replyto"
					required
					autoComplete="off"
				/>
				<input
					placeholder="Your Name"
					type="text"
					className={classNames(
						'p-8 outline-none border-none text-black bg-[#f8eeee] dark:bg-[#37393E] text-xl w-[500px] rounded-md mt-6 mb-12 transition ease-linear delay-100 z-10 w-max-[90vw] focus:scale-[98%]',
						errors!.name && 'invalid'
					)}
					onChange={() => handleInput}
					value={formData!.name}
					name="name"
					required
					autoComplete="off"
				/>
				<textarea
					placeholder="What would you like to tell me?"
					className={classNames(
						'p-6 outline-none border-none text-black text-lg bg-[#f8eeee] dark:bg-[#37393E] w-[500px] round-md z-10 transition ease-linear delay-100 focus:scale-[98%]',
						errors!.message && 'invalid'
					)}
					onChange={() => handleMessageInput}
					value={formData!.message}
					name="message"
					required
					autoComplete="off"
				/>
				<ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
					<button
						className="w-[fit-content] text-[#e0bbbb] dark:text-white py-3 px-6 text-xl mt-12 cursor-none bg-none border-2 border-solid dark:border-white outline-none rounded-lg hover:bg-gray-500 focus:bg-gray-500"
						type="submit"
						value="send"
						disabled={!isFormValid}
					>
						Send Email
					</button>
				</ScrollAnimation>
			</form>
		</div>
	);
};

export default Contact;
