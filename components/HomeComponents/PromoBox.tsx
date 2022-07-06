import React from 'react';
import Button from '../UtilityComponents/Button';

const PromoBox = () => {
	return (
		<section className='promobox'>
			<div className='flex flex-col md:flex-row'>
				<div className='flex-grow-1 px-[60px] py-[120px] bg-promo-pattern bg-no-repeat bg-cover bg-center text-white'>
					<h3 className='text-2xl mb-3'>Promo box</h3>
					<p className='text-lg mb-6'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
						placeat repudiandae qui sint nesciunt hic et officiis aliquid sequi,
						rerum tempore? Minima incidunt iure impedit, perspiciatis esse earum
						praesentium culpa?
					</p>
					<Button className='font-semibold tracking-wider' variant='white'>
						get in touch
					</Button>
				</div>
				<div className='flex-grow-1 px-[60px] py-[120px] bg-promo-pattern bg-no-repeat bg-cover bg-center text-right text-white'>
					<h3 className='text-2xl mb-3'>Promo box</h3>
					<p className='text-lg mb-6'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
						placeat repudiandae qui sint nesciunt hic et officiis aliquid sequi,
						rerum tempore? Minima incidunt iure impedit, perspiciatis esse earum
						praesentium culpa?
					</p>
					<Button className='font-semibold tracking-wider' variant='white'>
						get in touch
					</Button>
				</div>
			</div>
		</section>
	);
};

export default PromoBox;
