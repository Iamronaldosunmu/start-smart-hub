import { motion } from "framer-motion";
import Container from "../../../components/container";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import { useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<Container className="flex flex-col lg:flex-row items-center justify-between  text-center lg:text-start">
			<div className="flex flex-col justify-center items-center lg:items-start  [&>*:not(:last-child)]:mb-[18px] max-w-[600px] ">
				<div
					className="text-2xl font-medium font-poppins text-[#331B3B]  flex [&>*:not(:last-child)]:mr-2"
					data-aos="zoom-in"
				>
					Welcome to Start Smart Hub
				</div>
				<div className="relative text-[46px] md:text-[54px] leading-[1.2] lg:text-[62px] xl:text-[70px] text-[#331B3B] font-bold lg:leading-[70px] lg:tracking-[-0.7px] break-words flex flex-wrap [&>*:not(:last-child)]:mr-3 justify-center lg:justify-start">
					{"Your Partner in HR Excellence".split(" ").map((word, index) => (
						<motion.div
							key={index}
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
					At StartSmartHub, we redefine Human Resources by offering a suite of comprehensive services designed to empower your organization. With a commitment to Diversity, Equity, and Inclusion (DEI), strategic consulting, recruitment services, program management and coaching consulting, we are your trusted ally in building a thriving workplace.
				</p>
				{/* <motion.button
					{...interactionAnimations}
					onClick={() => navigate("/services?scroll_to=services")}
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="1200"
					className="bg-[#4B8CEA] w-full shadow-[0px_2px_4px_0px_#4b8cea4a] text-white py-2 max-w-[200px] rounded-[10px] font-poppins font-medium leading-6"
				>
					Book a Call
				</motion.button> */}
				<button
					onClick={() => navigate("/contact-us")}
					className=" flex leading-7 py-2 px-8 justify-center shadow-[0px_2px_4px_0px_#4b8cea4a] text-white bg-[#4B8CEA] font-medium  rounded-[10px] cursor-pointer"
				>
					Contact us
				</button>
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
