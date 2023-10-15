import Container from "../container";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between gap-x-12 text-center lg:text-start">
			<div className="flex lg:ml-6 items-center justify-center max-w-[500px]">
				<div className="flex flex-col justify-center items-center lg:items-start ">
					<div
						data-aos-duration="700"
						data-aos="zoom-in"
						data-aos-delay="700"
						className="text-2xl font-medium font-poppins flex gap-x-2"
					>Our services</div>
					<div
						data-aos-duration="700"
						data-aos="zoom-in"
						data-aos-delay="700"
						className="lg:text-5xl text-2xl text-center lg:text-left lg:font-bold font-semibold relative mb-5  mt-1 lg:leading-[60px] flex gap-x-3 flex-wrap"
					>"At StartSmart, we're all about your goals."</div>
					<p
						data-aos="zoom-in"
						data-aos-duration="700"
						data-aos-delay="700"
						className="text-base tracking-normal text-center lg:text-left mb-6 text-[#606060]"
					>
						No matter what stage you are in your career, I’ve got the strategy to help you unlock that next level of success.
					</p>
				</div>
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
				data-aos-delay="800"
				className="flex shrink mt-10 lg:mt-0 max-w-[352px] xl:max-w-[450px] w-full"
			>
				<img
					className="relative z-10 object-cover w-full h-full"
					src="/assets/doyin.png"
					alt=""
					loading="eager"
				/>
			</div>
		</Container>
	);
};

export default Hero;
