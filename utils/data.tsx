import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

export const routes = [
	// {
	// 	id: 1,
	// 	label: 'home',
	// 	path: '/',
	// },
	{
		id: 2,
		label: 'about',
		path: '/',
	},
	{
		id: 3,
		label: 'services',
		path: '/',
	},
	{
		id: 4,
		label: 'travel',
		path: '/',
	},
	{
		id: 5,
		label: 'contact',
		path: '/',
	},
];

export const mobileRoutes = [
	{
		id: 1,
		label: 'home',
		path: '/',
	},
	{
		id: 2,
		label: 'about',
		path: '/',
	},
	{
		id: 3,
		label: 'services',
		path: '/',
	},
	{
		id: 4,
		label: 'travel',
		path: '/',
	},
	{
		id: 5,
		label: 'contact',
		path: '/',
	},
];

export const teamMembers = [
	{
		id: 1,
		name: 'John Doe',
		image: '/assets/images/team1.jpg',
		socialAccount: [
			{ icon: <FaFacebookF />, path: '/' },
			{ icon: <FaInstagram />, path: '/' },
			{ icon: <FaTwitter />, path: '/' },
		],
	},
	{
		id: 2,
		name: 'Sara Ilyana',
		image: '/assets/images/team2.jpg',
		socialAccount: [
			{ icon: <FaFacebookF />, path: '/' },
			{ icon: <FaTwitch />, path: '/' },
			{ icon: <FaTwitter />, path: '/' },
		],
	},
	{
		id: 3,
		name: 'Marry Jose',
		image: '/assets/images/team3.jpg',
		socialAccount: [
			{ icon: <FaFacebookF />, path: '/' },
			{ icon: <FaInstagram />, path: '/' },
			{ icon: <FaTwitter />, path: '/' },
		],
	},
];

export const reviews = [
	{
		id: 1,
		name: 'John Doe',
		image: '/assets/images/john.webp',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat a quisquam. Illo accusantium incidunt, odio modi dicta ipsum fugiat harum saepe eius beatae labore provident veritatis quaerat voluptatum nemo omnis, perspiciatis quis dolorem eaque et tempora? Ipsum repellendus dolore beatae aperiam veritatis numquam ducimus totam libero accusantium, officiis deserunt?',
	},
	{
		id: 2,
		name: 'Ash Lee',
		image: '/assets/images/ash.webp',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat a quisquam. Illo accusantium incidunt, odio modi dicta ipsum fugiat harum saepe eius beatae labore provident veritatis quaerat voluptatum nemo omnis, perspiciatis quis dolorem eaque et tempora? Ipsum repellendus dolore beatae aperiam veritatis numquam ducimus totam libero accusantium, officiis deserunt?',
	},
	{
		id: 3,
		name: 'Sarah',
		image: '/assets/images/sarah.webp',
		feedback:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat a quisquam. Illo accusantium incidunt, odio modi dicta ipsum fugiat harum saepe eius beatae labore provident veritatis quaerat voluptatum nemo omnis, perspiciatis quis dolorem eaque et tempora? Ipsum repellendus dolore beatae aperiam veritatis numquam ducimus totam libero accusantium, officiis deserunt?',
	},
];

export const blogs = [
	{
		id: 1,
		title: 'post title',
		category: 'travel',
		featured_image: '/assets/images/david-marcu-78A265wPiO4-unsplash.jpg',
		excert:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.',
	},
	{
		id: 2,
		title: 'post title',
		category: 'travel',
		featured_image: '/assets/images/david-marcu-78A265wPiO4-unsplash.jpg',
		excert:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.',
	},
	{
		id: 3,
		title: 'post title',
		category: 'travel',
		featured_image: '/assets/images/david-marcu-78A265wPiO4-unsplash.jpg',
		excert:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.',
	},
	{
		id: 4,
		title: 'post title',
		category: 'travel',
		featured_image: '/assets/images/david-marcu-78A265wPiO4-unsplash.jpg',
		excert:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.',
	},
	{
		id: 5,
		title: 'post title',
		category: 'travel',
		featured_image: '/assets/images/david-marcu-78A265wPiO4-unsplash.jpg',
		excert:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.',
	},
];

export const categories = [
	'travel',
	'local',
	'business',
	'art',
	'photography',
	'download',
	'fashion',
];
