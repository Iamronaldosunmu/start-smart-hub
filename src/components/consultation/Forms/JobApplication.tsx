import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { CheckBoxList, Input } from "../inputs";

const employmentStatus = ["Employed", "Unemployed", "Self-employed", "Student"];
const services = ["Resume Tailoring", "Cover Letter Writing", "Application Form Assistance", "LinkedIn Profile Optimization", "Interview Coaching"];

const JobApplication = () => {
	const pages = [1, 2, 3, 4];
	const [page, setPage] = useState(1);
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 300);
	}, [page]);

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		if (page > pages.length - 1) setPage(1);
		else setPage(page + 1);
	};

	return (
		<Container>
			<MiniNav
				pages={pages}
				currentPage={page}
				setPage={(page) => setPage(page)}
			/>
			<AnimatePresence mode="wait">
				{page === 1 && (
					<motion.section
						key="page1"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Client Information</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10"
						>
							<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
								<Input
									name="first Name"
									placeholder="John"
								/>
								<Input
									name="last Name"
									placeholder="John"
								/>
							</div>
							<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
								<Input
									name="Email"
									placeholder="hannah.green@test.com"
								/>
								<Input
									name="Phone number"
									placeholder="+23409018745637"
								/>
							</div>
							<button
								type="submit"
								onClick={handleSubmit}
								className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
							>
								Next
							</button>
						</form>
					</motion.section>
				)}
				{page === 2 && (
					<motion.section
						key="page2"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Current Job Status</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-3 lg:mt-10"
						>
							<CheckBoxList
								title="Current Employment Status"
								name="current-employment-status"
								options={employmentStatus}
								useInput={true}
							/>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5">
								<Input
									name="Current Job Title"
									placeholder="Resume Template"
								/>
								<Input
									name="Current Industry"
									placeholder="Resume Template"
								/>
							</div>
							<button
								type="submit"
								onClick={handleSubmit}
								className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
							>
								Next
							</button>
						</form>
					</motion.section>
				)}
				{page === 3 && (
					<motion.section
						key="page3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Service Selection</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10"
						>
							<CheckBoxList
								title="Please select the specific services you are interested in"
								name="service-selection"
								options={services}
								useInput={true}
							/>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Career Goals</h1>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">What are your short-term career goals (next 6-12 months)?</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] lg:h-[273px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">What are your long-term career goals (next 2-5 years)?</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<button
								type="submit"
								onClick={handleSubmit}
								className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
							>
								Next
							</button>
						</form>
					</motion.section>
				)}
				{page === 4 && (
					<motion.section
						key="page4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Targeted Job Position</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10"
						>
							<Input
								name="Desired Job Title"
								placeholder="Resume Template"
							/>
							<Input
								name="Target Industry"
								placeholder="Resume Template"
							/>
							<Input
								name="Current Industry"
								placeholder="Resume Template"
							/>
							<Input
								name="Target Company (if applicable)"
								placeholder="Resume Template"
							/>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Resume and Application Details</h1>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">Please provide a brief summary of your work experience and skills.</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">Attach your current resume (if available):</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">Are there any specific job postings you're interested in? If yes, please provide links or details:</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Additional Information</h1>
							<div>
								<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">Is there any other information you would like to share about your job search or career goals?</p>
								<textarea
									placeholder="Resume Template"
									className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
								></textarea>
							</div>
							<Input
								name="How did you hear about our Job Application Tailoring Services?"
								placeholder="John"
							/>
							<button
								type="submit"
								onClick={handleSubmit}
								className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
							>
								Next
							</button>
						</form>
					</motion.section>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default JobApplication;
