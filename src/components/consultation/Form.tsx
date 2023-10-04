import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../container";
import MiniNav from "./MiniNav";
import { CheckBoxList, Input, InputList } from "./inputs";

const options1 = ["Promotion within current job", "Transition to a new role or industry", "Improve job satisfaction", "Other (please specify): ___________________"];

const options2 = ["Leadership Position", "Entrepreneurship", "Career change", "Other (please specify): ___________________"];

const Form = () => {
	const [page, setPage] = useState(1);
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 300);
	}, [page]);
	return (
		<Container>
			<MiniNav
				pages={[1, 2]}
				currentPage={page}
				setPage={(page) => setPage(page)}
			/>
			<AnimatePresence>
				{page === 1 && (
					<motion.section
						key="page1"
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
				{page === 2 && (
					<motion.section
						key="page2"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex flex-col gap-y-6 lg:gap-y-[55px] justify-center"
					>
						<h1 className="text-xl lg:text-[32px] font-medium">Career Goals</h1>
						<CheckBoxList
							title="Short-Term Goals (1-2 years)"
							name="short-term-goals"
							options={options1}
						/>
						<CheckBoxList
							title="Long-Term Goals (3-5 years)"
							name="long-term-goals"
							options={options2}
						/>
						<InputList title="List key skills and competencies you want to develop or enhance:" />
						<div className="grid gap-y-4 lg:gap-y-[55px]">
							<h2 className="text-xl lg:text-[32px] font-medium">Challenges and Obstacles</h2>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">What challenges or obstacles are you currently facing in your career?</p>
								<textarea
									name=""
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<button
								type="submit"
								onClick={() => setPage(1)}
								className="text-2xl lg:text-[32px] text-white font-medium w-full py-2 leading-[44px] bg-[#4B8CEA] rounded-[10px]"
							>
								Next
							</button>
						</div>
					</motion.section>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default Form;
