import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const MainHero = () => {
	const [currentWord, setCurrentWord] = useState(0);
	const words = ['grace', 'power', 'style'];

	useEffect(() => {
		const changeWord = () => {
			if (currentWord === words.length - 1) {
				setCurrentWord(0);
			} else {
				setCurrentWord((prev) => prev + 1);
			}
		};

		const wordInterval = setInterval(() => {
			changeWord();
		}, 3000);

		return () => {
			clearInterval(wordInterval);
		};
	}, [currentWord, words.length]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 80) {
				window.document.getElementById('arrowBtn')?.classList.remove('visible');

				window.document.getElementById('arrowBtn')?.classList.add('hidden');
			} else {
				window.document.getElementById('arrowBtn')?.classList.remove('hidden');

				window.document.getElementById('arrowBtn')?.classList.add('visible');
			}
		});
	}, []);

	return (
		<section className='relative flex items-center justify-center w-full min-h-screen -mt-20 overflow-hidden '>
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				className='absolute w-auto min-w-full min-h-full max-w-none '
			>
				<source src={'/assets/videos/herovideo.mp4'} type='video/mp4' />
			</video>
			<div className='overlay w-full min-h-screen absolute top-0 bottom-0 left-0 right-0 bg-black opacity-75'></div>
			<div className='z-10 text-white text-[70px] uppercase p-10'>
				<motion.h1 className='text-center'>
					Welcome to{' '}
					{words.map((el, index) => {
						return (
							<motion.span
								initial={{ opacity: index === currentWord ? 0 : 1 }}
								animate={{
									opacity: index === currentWord ? 1 : 0,
								}}
								transition={{
									duration: 2,
								}}
								key={index}
								className={`${
									index === currentWord
										? 'opacity-100 visible'
										: 'opacity-0 hidden'
								} `}
							>
								{el}
							</motion.span>
						);
					})}
				</motion.h1>
			</div>
			<div
				className='z-20 text-white absolute bottom-10 left-2/4 text-3xl animate-bounce'
				id='arrowBtn'
			>
				<FaArrowDown />
			</div>
		</section>
	);
};

export default MainHero;
