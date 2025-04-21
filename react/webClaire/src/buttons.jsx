export const ButtonLike = () => {
	return (
		<button className='like-button button' >
			<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
				<path d="m7.24264069 2.24264069c.5-2.5 4.34314571-2.65685425 6.00000001-1 1.6034073 1.60340734 1.4999617 4.3343931 0 6l-6.00000001 6.00000001-6-6.00000001c-1.65685425-1.65685425-1.65685425-4.34314575 0-6 1.54996042-1.54996043 5.5-1.5 6 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3.257 4.257)" />
			</svg>
		</button>
	);
};

export const ButtonComment = () => {
	return (
		<button className='comm-button button'>
			<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(2 3)"><path d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="m8.49884033 8.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm7.99999997 0c.5 0 1-.5 1-1s-.5-1-1-1-.9988403.5-.9988403 1 .4988403 1 .9988403 1z" fill="currentColor" /></g></svg>
		</button>
	);
};

export const ButtonUser = () => {
	return (
		<button className='user-button button'>
			<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinejoin="round" transform="translate(3 2)"><path d="m8.5 2.5 2 2v1c0 1.65685425-1.34314575 3-3 3-1.59768088 0-2.90366088-1.24891996-2.99490731-2.82372721l-.00509269-1.17627279z" stroke-linecap="round" /><path d="m2.5 10v-4.5c0-2.76142375 2.23857625-5 5-5 2.7614237 0 5 2.23857625 5 5v4.5" /><path d="m14.5 14.5v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" stroke-linecap="round" /></g></svg>
		</button>
	);
};
