import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { CheckBoxList, Input, InputList } from "../inputs";

const shortTermGoals = ["Promotion within current job", "Transition to a new role or industry", "Improve job satisfaction"];

const longTermgGoals = ["Leadership Position", "Entrepreneurship", "Career change"];

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(11, { message: "Phone number should be at least 11 characters" }),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	employer: z.string().min(2, { message: "Employer should not be less than 2 characters" }),
	industry: z.string().min(2, { message: "Industry/Field is required" }),
	yearsOfExperience: z.number(),
});

export type FormData = z.infer<typeof schema>;

const CareerCoaching = () => {
	const pages = [1, 2];
	const [page, setPage] = useState(1);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (page > pages.length - 1) setPage(1);
		else setPage(page + 1);
	};

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 300);
	}, [page]);

	return (
		<Container>
			<MiniNav
				pages={pages}
				currentPage={page}
				setPage={(page) => setPage(page)}
			/>
			<AnimatePresence mode="wait">
				{page === 1 && (
					<motion.form
						key="page1"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mb-5"
					>
						<h1 className="text-xl lg:text-[32px] font-medium">Client Information</h1>
						<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
							<Input
								name="first Name"
							/>
							<Input
								name="last Name"
							/>
						</div>
						<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
							<Input
								name="Email"
							/>
							<Input
								name="Phone number"
							/>
						</div>
						<Input
							name="Current Job Title
						/>
						<Input
							name="Current Employer
						/>
						<Input
							name="Industry/Field
						/>
						<Input
							name="Years of Experience
						/>
						<button
							type="submit"
							onClick={handleSubmit}
							className="text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]"
						>
							Next
						</button>
					</motion.form>
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
							options={shortTermGoals}
							useInput={true}
						/>
						<CheckBoxList
							title="Long-Term Goals (3-5 years)"
							name="long-term-goals"
							options={longTermgGoals}
							useInput={true}
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
								onClick={handleSubmit}
								className="text-2xl lg:text-[32px] text-white bg-[#4B8CEA] transition-colors duration-500 font-medium w-full py-2 leading-[44px] rounded-[10px]"
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

export default CareerCoaching;
