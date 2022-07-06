import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { reviews } from '../../utils/data';

const ReviewsSection = () => {
	return (
		<section className='reviews py-[120px] bg-promo-pattern bg-center bg-cover bg-no-repeat text-white text-center'>
			<div className='container mx-auto'>
				<div className='mb-[100px]'>
					<h1 className='text-5xl uppercase mb-[60px]'>client reviews</h1>
					<p className='text-xl'>satisfaction, everytime</p>
				</div>

				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					showArrows={false}
					stopOnHover={false}
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					interval={4000}
				>
					{reviews.map(({ id, name, feedback, image }) => {
						return (
							<motion.div className={``} key={id}>
								<div className='w-[100px] h-[100px] relative mx-auto '>
									<Image
										src={image}
										alt={name}
										layout='responsive'
										objectFit='cover'
										className='rounded-full'
										width={100}
										height={100}
									/>
								</div>
								<p className='w-3/4 mx-auto my-6 text-lg'>{feedback}</p>
								<p className='text-2xl capitalize'>{name}</p>
							</motion.div>
						);
					})}
				</Carousel>
			</div>
		</section>
	);
};

export default ReviewsSection;
