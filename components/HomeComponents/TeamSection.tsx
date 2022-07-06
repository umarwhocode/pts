import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { teamMembers } from '../../utils/data';

const TeamSection = () => {
	const textContentClasses =
		'content text-white flex-col text-center absolute top-2/4 left-2/4 -translate-x-2/4  -translate-y-2/4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:ease-in';

	return (
		<section className='py-[120px] bg-slate-200'>
			<div className='container mx-auto px-8 md:px-0'>
				<div className='text-center mb-[100px]'>
					<h2 className='text-5xl uppercase mb-[60px]'>the team</h2>
					<p className='text-xl'>dedicated to excellence.</p>
				</div>
				<div className='grid md:grid-cols-3 gap-6'>
					{teamMembers.map(({ id, name, socialAccount, image }) => {
						return (
							<div className='w-full h-[500px]  relative group ' key={id}>
								<Image
									className='rounded-md'
									src={image}
									alt={name}
									layout='responsive'
									width='100%'
									height='100%'
									objectFit='cover'
								/>
								<div className='absolute w-full h-full top-0 left-0 bg-black opacity-0 group-hover:opacity-70 transition-all ease-in-out duration-500 rounded-md'></div>
								<div className={textContentClasses}>
									<h3 className='text-4xl font-bold mb-8'>{name}</h3>
									<div className='flex gap-6 w-full justify-center items-center text-xl'>
										{socialAccount.map(({ icon, path }, index) => {
											return (
												<Link href={path} key={index}>
													<a className='cursor-pointer'>{icon}</a>
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
