import Image from 'next/image';
import React from 'react';
import { blogs } from '../../utils/data';
import Button from '../UtilityComponents/Button';

const LatestNews = () => {
	return (
		<section className='pt-[120px] bg-black'>
			<div className='flex flex-col gap-[80px] mb-[100px] text-center text-white'>
				<h2 className='text-5xl uppercase'>latest news</h2>
				<p className='text-xl'>fresh from the press.</p>
			</div>
			<div className='grid md:grid-cols-6'>
				{blogs.map(({ id, title, excert, featured_image, category }, index) => {
					return (
						<div
							className={`blog md:first:col-span-3 ${
								index === 1 && 'md:col-span-3'
							} ${index === 2 && 'md:col-span-2'} ${
								index === 3 && 'md:col-span-2'
							} ${index === 4 && 'md:col-span-2'}`}
							key={id}
						>
							<div className='blog_inner relative group'>
								<Image
									src={featured_image}
									alt={title}
									layout='responsive'
									width='100%'
									height='100%'
									objectFit='cover'
								/>
								<div className=' text-white blog-content absolute z-20 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center opacity-100 flex flex-col group-hover group-hover:opacity-0 group-hover:top-1/4  transition-all ease-in-out duration-500'>
									<h3 className='text-2xl capitalize'>{category}</h3>
									<h4 className='text-4xl uppercase mt-4 mb-8'>{title}</h4>
									<p className='text-lg'>{excert}</p>
								</div>
								<Button
									className='absolute z-20 top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 group-hover:opacity-100 group-hover:top-2/4 transition-all ease-in-out duration-500'
									variant='white'
								>
									Read More
								</Button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default LatestNews;
