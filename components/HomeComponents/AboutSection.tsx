import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../UtilityComponents/Button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	const boxVariant: any = {
		visible: { md: { opacity: 1, x: '0', transition: { duration: 2 } } },
		hidden: { md: { opacity: 0, x: '-200px' } },
	};

	const ImgVariant: any = {
		visible: { md: { opacity: 1, x: '0', transition: { duration: 2 } } },
		hidden: { md: { opacity: 0, x: '200px' } },
	};

	useEffect(() => {
		if (inView) {
			control.start('visible');
		}
	}, [control, inView]);

	return (
		<section className='about py-32'>
			<div className='container mx-auto px-8 md:px-0'>
				<div className='text-center mb-[100px]'>
					<h2 className='text-5xl uppercase mb-14'>Welcome to Grace</h2>
					<p className='text-xl'>were very happy to see you</p>
				</div>
				<div className='grid md:grid-cols-2 gap-20 items-center'>
					<motion.div
						className='flex flex-col gap-6 text-2xl text-left leading-9'
						ref={ref}
						initial='hidden'
						variants={boxVariant}
						animate={control}
					>
						<p>
							Sold old ten are quit lose deal his sent. You correct how sex
							several far distant believe journey parties. We shyness enquire
							uncivil affixed it carried to.{' '}
						</p>
						<p>
							End sitting shewing who saw besides son musical adapted.
							Contrasted interested eat alteration pianoforte sympathize was. He
							families believed if no elegance interest surprise an. It abode
							wrong miles an so delay plate.
						</p>
						<Button className='mt-3 hover:border-transparent hover:bg-gray-100 transition-all duration-200'>
							Get In touch
						</Button>
					</motion.div>
					<motion.div
						className='relative w-full h-[500px]'
						ref={ref}
						initial='hidden'
						variants={ImgVariant}
						animate={control}
					>
						<Image
							src='/assets/images/david-marcu-78A265wPiO4-unsplash.jpg'
							alt='Isometric Pad'
							layout='fill'
							objectFit='cover'
							className='rounded-lg'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
