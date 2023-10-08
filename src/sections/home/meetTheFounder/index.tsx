import { Link } from "react-router-dom";
import Container from "../../../components/container";
import TextAnimation from "../../../components/TextAnimation";

const MeetTheFounder = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between gap-x-[112px] mt-14 lg:mt-[100px]">
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
				// data-aos-delay="1000"
				className="relative max-w-[353px] lg:max-w-[450px] w-full shrink hidden lg:block"
			>
				<img
					className="relative z-10 object-cover w-full h-full"
					src="/assets/hero.png"
					alt=""
				/>
			</div>
			<div className="flex flex-col items-center lg:items-start lg:max-w-[504px]">
				<h2 className="text-[44px] lg:text-[48px] text-[#331B3B] font-bold leading-[51px] tracking-tight lg:tracking-[-0.03em]">
					<TextAnimation
						className="w-full text-center lg:text-start flex flex-wrap gap-x-[10px]"
						text="Meet the founder"
					/>
					<TextAnimation
						className="font-light w-full text-center lg:text-start flex flex-wrap gap-x-[10px]"
						text="Doyin Adetona"
					/>
				</h2>
				<div className="mt-10 sm:mt-6">
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="1000"
						className="text-[#331B3BA8] leading-5 lg:leading-6 tracking-wide"
					>
						Hi, I’m Doyin, and I’m truly delighted to welcome you! Not too long ago, I walked the same path you’re on now- a journey in search of not only the right career but also the best way to embark on that journey.
					</p>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="1200"
						className="text-[#331B3BA8] leading-5 lg:leading-6 tracking-wide mt-6"
					>
						Today my sole focus is partnering with you on this transformative expedition toward achieving your dream career. Together, we’ll take that all-important first step, and I’ll be here to provide unwavering support every step of the way!
					</p>
				</div>
				<Link
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="1300"
					to=""
					className="text-[13px] font-bold font-poppins tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center mt-6 focus:bg-black focus:text-white transition-colors duration-500"
				>
					Read My Story
				</Link>
				<div className="relative max-w-[353px] max-h-[358px] shrink block lg:hidden mt-12">
					<img
						data-aos="zoom-in"
						data-aos-duration="700"
						data-aos-delay="1000"
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
