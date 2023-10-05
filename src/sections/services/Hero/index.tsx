import Container from "../../../components/Container";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-evenly gap-x-12 text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start gap-y-2 lg:max-w-[500px]">
				<h2 className="text-2xl font-medium font-poppins">About Us</h2>
				<div className="relative text-[38px] md:text-5xl leading-[1.2] xl:text-[54px] font-bold lg:leading-[68px] lg:tracking-[-0.7px] break-words">
					How to start? <br className="block" /> We’ll show you how
				</div>
				<p className="text-[#494949] font-light text-sm md:text-base xl:text-xl leading-6">At StartSmart, we are more than just your coaches; we’re your dedicated partners in success. </p>
			</div>
			<div className="flex shrink mt-10 lg:mt-0 max-w-[352px] xl:max-w-[450px] w-full">
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
