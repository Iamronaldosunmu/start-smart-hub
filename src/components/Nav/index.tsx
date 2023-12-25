/* eslint-disable no-mixed-spaces-and-tabs */
import { easeIn, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { useCookies } from "react-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../container";

const Nav = () => {
	const [cookies, , removeCookie] = useCookies(["auth"]);

	const navItems = [
		{ text: "Home", path: "/home" },
		{ text: "About", path: "/about-us" },
		{ text: "Services", path: "/services" },
		{ text: "Courses", path: "/courses" },
		{ text: "Events", path: "/upcoming-events" },
		{ text: "Contact", path: "/contact-us" },
	];

	const enrolledNavItems = [
		{ text: "Home", path: "/home" },
		{ text: "About", path: "/about-us" },
		{ text: "Services", path: "/services" },
		{ text: "All Courses", path: "/courses" },
		{ text: "My Courses", path: "/courses/enrolled" },
		{ text: "Events", path: "/upcoming-events" },
		// { text: "Contact", path: "/contact-us" },
	];

	const currentNavItems = cookies?.auth ? enrolledNavItems : navItems;

	const [scrolled, setScrolled] = useState(false);

	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		window.onscroll = function () {
			if (window.scrollY > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
	}, []);

	const { pathname } = useLocation();

	return (
		<>
			<nav className={`bg-white fixed z-50 top-0 w-full hidden lg:block ${scrolled ? "shadow-md" : "shadow-none"} transition-shadow duration-300`}>
				<Container className="hidden lg:flex items-center justify-between h-[64px]">
					<div className="flex gap-x-2 items-center">
						<img
							src="/assets/logo.png"
							alt=""
						/>
						<img
							src="/assets/logo-name.svg"
							alt=""
						/>
					</div>
					<div className="flex items-center gap-x-6">
						<div className="flex gap-x-6 font-mulish">
							{currentNavItems.map((item, index) => (
								<Link
									key={index}
									to={item.path}
									className="xl:text-lg cursor-pointer font-medium text-[#1A202C]"
								>
									{item.text}
								</Link>
							))}
						</div>{" "}
						{/* <motion.button
							onClick={() => navigate("/services?scroll_to=services")}
							{...interactionAnimations}
							className=" leading-7 py-2 px-5 text-white bg-[#4B8CEA] rounded-[10px] font-medium shadow-[0px_2px_4px_0px_#4b8cea4a]"
						>
							Book a Call
						</motion.button> */}
						{pathname.includes("/courses") ? (
							<button
								onClick={() => {
									if (!cookies?.auth) navigate("/sign-in");
									else {
										removeCookie("auth");
										navigate("/courses");
									}
								}}
								className="flex leading-7 py-2 px-8 justify-center shadow-[0px_2px_4px_0px_#4b8cea4a] text-white bg-[#4B8CEA] font-medium  rounded-[10px] cursor-pointer"
							>
								{cookies?.auth ? "Logout" : "Login"}
							</button>
						) : (
							<PopupButton
								url="https://calendly.com/startsmarthub?hide_gdpr_banner=1"
								rootElement={document.getElementById("root") as HTMLElement}
								text="Book a call"
								className="flex leading-7 py-2 px-8 justify-center shadow-[0px_2px_4px_0px_#4b8cea4a] text-white bg-[#4B8CEA] font-medium rounded-[10px] cursor-pointer"
							/>
						)}
					</div>
				</Container>
			</nav>
			<motion.nav
				initial={{ opacity: 0, height: 48 }}
				animate={mobileNavOpen ? { height: "100%", opacity: 1, transition: { duration: 0.3, ease: easeIn, opacity: { duration: 0.3 } } } : { opacity: 1, transition: { delay: 0.5, opacity: { duration: 0.3 } } }}
				className={`lg:hidden block bg-white fixed z-50 top-0 w-full ${scrolled ? "shadow-md" : "shadow-none"} transition-shadow duration-300`}
			>
				<Container className="flex lg:hidden justify-between items-center h-12">
					<img
						className="w-[36px] h-10 object-cover"
						src="/assets/logo.png"
						alt=""
					/>
					<motion.div
						// whileTap={{ scale: 0.85 }}
						className="mobile-nav lg:hidden flex cursor-pointer"
						onClick={() => setMobileNavOpen(!mobileNavOpen)}
					>
						<motion.div
							animate={mobileNavOpen ? { rotateZ: 45, y: 4, transition: { duration: 0.2 } } : {}}
							className="nav-rect"
						></motion.div>
						<motion.div
							animate={mobileNavOpen ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 1, transition: { delay: 0.3 } }}
							className="nav-rect"
						></motion.div>
						<motion.div
							animate={mobileNavOpen ? { rotateZ: -45, y: -5, transition: { duration: 0.2 } } : {}}
							className="nav-rect"
						></motion.div>
					</motion.div>
				</Container>
				<motion.div
					animate={{ height: mobileNavOpen ? "100%" : 0 }}
					style={{ paddingBottom: mobileNavOpen ? 30 : 0 }}
					className="w-full h-full lg:hidden overflow-hidden py-[20px] z-40 px-[20px] md:px-[40px] text-[38px] font-poppins font-semibold flex flex-col gap-y-4"
				>
					{currentNavItems.map((item, index: number) => (
						<motion.div
							key={index}
							onClick={() => {
								navigate(item.path as string);
								setMobileNavOpen(false);
							}}
							initial={{ y: 45, opacity: 0 }}
							animate={
								mobileNavOpen
									? {
											y: 0,
											opacity: 1,
											transition: { duration: 0.4, delay: 0.9 + index * 0.1 },
									  }
									: { y: 45, transition: { duration: 0.3 } }
							}
						>
							{item.text}
						</motion.div>
					))}
					<motion.div
						onClick={() => setMobileNavOpen(false)}
						className="w-[150px] py-2 px-4 text-center text-white bg-[#4B8CEA] font-medium rounded-[10px] cursor-pointer text-lg"
						initial={{ y: 45, opacity: 0 }}
						animate={
							mobileNavOpen
								? {
										y: 0,
										opacity: 1,
										transition: { duration: 0.4, delay: 0.9 + 0.7 },
								  }
								: { y: 45, transition: { duration: 0.3 } }
						}
					>
						{pathname.includes("/courses") ? (
							<button
								onClick={() => {
									if (!cookies?.auth) navigate("/sign-in");
									else {
										removeCookie("auth");
										navigate("/courses");
									}
								}}
								className="w-full h-full"
							>
								{cookies?.auth ? "Logout" : "Login"}
							</button>
						) : (
							<PopupButton
								url="https://calendly.com/startsmarthub?hide_gdpr_banner=1"
								rootElement={document.getElementById("root") as HTMLElement}
								text="Book a call"
								className="w-full h-full"
							/>
						)}
					</motion.div>
				</motion.div>
			</motion.nav>
		</>
	);
};

export default Nav;
