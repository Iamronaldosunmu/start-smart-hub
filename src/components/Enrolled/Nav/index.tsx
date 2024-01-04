import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCourseNavStore from "../../../store/courseNav";

const Nav = () => {
	const { mobileNavOpen, setMobileNavOpen } = useCourseNavStore();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 30) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<nav className={`bg-white fixed z-50 top-0 w-full font-poppins ${scrolled ? "shadow-2xl" : "shadow-none"} transition-shadow duration-300`}>
			<div className="hidden lg:flex items-center justify-between h-[64px] border-b border-r-0 border-[#d7dadb]">
				<div className="flex w-full max-w-[350px] items-center justify-between px-4 border-r border-[#d7dadb] h-full">
					<Link
						to="/courses/enrolled"
						className="cursor-pointer"
					>
						<img
							className="w-6 h-6 object-cover"
							src="/assets/home.svg"
							alt=""
						/>
					</Link>
					<Link
						to="/courses/enrolled"
						className="cursor-pointer"
					>
						<img
							className="w-6 h-6 object-cover"
							src="/assets/settings.svg"
							alt=""
						/>
					</Link>
				</div>
				<div className="flex items-center gap-x-6 pr-4">
					<button className="flex gap-x-1 items-center font-semibold justify-center rounded-lg bg-[#7F6362] text-white pr-4 pl-2 py-[10px]">
						<img
							className="w-6 h-6"
							src="/assets/chevron-right.svg"
							alt=""
						/>
						<span className="text-sm">Previous Lesson</span>
					</button>
					<button className="flex gap-x-1 items-center font-semibold justify-center rounded-lg bg-[#007aff] text-white pr-4 pl-2 py-[10px]">
						<img
							className="w-6 h-6"
							src="/assets/chevron-right.svg"
							alt=""
						/>
						<span className="text-sm">Complete and Continue</span>
					</button>
				</div>
			</div>
			<div className="flex items-center justify-between lg:hidden w-full h-[56px] border-b border-r-0 border-[#d7dadb]">
				<div className="flex items-center">
					<Link
						to="/courses/enrolled"
						className="cursor-pointer border-r py-4 px-3 sm:px-4 border-[#d7dadb]"
					>
						<img
							className="w-6 h-6 object-cover"
							src="/assets/home.svg"
							alt=""
						/>
					</Link>
					<Link
						to="/enrolled/profile"
						className="cursor-pointer border-r py-4 px-3 sm:px-4 border-[#d7dadb]"
					>
						<img
							className="w-6 h-6 object-cover"
							src="/assets/settings.svg"
							alt=""
						/>
					</Link>
					<motion.div
						whileTap={{ scale: 0.85 }}
						className="mobile-nav lg:hidden flex cursor-pointer ml-3"
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
				</div>
				<div className="flex items-center gap-x-2 pr-3">
					<button className="flex items-center font-semibold py-2 px-5 sm:px-6 justify-center rounded-md bg-[#7F6362] text-white">
						<img
							className="w-5 h-5"
							src="/assets/chevron-right.svg"
							alt=""
						/>
					</button>
					<button className="flex items-center font-semibold py-2 px-5 sm:px-6 justify-center rounded-md bg-[#007aff] text-white">
						<img
							className="w-5 h-5"
							src="/assets/chevron-right.svg"
							alt=""
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
