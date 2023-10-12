import { motion } from "framer-motion";
import Container from "../../../components/container";
import { child, container } from "../../../utils/framer-default-animations";

const Grid = () => {
	return (
		<div className="grid lg:grid-cols-2 mt-14 lg:mt-[100px]">
			<div className="bg-[#FFF2EC] py-14 xl:pl-[calc((100vw-1280px)/2)]">
				<Container>
					<div className="flex gap-x-2 flex-wrap mb-8 text-3xl font-semibold font-DMSans">
						{"Here's what you can expect from us...".split(" ").map((word, index) => (
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
					<motion.ul
						variants={container}
						initial="hidden"
						animate="show"
						className="text-sm md:text-base leading-6 list-disc [&>*]:mb-1 [&>*]:ml-5 font-poppins"
					>
						<motion.li variants={child}>Personalized guidance, empathy and support</motion.li>
						<motion.li variants={child}>Expertise and insights</motion.li>
						<motion.li variants={child}>Transparent communication</motion.li>
						<motion.li variants={child}>collaboration</motion.li>
						<motion.li variants={child}>Inclusivity</motion.li>
						<motion.li variants={child}>Continous improvement and empowerment</motion.li>
					</motion.ul>
				</Container>
			</div>
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
				className="w-full h-[585px] hidden lg:block"
			>
				<img
					src="/assets/img1.png"
					className="w-full h-full object-cover"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Grid;
