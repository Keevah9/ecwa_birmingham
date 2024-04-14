import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// interface MenuGroupProps{
// 	class?: string;
// }
function MenuGroup(props: any) {
	const [isHovered, setIsHovered] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = () => {
			setIsHovered(false);
		};
			router.events.on('routeChangeStart', handleRouteChange);
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [router.events]);
	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<li
			className="group py-5 inline-block"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
		>
			{props.mainLink ? (
				<Link href={props.mainLink} title={props.label}>
					<a 
						className={`inline-flex cursor-pointer items-center px-2 font-barlow text-[16px] font-medium lg:px-1 xl:px-2 capitalize text-black lg:text-[15px] xl:text-[16px] 2xl:text-[17px]`}
					>
						<span>{props.label}</span>
					</a>
				</Link>
		
			) : (
				
				<span 
					className={`inline-flex cursor-pointer items-center px-2 font-barlow text-[16px] font-medium capitalize text-black lg:px-1 xl:px-2 lg:text-[15px] xl:text-[16px] 2xl:text-[17px] `}
				>
					<span>{props.label}</span>
				</span>
				
			)}
			{props.children && <div className={` ${isHovered ? 'block' : 'hidden'} `}>
				{props.children}
			</div>}
			
		
		</li>
	);
}
export default MenuGroup;