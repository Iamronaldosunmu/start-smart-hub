import { motion } from "framer-motion";
import Container from "../../../components/container";
import { child, container } from "../../../utils/framer-default-animations";
// import ListText from "./ListText";

const Information = () => {
	const ListTexts = [
		"Are you’re charting a new course in a different city/country or have rounded up your International studies?",
		"Feeling stuck in your current job and ready for a career makeover?",
		"landing interviews feels like a magic trick you can’t quite master?",
		" High schoolers, it’s time to ignite your passions and explore endless possibilities for your future studies at colleges and universities....",
	];
	return (
		<Container className="mt-14 lg:mt-[100px]">
			<div className="grid lg:grid-cols-2 w-full gap-6">
				<div
					data-aos="fade-in"
					data-aos-duration="700"
					data-aos-delay="400"
					className="flex items-center  justify-center"
				>
					<img
						src="/assets/Group.png"
						alt=""
					/>
				</div>
				<div className="mt-10 order-[-1] lg:order-1">
					<h2 className="lg:text-4xl text-3xl lg:text-[48px] lg:leading-[54px] font-poppins font-semibold mb-5 text-[#331B3B] flex flex-wrap [&>*:not(:last-child)]:mr-2">
						{/* {"Are You Someone Who?".split(" ").map((word, index) => (
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
							data-aos="zoom-in"
							data-aos-duration="700"
						>
							Are You Someone Who?
						</div>
					</h2>
					<p
						data-aos="zoom-in"
						data-aos-duration="700"
						data-aos-delay="200"
						className="lg:text-lg text-base mb-4 font-poppins font-medium text-[#705977] flex flex-wrap [&>*:not(:last-child)]:mr-1"
					>
						Do any of these sound familiar? Perfect. You’ve found just the help you need!
					</p>
					<motion.ul
						variants={container}
						initial="hidden"
						animate="show"
						className="text-sm md:text-base leading-6 list-disc [&>*]:mb-1 [&>*]:ml-5 font-poppins"
					>
						{ListTexts.map((text: string) => (
							<motion.li variants={child}>
								{/* <ListText
									key={text}
									text={text}
								/> */}
								<motion.li variants={child}>{text}</motion.li>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</Container>
	);
};

export default Information;
