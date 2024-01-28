import { motion } from "framer-motion";
import Container from "../../../components/container";
import TextAnimation from "../../../components/TextAnimation";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between [&>*:not(:last-child)]:mr-12 text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start  [&>*:not(:last-child)]:mb-2 lg:max-w-[500px]">
				{/* <TextAnimation
					className="text-2xl font-medium font-poppins flex [&>*:not(:last-child)]:mr-2"
					text="About Us"
				/> */}
				<div
					className="text-2xl font-medium font-poppins flex [&>*:not(:last-child)]:mr-2"
					data-aos="zoom-in"
				>
					About Us
				</div>
				<div className="relative flex flex-wrap [&>*:not(:last-child)]:mr-3 justify-center lg:justify-start text-[38px] md:text-5xl leading-[1.2] xl:text-[54px] font-bold lg:leading-[68px] lg:tracking-[-0.7px] break-words">
					{/* {"How to start? We’ll show you how".split(" ").map((word, index) => (
						<motion.div
							initial={{ y: 45, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
							}}
						>
							{word}
						</motion.div>
					))} */}
					<div
						data-aos="fade-up"
						data-aos-duration="700"
					>
						About Start Smart Hub
					</div>
				</div>
				<p
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="400"
					className="text-[#494949] font-light text-sm md:text-base xl:text-xl leading-6"
				>
					Welcome to StartSmartHub where human resources is not just a function; it's a transformative journey. At the core of our philosophy is a deep commitment to fostering workplaces that inspire, innovate, and thrive. We are more than an HR company; we are your dedicated partners in building a workplace that reflects your values and fuels your success.{" "}
				</p>
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
				/>
			</div>
		</Container>
	);
};

export default Hero;
