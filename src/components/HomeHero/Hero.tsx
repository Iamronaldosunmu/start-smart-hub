import Container from "../Container";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-evenly gap-x-12 text-center lg:text-start">
			<div className="flex lg:ml-6 items-center justify-center max-w-[500px]">
				<div className="flex flex-col justify-center items-center lg:items-start ">
					<h2 className="text-2xl font-medium font-poppins">Our services</h2>
					<p className="lg:text-5xl text-2xl text-center lg:text-left lg:font-bold font-semibold relative mb-5 quotation-marked mt-1 lg:leading-[60px]">At StartSmart, we're all about your goals.</p>
					<p className="text-base tracking-normal text-center lg:text-left mb-6 text-[#606060]">No matter what stage you are in your career, I’ve got the strategy to help you unlock that next level of success.</p>
				</div>
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
