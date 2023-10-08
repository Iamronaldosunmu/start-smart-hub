import { motion } from "framer-motion";
import Container from "../../../components/container";

const SeenOn = () => {
	const images: string[] = ["parents-magazine.png", "grief-out-loud.jpg", "authority-magazine.png", "widow-we-do-now.png", "grief-2-growth.jpg", "psychology-today.jpg"];
	return (
		<section className="mt-14 lg:mt-[100px] font-poppins bg-[#FFF2EC] py-[67px] overflow-hidden">
			<Container className="flex flex-col items-center justify-center">
				<div className="text-2xl lg:text-[37px] text-[#262B2B] text-center font-bold lg:font-semibold font-poppins flex gap-x-3">
					{"As Seen on".split(" ").map((word, index) => (
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
				<div
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="700"
					className="min-w-[2251.94px] scale-90 md:scale-100"
				>
					<div className="flex justify-center items-center gap-x-20 pt-8 animate-scroll">
						{images.map((image: string) => (
							<img
								className="object-contain"
								src={`/assets/${image}`}
								alt="a Logo"
							/>
						))}
						{images.map((image: string) => (
							<img
								className="object-contain"
								src={`/assets/${image}`}
								alt="a Logo"
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SeenOn;
