import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import { Input, TextArea } from "../inputs/linkedinServices";
import { useForm } from "react-hook-form";

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(11, { message: "Phone number should be at least 11 characters" }),
	profile: z.string(),
	headline: z.string(),
	summary: z.string(),
	isUploaded: z.string(),
	profilePicture: z.string(),
	isRecommended: z.string(),
	recommendations: z.string(),
	outcomes: z.string(),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	industry: z.string().min(2, { message: "Industry/Field is required" }),
	desiredJobTitle: z.string(),
	desiredIndustry: z.string().min(2, { message: "Industry/Field is required" }),
	yearsOfExperience: z.number().min(0, { message: "Value must be greater than 0" }),
	educationLevel: z.string(),
	requirements: z.string(),
	additionalInfo: z.string(),
});

export type LinkedinFormData = z.infer<typeof schema>;

const LinkedInServices = () => {
	const pages = [1, 2, 3];
	const [page, setPage] = useState(1);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LinkedinFormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	const onSubmit = (data: LinkedinFormData) => {
		// const info = {
		// 	formType: "Career Coaching",
		// 	data: {
		// 		ClientInformation: {
		// 			firstName: data.firstName,
		// 			lastName: data.lastName,
		// 			email: data.email,
		// 			yearsOfExperience: data.yearsOfExperience,
		// 			industry: data.industry,
		// 			currentEmployer: data.employer,
		// 			currentJobTitle: data.jobTitle,
		// 			phone: data.phone,
		// 		},
		// 		careerGoals: {
		// 			shortTerm: data.shortTermGoal,
		// 			longTerm: data.longTermGoal,
		// 			// skills: [{ skill: "Typescript" }, { skill: "Problem Solving" }],
		// 		},
		// 		challenges: data.challenges,
		// 	},
		// };
		console.log(data);
		// mutate(info);
		// reset();
		// navigate("/home");
	};

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 300);
	}, [page]);

	const nextPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
			<form onSubmit={handleSubmit(onSubmit)}>
				<AnimatePresence mode="wait">
					{page === 1 && (
						<motion.section
							key="page1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Client Information</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10">
								<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
									<Input
										title="First Name"
										name="firstName"
										register={register}
										placeholder="Resume Template"
										error={errors}
									/>
									<Input
										title="Last Name"
										name="lastName"
										register={register}
										placeholder="Resume Template"
										error={errors}
									/>
								</div>
								<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
									<Input
										title="Email"
										name="email"
										register={register}
										placeholder="Resume Template"
										error={errors}
									/>
									<Input
										title="Phone number"
										name="phone"
										register={register}
										placeholder="Resume Template"
										error={errors}
									/>
								</div>
								<Input
									title="LinkedIn Profile URL"
									name="profile"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<button
									onClick={nextPage}
									className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
								>
									Next
								</button>
							</div>
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
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10">
								<Input
									title="What is your current LinkedIn headline?"
									name="headline"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="Please describe your current LinkedIn summary"
									name="summary"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Have you uploaded a profile picture on LinkedIn? [Yes/No]"
									name="isUploaded"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="If yes, please provide a link to your current profile picture."
									name="profilePicture"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Do you have any LinkedIn recommendations or endorsements? [Yes/No]"
									name="isRecommended"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="If yes, please list some of them"
									name="recommendations"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="What specific outcomes or improvements do you expect from our LinkedIn optimization services?"
									name="outcomes"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<button
									onClick={nextPage}
									className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
								>
									Next
								</button>
							</div>
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
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10">
								<Input
									title="Current Job Title"
									name="jobTitle"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Industry"
									name="industry"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Desired Job Title"
									name="desiredJobTitle"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Target Industry or Audience for LinkedIn"
									name="desiredIndustry"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Years of Professional Experience"
									name="yearsOfExperience"
									type="number"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Highest Education Level"
									name="educationLevel"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Additional Comments and Preferences:</h1>
								<TextArea
									title="Please share any specific preferences or requirements you have for your LinkedIn profile optimization (e.g., content, branding, keywords):"
									name="requirements"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="Is there anything else you would like to share or discuss during our LinkedIn optimization process?"
									name="additionalInfo"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<button
									type="submit"
									className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
								>
									Submit
								</button>
							</div>
						</motion.section>
					)}
				</AnimatePresence>
			</form>
		</Container>
	);
};

export default LinkedInServices;
