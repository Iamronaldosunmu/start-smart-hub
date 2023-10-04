import { Link } from "react-router-dom";
import Container from "../../../components/container";

const MeetTheFounder = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-center gap-x-[112px] mt-14 lg:mt-[100px]">
			<img
				className="relative z-10 object-cover hidden lg:block"
				src="/assets/hero.png"
				alt=""
			/>
			<div className="flex flex-col items-center gap-y-6 lg:max-w-[504px]">
				<h2 className="text-[44px] lg:text-[48px] text-[#331B3B] font-bold leading-[51px] tracking-tight lg:tracking-[-0.03em] text-left sm:text-center lg:self-start">
					Meet the founder <br /> <div className="font-light text-center lg:text-left w-full">Doyin Adetona</div>
				</h2>
				<div className="mt-8 lg:mt-0">
					<p className="text-[#331B3BA8] leading-5 lg:leading-6 tracking-wide">Hi, I’m Doyin, and I’m truly delighted to welcome you! Not too long ago, I walked the same path you’re on now- a journey in search of not only the right career but also the best way to embark on that journey.</p>
					<p className="text-[#331B3BA8] leading-5 lg:leading-6 tracking-wide mt-6">Today my sole focus is partnering with you on this transformative expedition toward achieving your dream career. Together, we’ll take that all-important first step, and I’ll be here to provide unwavering support every step of the way!</p>
				</div>
				<Link
					to=""
					className="text-[13px] font-bold font-inter tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center"
				>
					Read My Story
				</Link>
				<div className="relative max-w-[353px] max-h-[358px] shrink block lg:hidden mt-12">
					<img
						className="relative z-10 object-cover"
						src="/assets/hero.png"
						alt=""
					/>
				</div>
			</div>
		</Container>
	);
};

export default MeetTheFounder;
