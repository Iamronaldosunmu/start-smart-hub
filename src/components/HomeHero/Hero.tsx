import Container from "../Container";
import TextAnimation from "../TextAnimation";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-evenly gap-x-12 text-center lg:text-start">
			<div className="flex lg:ml-6 items-center justify-center max-w-[500px]">
				<div className="flex flex-col justify-center items-center lg:items-start ">
					<TextAnimation
						className="text-2xl font-medium font-poppins flex gap-x-2"
						text="Our services"
					/>
					<TextAnimation
						className="lg:text-5xl text-2xl text-center lg:text-left lg:font-bold font-semibold relative mb-5 quotation-marked mt-1 lg:leading-[60px] flex gap-x-3 flex-wrap"
						text="At StartSmart, we're all about your goals."
					/>
					<p
						data-aos="fade-up"
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
					src="/assets/hero.png"
					alt=""
					loading="eager"
				/>
			</div>
		</Container>
	);
};

export default Hero;
