import { Link } from "react-router-dom";

const Footer = () => {
	const footerItems = [
		[
			{ label: "Home", link: "/" },
			{ label: "About", link: "/about" },
			{ label: "Services", link: "/services" },
			{ label: "Events", link: "/upcoming-events" },
		],
		// [
		// 	{ label: "Job application", link: "/job-applications" },
		// 	{ label: "Job search", link: "/job-search" },
		// ],
		[
			{ label: "Terms and conditions", link: "/terms-and-conditions" },
			{ label: "Contact", link: "/contact-us" },
		],
	];

	return (
		<div className="">
			<div className="border border-gray-300 sm:mb-20 mb-10"></div>
			<footer className="flex flex-row gap-8 lg:px-20 sm:px-10 px-2 lg:mb-16 mb-10 w-full sm:justify-between">
				<div className=" mb-3 flex-shrink-0">
					<img
						src="/src/assets/mobile-icon.png"
						className="justify-end "
						alt=""
					/>
				</div>
				<div className="flex flex-col items-center w-full lg:w-auto lg:px-20">
					<div className="flex flex-col lg:flex-row  lg:gap-7 sm:gap-5 gap-2  justify-between w-full">
						<div className="flex lg:[&>*:not(:last-child)]:mr-7 sm:[&>*:not(:last-child)]:mr-5 [&>*:not(:last-child)]:mr-2 flex-wrap lg:mr-10 justify-between w-full">
							{footerItems.map((footerItem) => (
								<ul className="lg:leading-7 leading-6 block">
									{footerItem.map((item, index) => (
										<li className="block">
											<Link
												to={item.link}
												className="hover:text-[#606060] text-xs whitespace-nowrap"
												key={index}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							))}
						</div>
						<div className="flex mt-5 lg:mt-0  items-start  justify-center">
							<Link
								to=""
								className="flex-shrink-0"
							>
								<img
									src="/src/assets/facebook.png"
									alt=""
								/>
							</Link>
							<Link
								to=""
								className="flex-shrink-0"
							>
								<img
									src="/src/assets/twitter.png"
									alt=""
								/>
							</Link>
							<Link
								to=""
								className="flex-shrink-0"
							>
								<img
									src="/src/assets/youtube.png"
									alt=""
								/>
							</Link>
							<Link
								to=""
								className="flex-shrink-0"
							>
								<img
									src="/src/assets/instagram.svg"
									alt=""
								/>
							</Link>
						</div>
					</div>
				</div>
			</footer>
			<div className="flex justify-center items-center mb-5">
				<p className="text-xs text-center px-5 text-gray-500">©2023 Start Smart Hub. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
