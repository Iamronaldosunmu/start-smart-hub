import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "../container";
import { Input } from "./Input";

const Form = () => {
	const [page, setPage] = useState(1);
	return (
		<Container>
			<AnimatePresence>
				{page === 2 && (
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mb-5"
					>
						<h1 className="text-xl lg:text-[32px] font-medium">Client Information</h1>
						<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
							<Input
								name="First Name"
								placeholder="John"
							/>
							<Input
								name="Last Name"
								placeholder="John"
							/>
						</div>
						<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
							<Input
								name="Email"
								placeholder="John"
							/>
							<Input
								name="Phone number"
								placeholder="John"
							/>
						</div>
						<Input
							name="Current Job Title"
							placeholder="John"
						/>
						<Input
							name="Current Employer"
							placeholder="John"
						/>
						<Input
							name="Industry/Field"
							placeholder="John"
						/>
						<Input
							name="Years of Experience"
							placeholder="John"
						/>
						<button
							type="submit"
							onClick={() => setPage(2)}
							className="text-2xl lg:text-[32px] text-white font-medium w-full py-2 leading-[44px] bg-[#4B8CEA] rounded-[10px]"
						>
							Next
						</button>
					</motion.section>
				)}
				{page === 1 && (
					<section className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mb-5">
						<h1 className="text-xl font-medium">Career Goals</h1>
						<fieldset>
							<div>
								<input
									type="radio"
									id=""
								/>
								<span></span>
							</div>
							<div>
								<input
									type="radio"
									id=""
								/>
								<span></span>
							</div>
						</fieldset>
					</section>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default Form;
