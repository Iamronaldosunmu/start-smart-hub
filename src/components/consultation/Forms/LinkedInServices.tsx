import { useEffect, useState } from "react";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { AnimatePresence, motion } from "framer-motion";
import { Input, TextArea } from "../inputs";

const LinkedInServices = () => {
	const pages = [1, 2, 3];
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
							className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10"
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
							<Input
								name="LinkedIn Profile URL"
								placeholder="Resume Template"
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
				{page === 2 && (
					<motion.section
						key="page2"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">LinkedIn Optimization Details</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10"
						>
							<Input
								name="What is your current LinkedIn headline?"
								placeholder="Resume Template"
							/>
							<TextArea
								title="Please describe your current LinkedIn summary"
								placeholder="Resume Template"
							/>
							<Input
								name="Have you uploaded a profile picture on LinkedIn? [Yes/No]"
								placeholder="Resume Template"
							/>
							<Input
								name="If yes, please provide a link to your current profile picture."
								placeholder="Resume Template"
							/>
							<Input
								name="Do you have any LinkedIn recommendations or endorsements? [Yes/No]"
								placeholder="Resume Template"
							/>
							<TextArea
								title="If yes, please list some of them"
								placeholder="Resume Template"
							/>
							<TextArea
								title="What specific outcomes or improvements do you expect from our LinkedIn optimization services?"
								placeholder="Resume Template"
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
				{page === 3 && (
					<motion.section
						key="page3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Career Goals and Background</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10"
						>
							<Input
								name="Current Job Title"
								placeholder="Resume Template"
							/>
							<Input
								name="Industry"
								placeholder="Resume Template"
							/>
							<Input
								name="Desired Job Title"
								placeholder="Resume Template"
							/>
							<Input
								name="Target Industry or Audience for LinkedIn"
								placeholder="Resume Template"
							/>
							<Input
								name="Years of Professional Experience"
								placeholder="Resume Template"
							/>
							<Input
								name="Highest Education Level"
								placeholder="Resume Template"
							/>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Additional Comments and Preferences:</h1>
							<TextArea
								title="Please share any specific preferences or requirements you have for your LinkedIn profile optimization (e.g., content, branding, keywords):"
								placeholder="Resume Template"
							/>
							<TextArea
								title="Is there anything else you would like to share or discuss during our LinkedIn optimization process?"
								placeholder="Resume Template"
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

export default LinkedInServices;