import { Link } from "react-router-dom";
import Container from "../../../components/container";
import { useState } from "react";
import { motion } from "framer-motion";

const UnlockYourPotential = () => {
	const [plans] = useState([1, 2, 3, 4, 5, 6]);
	return (
		<>
			<Container className="mt-[132px] font-poppins text-center">
				<h2 className="text-[56px] font-medium">Unlock your potential!</h2>
				<p className="text-[#606060] leading-7 mt-2">
					There’sno limit to your capabilities! Here’s a range of services we offer to enhance your potential, <br /> help you chase your passions, and achieve career success!
				</p>
			</Container>
			<div className="relative w-full overflow-hidden">
				<motion.div
					initial={{ x: -2300 }}
					animate={{ x: 1300 }}
					transition={{ duration: 20, ease: "linear", repeat: Infinity }}
					className="flex gap-x-5 mt-6 h-full text-center noScrollBar"
				>
					{plans.map((_, index) => (
						<div
							key={index}
							className="max-w-[373px] w-full h-full"
						>
							<div className="w-[370px] h-[267px]">
								<img
									className="w-full h-full object-cover"
									src="/src/assets/product.jpeg"
									alt=""
								/>
							</div>
							<div className="py-[30px] px-4">
								<h3 className="text-xl font-semibold">Public Program for Individuals and Teams</h3>
								<p className="text-[#606060] text-sm leading-7 mt-4">Level up your career with our expert resume building services. Stand out from the crowd!</p>
								<Link
									to=""
									className="block mx-auto text-sm mt-5 font-bold tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center"
								>
									Start Now
								</Link>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default UnlockYourPotential;
