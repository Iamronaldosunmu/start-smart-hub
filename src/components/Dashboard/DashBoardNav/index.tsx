import { Dispatch, FC, SetStateAction } from "react";
import { PageType } from "../../../pages/Dashboard";

interface Props {
	page: string;
	setPage: Dispatch<SetStateAction<PageType>>;
}

const navItems: PageType[] = ["Edit Profile", "Purchase History"];

const DashBoardNav: FC<Props> = ({ page, setPage }) => {
	return (
		<nav className="hidden md:flex flex-col pt-8 gap-y-3 bg-[#f7f7f7] h-[calc(100vh-64px)] overflow-hidden border-r border-[#d7dadb] text-[#4D4D4D] font-inter">
			{navItems.map((title) => (
				<button
					onClick={() => setPage(title)}
					className={`text-lg border-black py-3 px-5 ${page === title ? "bg-white font-extrabold border-l-2" : ""} text-left`}
				>
					{title}
				</button>
			))}
		</nav>
	);
};

export default DashBoardNav;
