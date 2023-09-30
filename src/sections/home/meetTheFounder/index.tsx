import { Link } from "react-router-dom";
import Container from "../../../components/container";

const MeetTheFounder = () => {
	return (
		<Container className="flex justify-center gap-x-[112px] mt-[100px]">
			<div className="relative w-[517px] h-[522px]">
				<img
					className="relative z-10 object-cover"
					src="/src/assets/hero.png"
					alt=""
				/>
			</div>
			<div className="flex flex-col gap-y-5 max-w-[504px]">
				<h2 className="text-[48px] text-[#331B3B] font-bold leading-[51px] tracking-[-0.48px]">
					Meet the founder <br /> <span className="font-light">Doyin Adetona</span>
				</h2>
				<p className="text-[#331B3BA8] leading-6 tracking-wide">Hi, I’m Doyin, and I’m truly delighted to welcome you! Not too long ago, I walked the same path you’re on now- a journey in search of not only the right career but also the best way to embark on that journey.</p>
				<p className="text-[#331B3BA8] leading-6 tracking-wide">Today my sole focus is partnering with you on this transformative expedition toward achieving your dream career. Together, we’ll take that all-important first step, and I’ll be here to provide unwavering support every step of the way!</p>
				<Link
					to=""
					className="text-[13px] font-bold font-inter tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center"
				>
					Read My Story
				</Link>
			</div>
		</Container>
	);
};

export default MeetTheFounder;
