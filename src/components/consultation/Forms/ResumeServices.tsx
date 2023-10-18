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
import FileUpload from "../../FileUpload";

const services = ["Resume Building", "Resume Review", "Both"];

const defaultDocument = {
	secure_url: "",
	public_id: "",
};

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(1, { message: "Phone number is Required" }),
	profile: z.string().min(1, { message: "LinkedIn Profile is Required" }),
	service: z.string(),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	desiredJobTitle: z.string().min(2, { message: "Desired Job Title should not be less than 2 characters" }),
	industry: z.string().min(1, { message: "Industry/Field is required" }),
	targetIndustry: z.string().min(1, { message: "Target Industry/Field is required" }),
	yearsOfExperience: z.number().min(0, { message: "Value must be greater than 0" }),
	educationLevel: z.string().min(1, { message: "Education level is required" }),
	resumePresent: z.string().min(1, { message: "Required" }),
	// resumeDetails: z.string().min(1, { message: "Required" }),
	// isResumeDrafts: z.string().min(1, { message: "Required" }),
	resumeDrafts: z.string(),
	requirements: z.string(),
	primaryGoals: z.string(),
	outcomes: z.string(),
});

export type ResumeFormData = z.infer<typeof schema>;

const ResumeServices = ({ calendlyUrl }: { calendlyUrl: string }) => {
	console.log(calendlyUrl)
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		trigger,
	} = useForm<ResumeFormData>({ resolver: zodResolver(schema), mode: "onBlur" });
	const [resume, setResume] = useState(defaultDocument);

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

	type names = "firstName" | "lastName" | "email" | "phone" | "profile" | "service" | "jobTitle" | "desiredJobTitle" | "industry" | "targetIndustry" | "yearsOfExperience" | "educationLevel" | "resumePresent" |  "resumeDrafts" | "requirements" | "primaryGoals" | "outcomes";

	const Validate = (payload: string[]) => {
		let valid = true;
		payload.forEach((item) => {
			if (errors[item as names]) {
				valid = false;
			}
		});
		return valid;
	};

	useEffect(() => {
		trigger();
	}, []);

	const onSubmit = (data: ResumeFormData) => {
		console.log(errors);
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
					createdResume: data.resumePresent == "Yes" ? true : false,
					resumeNotes: true,
					additionalInfo: data.resumeDrafts,
					specificPreferences: data.requirements,
					goals: data.primaryGoals,
					expectations: data.outcomes,
					resume: resume.secure_url,
				},
			},
		};
		mutate(info);
		reset();
		navigate("/home");
	};

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
										error={errors}
									/>
									<Input
										title="Last Name"
										name="lastName"
										register={register}
										error={errors}
									/>
								</div>
								<div className="flex flex-col md:flex-row w-full gap-x-7 gap-y-5">
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
									title="LinkedIn Profile URL"
									name="profile"
									register={register}
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
									type="button"
									onClick={() => nextPage(["firstName", "lastName", "email", "phone", "profile"])}
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
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Career Goals and Background</h1>
							<div className="flex flex-col justify-center gap-y-5 md:gap-y-10 mt-5 lg:mt-10">
								<Input
									title="Current Job Title"
									name="jobTitle"
									register={register}
									error={errors}
								/>
								<Input
									title="Industry"
									name="industry"
									register={register}
									error={errors}
								/>
								<Input
									title="Desired Job Title"
									name="desiredJobTitle"
									register={register}
									error={errors}
								/>
								<Input
									title="Target Industry or Audience for LinkedIn"
									name="targetIndustry"
									register={register}
									error={errors}
								/>
								<Input
									title="Years of Professional Experience"
									type="number"
									name="yearsOfExperience"
									register={register}
									error={errors}
								/>
								<Input
									title="Highest Education Level"
									name="educationLevel"
									register={register}
									error={errors}
								/>
								<button
									type="button"
									onClick={() => nextPage(["jobTitle", "industry", "desiredJobTitle", "targetIndustry", "yearsOfExperience", "educationLevel"])}
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
								{/* <Input
									title="Have you previously created a resume? [Yes/No]"
									name="resumePresent"
									register={register}
									error={errors}
								/> */}
								<CheckBoxList
									title="Have you previously created a resume? [Yes/No]"
									name="resumePresent"
									register={register}
									options={["Yes", "No"]}
									error={errors}
								/>
								{/* <Input
									title="If yes, please share your existing resume us by email"
									name="resumeDetails"
									register={register}
									error={errors}
								/> */}
								<FileUpload
									label="If Yes, Please Upload Your Resume Here (pdf format)"
									file={resume}
									setFile={setResume}
									error={""}
									onFileUpload={() => {}}
									fieldName="resume"
								/>
								{/* <Input
									title="Do you have a draft or notes for your resume? [Yes/No]"
									name="isResumeDrafts"
									register={register}
									error={errors}
								/> */}

								<TextArea
									title="Do you have any drafts, notes, or additional information for your resume? If yes, please provide them here:"
									name="resumeDrafts"
									register={register}
									error={errors}
								/>
								<TextArea
									title="Please share any specific preferences or requirements you have for your resume (e.g formatting, style, key accomplishments):"
									name="requirements"
									register={register}
									error={errors}
								/>
								<Input
									title="What are your primary goals for your resume?"
									name="primaryGoals"
									register={register}
									error={errors}
								/>
								<Input
									title="What specific outcomes or improvements do you expect from our resume services?"
									name="outcomes"
									register={register}
									error={errors}
								/>
								{isValid ? (
									<PopupButton
										url={`https://calendly.com/startsmarthub/${calendlyUrl}?hide_gdpr_banner=1`}
										rootElement={document.getElementById("root") as HTMLElement}
										text="Schedule"
										className="text-2xl flex justify-center lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px] cursor-pointer"
									/>
								) : (
									<button
										type="submit"
										className={`text-2xl flex justify-center lg:text-[32px] text-white ${isValid ? "bg-[#4B8CEA]" : "bg-black"} font-medium w-full py-2 leading-[44px] rounded-[10px] cursor-pointer`}
									>
										Schedule
									</button>
								)}
							</div>
						</motion.section>
					)}
				</AnimatePresence>
			</form>
		</Container>
	);
};

export default ResumeServices;
