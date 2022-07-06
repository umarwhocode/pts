import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer, Navbar, Preloader, Sidebar } from '../components';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(true);
	const [showSidebar, setShowSidebar] = useState(false);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setLoading(false);
		}, 5000);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	return (
		<>
			{!loading ? (
				<AnimatePresence>
					<div className='relative'>
						<Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
						<Sidebar
							showSidebar={showSidebar}
							setShowSidebar={setShowSidebar}
						/>
						<Component {...pageProps} />
						<Footer />
					</div>
				</AnimatePresence>
			) : (
				<Preloader />
			)}
		</>
	);
};

export default MyApp;
