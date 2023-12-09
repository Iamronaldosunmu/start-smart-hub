import { motion } from "framer-motion";
import Container from "../../../components/container";

const Grid = () => {
	const expectations = ["Personalized guidance, empathy and support", "Expertise and insights", "Transparent communication", "Collaboration", "Inclusivity", "Continous improvement and empowerment"];
	return (
		<div className="grid lg:grid-cols-2 mt-14 lg:mt-[100px]">
			<div className="bg-[#FFF2EC] py-14 xl:pl-[calc((100vw-1280px)/2)]">
				<Container>
					{/* <div className="flex gap-x-2 flex-wrap mb-8 text-3xl font-semibold font-DMSans">
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
					</div> */}
					<div
						className="flex gap-x-2 flex-wrap mb-8 text-3xl font-semibold font-DMSans"
						data-aos-duration="700"
						data-aos="zoom-in"
						// data-aos-delay="700"
					>
						Here's what you can expect from us...
					</div>
					<motion.ul className="text-sm md:text-base leading-6 list-disc [&>*]:mb-1 [&>*]:ml-5 font-poppins">
						{expectations.map((text, index) => (
							<motion.li
								initial={{
									opacity: 0,
								}}
								whileInView={{
									opacity: 1,
								}}
								transition={{
									ease: "linear",
									delay: index * 0.4,
								}}
							>
								{text}
							</motion.li>
						))}
					</motion.ul>
				</Container>
			</div>
			<div className="w-full h-[585px] hidden lg:block">
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
