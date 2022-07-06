import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { mobileRoutes, routes } from '../utils/data';

type sidebarProps = {
	showSidebar: boolean;
	setShowSidebar: any;
};

const Sidebar: FC<sidebarProps> = ({ showSidebar, setShowSidebar }) => {
	const router = useRouter();
	return (
		<div
			className={`fixed bg-white  overflow-hidden h-[100vh] top-0 border-r-2  ${
				showSidebar ? 'w-full z-50' : 'w-0'
			} transition-all duration-500 `}
		>
			<div className=' p-4 flex justify-between items-center w-full'>
				<h1 className='text-3xl font-semibold'>Grace</h1>
				<button
					className='text-3xl hover:text-blue-900 flex md:hidden'
					aria-label='navbar-toggler'
					onClick={() => setShowSidebar((prev: any) => !prev)}
				>
					<FaTimes />
				</button>
			</div>
			<div className='flex flex-col gap-2 p-4'>
				{mobileRoutes.map(({ id, label, path }) => {
					return (
						<button
							key={id}
							className={`hover:bg-gray-200 font-semibold rounded p-4  capitalize transition-all duration-400 ease-in-out text-left ${
								router.pathname === '/' + label
									? 'text-blue-900 bg-gray-200'
									: ''
							}`}
							onClick={() => {
								router.push(path);
								setShowSidebar((prev: any) => !prev);
							}}
						>
							<a>{label}</a>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
function setShowSidebar(arg0: (prev: any) => boolean): void {
	throw new Error('Function not implemented.');
}
