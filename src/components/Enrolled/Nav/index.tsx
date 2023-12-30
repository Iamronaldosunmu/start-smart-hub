import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav className="bg-white fixed z-50 top-0 w-full hidden lg:block font-poppins border border-r-0 border-[#d7dadb]">
				<div className="hidden lg:flex items-center justify-between h-[64px]">
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
			</nav>
		</>
	);
};

export default Nav;
