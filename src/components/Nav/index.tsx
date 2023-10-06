import { Link } from "react-router-dom";
import Container from "../container";

const Nav = () => {
	const navItems = [
		{ text: "Home", path: "/home" },
		{ text: "About", path: "/about-us" },
		{ text: "Services", path: "/services" },
		{ text: "Events", path: "" },
		{ text: "Contact", path: "" },
	];
	return (
		<nav className="bg-white fixed z-50 top-0 w-full">
			<Container className="hidden lg:flex h-[72px] items-center justify-between">
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
						{navItems.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								className="xl:text-lg cursor-pointer font-medium text-[#1A202C]"
							>
								{item.text}
							</Link>
						))}
					</div>
					<button className=" leading-7 py-2 px-5 text-white bg-[#4B8CEA] rounded-[10px] font-medium shadow-[0px_2px_4px_0px_#4b8cea4a]">Book a Call</button>
				</div>
			</Container>
			<Container className="flex lg:hidden justify-between h-12 items-center">
				<img
					className="w-[36px] h-10 object-cover"
					src="/assets/logo.png"
					alt=""
				/>
				<div className="mobile-nav lg:hidden flex">
					<div className="nav-rect"></div>
					<div className="nav-rect"></div>
					<div className="nav-rect"></div>
				</div>
			</Container>
		</nav>
	);
};

export default Nav;
