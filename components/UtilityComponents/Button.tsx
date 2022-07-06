import React from 'react';

const Button = (props: any) => {
	return (
		<button
			className={`self-start border-2 px-6 py-3 uppercase ${props.className} ${
				props.variant === 'white'
					? 'text-white border-white'
					: 'text-black border-black'
			}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
