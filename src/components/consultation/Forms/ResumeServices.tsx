import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { CheckBoxList, Input, TextArea } from "../inputs";

const services = ["Resume Building", "Resume Review", "Both"];

const ResumeServices = () => {
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
								<Input name="first Name" />
								<Input name="last Name" />
							</div>
							<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
								<Input name="Email" />
								<Input name="Phone number" />
							</div>
							<Input name="LinkedIn Profile URL" />
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Service Selection</h1>
							<CheckBoxList
								title="Please select the service(s) you are interested in"
								name="service-selection"
								options={services}
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
								
							/>
							<Input
								name="Industry"
								
							/>
							<Input
								name="Desired Job Title"
								
							/>
							<Input
								name="Target Industry or Audience for LinkedIn"
								
							/>
							<Input
								name="Years of Professional Experience"
								
							/>
							<Input
								name="Highest Education Level"
								
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
						<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Resume Information:</h1>
						<form
							action=""
							className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10"
						>
							<Input
								name="Have you previously created a resume? [Yes/No]"
								
							/>
							<Input
								name="If yes, please share your existing resume us by email"
								
							/>
							<Input
								name="Do you have a draft or notes for your resume? [Yes/No]"
								
							/>
							<TextArea
								title="If yes, please provide any additional information or notes:"
								
							/>
							<TextArea
								title="Please share any specific preferences or requirements you have for your resume (e.g formatting, style, key accomplishments):"
								
							/>
							<Input
								name="What are your primary goals for your resume?"
								
							/>
							<Input
								name="What specific outcomes or improvements do you expect from our resume services?"
								
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

export default ResumeServices;
