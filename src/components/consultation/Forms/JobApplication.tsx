import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { CheckBoxList, Input, TextArea } from "../inputs/jobApplication";
import { useForms } from "../../../hooks/useForms";
import { useNavigate } from "react-router-dom";
import { PopupButton, useCalendlyEventListener } from "react-calendly";
import FileUpload from "../../FileUpload";

const employmentStatus = ["Employed", "Unemployed", "Self-employed", "Student"];
const services = ["Resume Tailoring", "Cover Letter Writing", "Application Form Assistance", "LinkedIn Profile Optimization", "Interview Coaching"];

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(1, { message: "Phone number is Required" }),
	address: z.string().min(10, { message: "Address should be at least 11 characters" }),
	employmentStatus: z.string(),
	jobTitle: z.string().min(1, { message: "Job Title is Required" }),
	industry: z.string().min(1, { message: "Industry/Field is required" }),
	service: z.string(),
	shortTermGoal: z.string().min(10, { message: "Required" }),
	longTermGoal: z.string().min(10, { message: "Required" }),
	desiredJobTitle: z.string().min(1, { message: "Desired Job Title is required" }),
	targetIndustry: z.string().min(1, { message: "Target Industry is required" }),
	targetCompany: z.string().min(1, { message: "Target Company is required" }),
	summary: z.string().min(10, { message: "Summary should be at least 11 characters" }),
	// resume: z.string().min(1, { message: "Resume should be at least 11 characters" }),
	jobPostings: z.string(),
	additionalInfo: z.string(),
	referral: z.string().min(1, { message: "Required" }),
});

export type JobFormData = z.infer<typeof schema>;
const defaultDocument = {
	secure_url: "",
	public_id: "",
};

