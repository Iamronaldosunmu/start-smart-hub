import Container from "../../../components/container";

const Hero = () => {
	return (
		<Container className="flex justify-between">
			<div className="my-auto">
				<div className="relative text-[70px] text-[#331B3B] font-bold leading-[70px] tracking-[-0.7px]">
					Let’s build a path <br /> to career success.
				</div>
				<p className="text-[#494949] text-[15px] font-light mt-2">
					Take that first step! <br /> Every remarkable journey starts with a single stride forward. <br /> At Startsmart, we’re committed to working hand-in-hand with you to pave the way. <br /> We believe in your potential. Go ahead, take the leap! <br /> We’re here to help you on your journey!
				</p>
				<button className="bg-[#4B8CEA] w-[236px] shadow-[0px_2px_4px_0px_#4b8cea4a] text-white mt-5 py-2 rounded-[10px] text-center font-poppins font-semibold uppercase">Book a call</button>
			</div>
			<div className="relative w-[517px] h-[522px]">
				<img
					className="relative z-10 object-cover"
					src="/src/assets/hero.png"
					alt=""
				/>
				<img
					className="absolute left-9 top-4 z-0"
					src="/src/assets/hero_sub.svg"
					alt=""
				/>
			</div>
		</Container>
	);
};

export default Hero;
