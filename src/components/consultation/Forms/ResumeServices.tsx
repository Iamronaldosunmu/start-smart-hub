import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useEffect, useState } from "react";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { z } from "zod";
import { CheckBoxList, Input, TextArea } from "../inputs/resumeServices";
import { useForm } from "react-hook-form";
import { useForms } from "../../../hooks/useForms";
import { PopupButton, useCalendlyEventListener } from "react-calendly";
import { useNavigate } from "react-router-dom";

const services = ["Resume Building", "Resume Review", "Both"];

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(11, { message: "Phone number should be at least 11 characters" }),
	profile: z.string(),
	service: z.string(),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	desiredJobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	industry: z.string().min(2, { message: "Industry/Field is required" }),
	targetIndustry: z.string().min(2, { message: "Target Industry/Field is required" }),
	yearsOfExperience: z.number().min(0, { message: "Value must be greater than 0" }),
	educationLevel: z.string(),
	isResume: z.string(),
	resume: z.string(),
	isResumeDrafts: z.string(),
	resumeDrafts: z.string(),
	requirements: z.string(),
	primaryGoals: z.string(),
	outcomes: z.string(),
});

export type ResumeFormData = z.infer<typeof schema>;

const ResumeServices = () => {
	const pages = [1, 2, 3];
	const [page, setPage] = useState(1);

	const { mutate } = useForms();

	const navigate = useNavigate();

	useCalendlyEventListener({
		onEventScheduled: () => {
			alert("Event Scheduled");
			handleSubmit(onSubmit)();
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<ResumeFormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	const onSubmit = (data: ResumeFormData) => {
		const info = {
			formType: "Resume",
			data: {
				ClientInformation: {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					phone: data.phone,
					linkedinUrl: data.profile,
				},
				careerGoalsAndBackground: {
					currentTitle: data.jobTitle,
					desiredTitle: data.desiredJobTitle,
					currentIndustry: data.industry,
					TargetIndustry: data.targetIndustry,
					educationalLevel: data.educationLevel,
					yearsOfExperience: data.yearsOfExperience,
				},
				serviceSelection: data.service,
				resumeInformation: {
					createdResume: true,
					resumeNotes: false,
					additionalInfo: data.resumeDrafts,
					specificPreferences: data.requirements,
					goals: data.primaryGoals,
					expectations: data.outcomes,
				},
			},
		};
		console.log(data);
		mutate(info);
		reset();
		navigate("/home");
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
										title="Phone Number"
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
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Service Selection</h1>
								<CheckBoxList
									title="Please select the service(s) you are interested in"
									name="service"
									register={register}
									options={services}
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
									name="targetIndustry"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Years of Professional Experience"
									type="number"
									name="yearsOfExperience"
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
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Resume Information:</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10">
								<Input
									title="Have you previously created a resume? [Yes/No]"
									name="isResume"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="If yes, please share your existing resume us by email"
									name="resume"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="Do you have a draft or notes for your resume? [Yes/No]"
									name="isResumeDrafts"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="If yes, please provide any additional information or notes:"
									name="resumeDrafts"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<TextArea
									title="Please share any specific preferences or requirements you have for your resume (e.g formatting, style, key accomplishments):"
									name="requirements"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="What are your primary goals for your resume?"
									name="primaryGoals"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<Input
									title="What specific outcomes or improvements do you expect from our resume services?"
									name="outcomes"
									register={register}
									placeholder="Resume Template"
									error={errors}
								/>
								<button
									type="submit"
									className="text-2xl flex justify-center lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px] cursor-pointer"
								>
									{isValid ? (
										<PopupButton
											url="https://calendly.com/jason-aghedo/consultation-with-aghedo-jason?hide_gdpr_banner=1"
											rootElement={document.getElementById("root") as HTMLElement}
											text="Schedule"
											className="text-2xl flex justify-center lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px] cursor-pointer"
										/>
									) : (
										"Schedule"
									)}
								</button>
							</div>
						</motion.section>
					)}
				</AnimatePresence>
			</form>
		</Container>
	);
};

export default ResumeServices;
