import { motion } from "framer-motion";
import Container from "../../../components/container";
import TextAnimation from "../../../components/TextAnimation";

const Hero = () => {
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-evenly gap-x-12 text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start gap-y-2 lg:max-w-[500px]">
				<TextAnimation
					className="text-2xl font-medium font-poppins flex gap-x-2"
					text="About Us"
				/>
				<div className="relative flex flex-wrap gap-x-3 justify-center lg:justify-start text-[38px] md:text-5xl leading-[1.2] xl:text-[54px] font-bold lg:leading-[68px] lg:tracking-[-0.7px] break-words">
					{"How to start? We’ll show you how".split(" ").map((word, index) => (
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
					))}
				</div>
				<p
					data-aos="fade-up"
					data-aos-duration="700"
					className="text-[#494949] font-light text-sm md:text-base xl:text-xl leading-6"
				>
					At StartSmart, we are more than just your coaches; we’re your dedicated partners in success.{" "}
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
