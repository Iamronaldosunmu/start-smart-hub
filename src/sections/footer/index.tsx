import { Link } from "react-router-dom";
import Container from "../../components/container";
const Footer = () => {
	return (
		<section className="">
			<Container className="flex items-start justify-center gap-x-8 mt-14 py-[18px] px-">
				<div className="w-9 h-10 ">
					<img
						src="/assets/logo.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-y-3">
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Home
					</Link>
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						About
					</Link>
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Services
					</Link>
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Events
					</Link>
				</div>
				<div className="flex flex-col gap-y-3">
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Job application
					</Link>
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Job Search
					</Link>
				</div>
				<div className="flex flex-col gap-y-3">
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Terms and conditions
					</Link>
					<Link
						to=""
						className="text-xs text-[#606060]"
					>
						Contact
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default Footer;
