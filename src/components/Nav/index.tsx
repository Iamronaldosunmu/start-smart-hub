import { NavLink } from "react-router-dom";
import Container from "../container";

const Nav = () => {
	const navItems = [
		{ text: "Home", path: "" },
		{ text: "About", path: "" },
		{ text: "Services", path: "" },
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
				<div className="flex justify-between gap-x-14">
					{navItems.map((item, index) => (
						<NavLink
							key={index}
							className="mx-3"
							to={item.path}
						>
							{({ isActive }) => (
								<>
									<span className="font-semibold text-base px-1 text-[#171717]">{item.text}</span>
									<div className={`bg-[#F29176] ${isActive ? "w-full" : "w-0"} h-1 rounded-lg transition-all duration-500`}></div>
								</>
							)}
						</NavLink>
					))}
				</div>
				<button className="py-2 px-6 bg-[#FFA077] text-[#171717] rounded-[10px] font-medium">Book a Call</button>
			</Container>
			<Container className="flex lg:hidden justify-between h-10 items-center">
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
