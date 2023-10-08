import { motion } from "framer-motion";
import Container from "../../../components/container";

const Subscribe = () => {
	return (
		<section className="relative py-20 text-center bg-[#FFF2EC] mt-14">
			<Container className="flex flex-col items-center">
				<div className="text-[44px] lg:text-[54px] font-bold flex flex-wrap gap-x-2 justify-center">
					{"Stay in the loop!".split(" ").map((word, index) => (
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
					className="text-[#606060] mt-5 text-base xl:text-xl leading-[32px] max-w-[617px]"
				>
					Get the inside scoop, level up your career. Don’t miss out on all the recent updates! Subscribe to our newsletter now!
				</p>
				<div
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="1000"
					className="mt-[50px] flex justify-center items-center h-[51px] overflow-hidden rounded-md w-full max-w-[450px]"
				>
					<input
						className="w-full h-full px-4 placeholder:text-xs placeholder:text-[#757575]"
						placeholder="Enter your email"
						type="text"
					/>
					<button className="text-sm tracking-widest bg-[#FFA177] h-full max-w-[121px] w-full text-white uppercase leading-4">Join</button>
				</div>
			</Container>
		</section>
	);
};

export default Subscribe;
