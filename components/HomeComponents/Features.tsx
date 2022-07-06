import Image from 'next/image';
import React from 'react';

const Features = () => {
	const boxClasses: string =
		'border-r-2 opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer';

	const lastBoxClasses: string =
		'opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer';

	return (
		<section className='features bg-black py-[120px] text-white'>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 text-center text-xl uppercase '>
					<div className={boxClasses}>
						<div className='w-14 h-14 mx-auto'>
							<Image
								src='/assets/icons/headphones.png'
								alt='Headphones'
								layout='responsive'
								objectFit='cover'
								width={60}
								height={60}
							/>
						</div>

						<h3 className='mt-6'>Customer Service</h3>
					</div>
					<div className={boxClasses}>
						<div className='w-14 h-14 mx-auto'>
							<Image
								src='/assets/icons/diamond.png'
								alt='Headphones'
								layout='responsive'
								objectFit='cover'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='mt-6'>Daimond Standard</h3>
					</div>
					<div className={boxClasses}>
						<div className='w-14 h-14 mx-auto'>
							<Image
								src='/assets/icons/wall-clock.png'
								alt='Headphones'
								layout='responsive'
								objectFit='cover'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='mt-6'>Building Block</h3>
					</div>
					<div className={lastBoxClasses}>
						<div className='w-14 h-14 mx-auto'>
							<Image
								src='/assets/icons/people.png'
								alt='Headphones'
								layout='responsive'
								objectFit='cover'
								width={60}
								height={60}
							/>
						</div>
						<h3 className='mt-6'>Pure Satisfaction</h3>
					</div>
				</div>
				<div className='mt-[100px] text-center w-3/4 mx-auto'>
					<p className='text-lg tracking-wider'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
						eius laborum in, tempore adipisci quaerat possimus natus accusantium
						magni illo dolorum quod incidunt, placeat, ullam neque repudiandae
						nemo inventore expedita?
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
