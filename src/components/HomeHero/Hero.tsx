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
					<div className="relative flex flex-wrap [&>*:not(:last-child)]:mr-3 justify-center lg:justify-start text-[38px] md:text-5xl leading-[1.2] xl:text-[54px] font-bold lg:leading-[68px] lg:tracking-[-0.7px] break-words">
						<div
							data-aos="fade-up"
							data-aos-duration="700"
						>
							Transformative solutions, Start Smart Hub services
						</div>
					</div>
					<p
						data-aos="zoom-in"
						data-aos-duration="700"
						data-aos-delay="700"
						className="tracking-normal  text-center lg:text-left mb-6  text-[#494949] font-light text-sm md:text-base xl:text-xl leading-6"
					>
						Welcome to StartSmartHub, where we bring a fresh and strategic approach to human resources. Our comprehensive services are designed to elevate your organization, foster inclusivity, and drive sustainable growth. Explore how our tailored solutions can make a difference in your workplace.
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
