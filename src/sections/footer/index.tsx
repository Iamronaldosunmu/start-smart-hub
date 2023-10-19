import { Link } from "react-router-dom";
import Container from "../../components/container";

const Footer = () => {
	const footerItems = [
		[
			{ label: "Home", link: "/" },
			{ label: "About", link: "/about" },
			{ label: "Services", link: "/services" },
			{ label: "Events", link: "/upcoming-events" },
		],
		[
			{ label: "Job application", link: "/job-applications" },
			{ label: "Job search", link: "/job-search" },
		],
		[
			{ label: "Terms and conditions", link: "/terms-and-conditions" },
			{ label: "Contact", link: "/contact" },
		],
	];

	const socials = [
		{
			label: "facebook.svg",
			link: "https://www.facebook.com/profile.php?id=61551682838397&mibextid=LQQJ4d",
		},
		{
			label: "linkedin.svg",
			link: "https://www.linkedin.com/company/startsmart-hub/",
		},
		{
			label: "instagram.svg",
			link: "https://instagram.com/startsmarthub?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr",
		},
	];

	return (
		<section>
			<div className="border-b-[0.5px] border-black sm:mb-20 mb-10 mt-10"></div>
			<Container>
				<footer className="flex flex-row gap-8 lg:mb-16 mb-10 w-full sm:justify-between">
					<div className="flex-shrink-0 w-[36px] h-[29px]">
						<img
							src="/assets/logo.png"
							alt="Logo"
						/>
					</div>
					<div className="flex flex-col items-center w-full lg:w-auto lg:px-20">
						<div className="flex flex-col lg:flex-row lg:gap-7 sm:gap-5 gap-2 justify-between w-full">
							<div className="flex lg:gap-7 sm:gap-5 gap-2 flex-wrap lg:mr-10 justify-between w-full">
								{footerItems.map((footerItem, index) => (
									<ul
										key={index}
										className="lg:leading-7 leading-6 block"
									>
										{footerItem.map((item, index) => (
											<li
												key={index}
												className="block"
											>
												<Link
													to={item.link}
													className="text-[#606060] text-sm whitespace-nowrap"
												>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								))}
							</div>
						</div>
					</div>
					<div className="hidden lg:flex items-center [&>*:not(:last-child)]:mr-10 lg:[&>*:not(:last-child)]:mr-20 justify-center">
						{socials.map((item, index) => (
							<a
								key={index}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="w-7 h-7"
									src={`/assets/${item.label}`}
									alt={item.label}
								/>
							</a>
						))}
					</div>
				</footer>
				<div className="flex mt-5 lg:mt-0 items-center [&>*:not(:last-child)]:mr-10 lg:[&>*:not(:last-child)]:mr-20 justify-center lg:hidden">
					{socials.map((item, index) => (
						<a
							key={index}
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="w-7 h-7"
								src={`/assets/${item.label}`}
								alt={item.label}
							/>
						</a>
					))}
				</div>
				<div className="flex justify-center items-center mb-5 mt-10">
					<p className="text-xs text-center font-inter opacity-50 px-5 text-[#606060]">©2023 Start Smart Hub. All rights reserved</p>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
