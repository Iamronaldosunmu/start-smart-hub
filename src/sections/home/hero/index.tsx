import Container from "../../../components/container";

const Hero = () => {
	return (
		<Container className="flex flex-col md:flex-row justify-between items-center">
			<div className="flex flex-col justify-center items-center gap-y-[18px]">
				<div className="relative text-[54px] leading-normal lg:text-[70px] text-black lg:text-[#331B3B] font-bold lg:leading-[70px] lg:tracking-[-0.7px]">
					Let’s build a path <br className="hidden lg:block" /> to career success.
				</div>
				<p className="text-[#494949] text-[14px] font-light lg:mt-2 leading-[19px]">Startsmart is a supportive organization that encourages individuals to take the first step in their personal journeys, believing in their potential and offering guidance along the way.</p>
				<button className="bg-[#4B8CEA] px-[84px] shadow-[0px_2px_4px_0px_#4b8cea4a] text-white py-[10px] rounded-[10px] text-center font-poppins font-semibold uppercase">Book a call</button>
			</div>
			<div className="relative w-[352px] h-[355px] lg:w-[517px] lg:h-[522px] mt-14 lg:mt-0">
				<img
					className="relative z-10 object-cover"
					src="/assets/hero.png"
					alt=""
				/>
			</div>
		</Container>
	);
};

export default Hero;
