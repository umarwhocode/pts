import Link from 'next/link';
import React from 'react';
import { categories, mobileRoutes } from '../utils/data';

const Footer = () => {
	const titleClass = 'uppercase text-2xl font-semibold mb-6';

	return (
		<section className='py-[120px] bg-black text-white'>
			<div className='container mx-auto px-8 md:px-0'>
				<div className='grid md:grid-cols-3 gap-20'>
					<div>
						<h2 className={titleClass}>Global Coverage</h2>
						<p className='text-lg'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Excepturi optio sit numquam. Molestias cumque quae amet hic
							quibusdam, magnam beatae enim quidem illo itaque similique
							reiciendis dolor numquam consequuntur sed!
						</p>
					</div>
					<div>
						<h2 className={titleClass}>Important Links</h2>
						<div className='menu flex flex-col gap-4 capitalize'>
							{mobileRoutes.map((route) => {
								return (
									<Link href={route.path} key={route.id}>
										<a className='text-lg hover:scale-110 hover:translate-x-5 transition-transform ease-in-out duration-300'>
											{route.label}
										</a>
									</Link>
								);
							})}
						</div>
					</div>
					<div>
						<h2 className={titleClass}>top categories</h2>
						<div className='flex flex-wrap gap-2'>
							{categories.map((cat, index) => {
								return (
									<button key={index} className='border py-1 px-5 uppercase'>
										{cat}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
