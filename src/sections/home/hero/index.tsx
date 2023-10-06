import Container from "../../../components/container";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-center gap-x-12 text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start gap-y-[18px] max-w-[600px]">
				<div className="relative text-[54px] leading-[1.2] lg:text-[62px] xl:text-[70px] text-[#331B3B] font-bold lg:leading-[70px] lg:tracking-[-0.7px] break-words">
					Let’s build a path <br className="block" /> to career success.
				</div>
				<p className="text-[#494949] font-light leading-6 w-[90%]">Startsmart is a supportive organization that encourages individuals to take the first step in their personal journeys, believing in their potential and offering guidance along the way.</p>
				<button className="bg-[#4B8CEA] w-full shadow-[0px_2px_4px_0px_#4b8cea4a] text-white py-2 max-w-[200px] rounded-[10px] font-poppins font-medium leading-6">Book a Call</button>
			</div>
			<div className="flex shrink mt-[50px] sm:mt-20 lg:mt-0 max-w-[352px] lg:max-w-[450px] w-full">
				<img
					className="relative z-10 object-cover w-full h-full"
					src="/assets/hero.png"
					alt=""
				/>
			</div>
		</Container>
	);
};

export default Hero;
