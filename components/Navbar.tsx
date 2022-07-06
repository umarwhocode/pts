import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { routes } from '../utils/data';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';

type sidebarProps = {
	showSidebar: boolean;
	setShowSidebar: any;
};

const Navbar: FC<sidebarProps> = ({ showSidebar, setShowSidebar }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { pathname } = useRouter();
	const activeLink: string = 'text-blue-900';

	useEffect(() => {
		const scroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', scroll);
	}, []);

	return (
		<div
			className={`h-20 flex items-center justify-center px-6 sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${
				isScrolled ? 'bg-white' : 'bg-transparent'
			}`}
			id='navbar'
		>
			<div className='container mx-auto flex items-center justify-between w-full z-50'>
				<div>
					<h1
						className={`font-openSans text-3xl  ${
							isScrolled ? 'text-black' : 'text-white'
						}`}
					>
						Grace
					</h1>
				</div>
				<div className='hidden md:flex gap-4 font-openSans' id='nav-menu'>
					<Link href='/'>
						<a
							className={`hover:text-blue-900 capitalize ${
								pathname === '/' ? activeLink : ''
							}`}
						>
							home
						</a>
					</Link>
					{routes.map(({ id, label, path }) => {
						return (
							<Link href={path} key={id} id='nav-link'>
								<a
									className={`hover:text-blue-900 capitalize ${
										isScrolled ? 'text-black' : 'text-white'
									} ${pathname === '/' + label ? activeLink : ''}`}
								>
									{label}
								</a>
							</Link>
						);
					})}
				</div>
				<button
					className={`text-3xl hover:text-blue-900 flex md:hidden  ${
						isScrolled ? 'text-black' : 'text-white'
					}`}
					aria-label='navbar-toggler'
					onClick={() => setShowSidebar((prev: any) => !prev)}
				>
					{showSidebar ? <FaTimes /> : <CgMenuLeftAlt />}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