const JobApplication = ({ calendlyUrl }: { calendlyUrl: string }) => {
	const pages = [1, 2, 3, 4];
	const [page, setPage] = useState(1);
	const [resume, setResume] = useState(defaultDocument);
	console.log(calendlyUrl);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		trigger,
	} = useForm<JobFormData>({ resolver: zodResolver(schema), mode: "onChange" });

	type names = "firstName" | "lastName" | "email" | "phone" | "address" | "employmentStatus" | "jobTitle" | "industry" | "service" | "shortTermGoal" | "longTermGoal" | "desiredJobTitle" | "targetIndustry" | "targetCompany" | "summary" | "jobPostings" | "additionalInfo" | "referral";

	const Validate = (payload: string[]) => {
		let valid = true;
		payload.forEach((item) => {
			if (errors[item as names]) {
				valid = false;
			}
		});
		return valid;
	};

	const { mutate } = useForms();

	useCalendlyEventListener({
		onEventScheduled: () => {
			alert("Event Scheduled");
			handleSubmit(onSubmit)();
		},
	});

	const onSubmit = (data: JobFormData) => {
		const info = {
			formType: "Job Application Tailoring",
			data: {
				ClientInformation: {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					phone: data.phone,
					address: data.address,
				},
				currentJobStatus: {
					currentStatus: data.employmentStatus,
					currentJob: data.jobTitle,
					currentIndustry: data.industry,
				},
				targetJobPosition: {
					desiredTitle: data.desiredJobTitle,
					targetIndustry: data.targetIndustry,
					targetCompany: data.targetCompany,
				},
				serviceSelection: data.service,
				careerGoals: {
					shortTerm: data.shortTermGoal,
					longTerm: data.longTermGoal,
				},
				resumeApplicationDetails: {
					summary: data.summary,
					potentialJobPostings: data.jobPostings,
					resume: resume.secure_url,
				},
				additionalInformation: {
					additionalInfo: data.additionalInfo,
					referral: data.referral,
				},
			},
		};
		console.log(info);
		mutate(info);
		reset();
		navigate("/home");
	};

	useEffect(() => {
		trigger();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}, 300);
	}, [page]);

	const nextPage = (payload: names[]) => {
		if (Validate(payload)) {
			if (page > pages.length - 1) setPage(1);
			else setPage(page + 1);
		}
	};

	return (
		<Container>
			<MiniNav
				pages={pages}
				currentPage={page}
				setPage={(page) => setPage(page)}
			/>
			<AnimatePresence mode="wait">
				<form onSubmit={handleSubmit(onSubmit)}>
					{page === 1 && (
						<motion.section
							key="page1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Client Information</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10">
								<div className="flex flex-col md:flex-row w-full [&>*:not(:last-child)]:mr-7 gap-y-5">
									<Input
										title="First Name"
										name="firstName"
										register={register}
										error={errors}
									/>
									<Input
										title="Last Name"
										name="lastName"
										register={register}
										error={errors}
									/>
								</div>
								<div className="flex flex-col md:flex-row w-full [&>*:not(:last-child)]:mr-7 gap-y-5">
									<Input
										title="Email"
										name="email"
										register={register}
										error={errors}
									/>
									<Input
										title="Phone Number"
										name="phone"
										register={register}
										error={errors}
									/>
								</div>
								<Input
									title="Address"
									name="address"
									register={register}
									error={errors}
								/>
								<button
									onClick={() => nextPage(["firstName", "lastName", "email", "phone", "address"])}
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
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Current Job Status</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-3 lg:mt-10">
								<CheckBoxList
									title="Current Employment Status"
									name="employmentStatus"
									options={employmentStatus}
									useInput={true}
									register={register}
									error={errors}
								/>
								<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5">
									<Input
										title="Current Job Title"
										name="jobTitle"
										register={register}
										error={errors}
									/>
									<Input
										title="Current Industry"
										name="industry"
										register={register}
										error={errors}
									/>
								</div>
								<button
									onClick={() => nextPage(["employmentStatus", "jobTitle", "industry"])}
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
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Service Selection</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10">
								<CheckBoxList
									title="Please select the specific services you are interested in"
									name="service"
									options={services}
									useInput={true}
									register={register}
									error={errors}
								/>
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Career Goals</h1>
								<TextArea
									title="What are your short-term career goals (next 6-12 months)?"
									name="shortTermGoal"
									register={register}
									error={errors}
								/>
								<TextArea
									title="What are your long-term career goals (next 2-5 years)?"
									name="longTermGoal"
									register={register}
									error={errors}
								/>
								<button
									onClick={() => nextPage(["service", "shortTermGoal", "longTermGoal"])}
									className={`text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]`}
								>
									Next
								</button>
							</div>
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
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-[55px] mt-5 lg:mt-10">
								<Input
									title="Desired Job Title"
									name="desiredJobTitle"
									register={register}
									error={errors}
								/>
								<Input
									title="Target Industry"
									name="targetIndustry"
									register={register}
									error={errors}
								/>
								<Input
									title="Target Company"
									name="targetCompany"
									register={register}
									error={errors}
								/>
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Resume and Application Details</h1>
								<TextArea
									title="Please provide a brief summary of your work experience and skills."
									name="summary"
									register={register}
									error={errors}
								/>
								{/* <TextArea
									title="Attach your current resume (if available):"
									name="resume"
									register={register}
									error={errors}
								/> */}
								<FileUpload
									label="Attach your current resume (if available) - in pdf format"
									file={resume}
									setFile={setResume}
									error={""}
									onFileUpload={() => {}}
									fieldName="resume"
								/>
								<TextArea
									title="Are there any specific job postings you're interested in? If yes, please provide links or details:"
									name="jobPostings"
									register={register}
									error={errors}
								/>
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Additional Information</h1>
								<TextArea
									title="Is there any other information you would like to share about your job search or career goals?"
									name="additionalInfo"
									register={register}
									error={errors}
								/>
								<Input
									title="How did you hear about our Job Application Tailoring Services?"
									name="referral"
									register={register}
									error={errors}
								/>
								<button
									type="submit"
									className="text-2xl flex justify-center lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px] cursor-pointer"
								>
									{isValid ? (
										<PopupButton
											url={`https://calendly.com/startsmarthub/${calendlyUrl}?hide_gdpr_banner=1`}
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
				</form>
			</AnimatePresence>
		</Container>
	);
};

export default JobApplication;
