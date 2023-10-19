import Container from "../container";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between [&>*:not(:last-child)]:mr-12 text-center lg:text-start">
			<div className="flex lg:ml-6 items-center justify-center max-w-[500px]">
				<div className="flex flex-col justify-center items-center lg:items-start ">
					<div
						data-aos-duration="700"
						data-aos="zoom-in"
						data-aos-delay="700"
						className="text-2xl font-medium flex [&>*:not(:last-child)]:mr-2"
					>
						Our services
					</div>
					<div
						data-aos-duration="700"
						data-aos="zoom-in"
						data-aos-delay="700"
						className="lg:text-5xl text-2xl text-center lg:text-left lg:font-bold font-semibold relative mb-5  mt-1 lg:leading-[60px] flex [&>*:not(:last-child)]:mr-3 flex-wrap"
					>
						"At StartSmart, we're all about your goals."
					</div>
					<p
						data-aos="zoom-in"
						data-aos-duration="700"
						data-aos-delay="700"
						className="tracking-normal  text-center lg:text-left mb-6  text-[#494949] font-light text-sm md:text-base xl:text-xl leading-6"
					>
						No matter what stage you are in your career, I've got the strategy to help you unlock the next level of success
					</p>
				</div>
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
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
