import { motion } from "framer-motion";
import Container from "../../../components/container";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const { navigate } = useNavigate();
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between gap-x-12 text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start gap-y-[18px] max-w-[600px]">
				<div className="relative text-[54px] leading-[1.2] lg:text-[62px] xl:text-[70px] text-[#331B3B] font-bold lg:leading-[70px] lg:tracking-[-0.7px] break-words flex flex-wrap gap-x-3 justify-center lg:justify-start">
					{"Let’s build a path to career success.".split(" ").map((word, index) => (
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
					data-aos-delay="1000"
					className="text-[#494949] font-light leading-6 w-[90%]"
				>
					Take that first step! Every remarkable journey starts with a single stride forward. At Startsmart, we’re dedicated to working hand-in-hand with you to pave the way. We believe in your potential. Go ahead, take the leap! We’re here to show you the way.
				</p>
				<motion.button
					{...interactionAnimations}
					onClick={() => navigate("/services")}
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="1200"
					className="bg-[#4B8CEA] w-full shadow-[0px_2px_4px_0px_#4b8cea4a] text-white py-2 max-w-[200px] rounded-[10px] font-poppins font-medium leading-6"
				>
					Book a Call
				</motion.button>
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
				data-aos-delay="1500"
				className="flex shrink mt-[50px] sm:mt-20 lg:mt-0 max-w-[352px] lg:max-w-[450px] w-full"
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
