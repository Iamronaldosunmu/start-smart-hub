import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import { Input, TextArea } from "../inputs/linkedinServices";
import { useForm } from "react-hook-form";
import { PopupButton, useCalendlyEventListener } from "react-calendly";
import { useForms } from "../../../hooks/useForms";
import { useNavigate } from "react-router-dom";

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(1, { message: "Phone number is Required" }),
	profile: z.string().min(1, { message: "Profile Url is Required" }),
	headline: z.string().min(1, { message: "Required" }),
	summary: z.string().min(1, { message: "Required" }),
	isUploaded: z.string().min(1, { message: "Required" }),
	profilePicture: z.string().min(1, { message: "Required" }),
	isRecommended: z.string().min(1, { message: "Required" }),
	recommendations: z.string().min(1, { message: "Required" }),
	outcomes: z.string().min(1, { message: "Required" }),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	industry: z.string().min(2, { message: "Industry/Field is required" }),
	desiredJobTitle: z.string().min(1, { message: "Required" }),
	desiredIndustry: z.string().min(2, { message: "Industry/Field is required" }),
	yearsOfExperience: z.number().min(0, { message: "Value must be greater than 0" }),
	educationLevel: z.string().min(1, { message: "Required" }),
	requirements: z.string().min(1, { message: "Required" }),
	additionalInfo: z.string().min(1, { message: "Required" }),
});

export type LinkedinFormData = z.infer<typeof schema>;

const LinkedInServices = ({ calendlyUrl }: { calendlyUrl: string }) => {
	const pages = [1, 2, 3];
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	const { mutate } = useForms();

	useCalendlyEventListener({
		onEventScheduled: () => {
			handleSubmit(onSubmit)();
			alert("Event Scheduled");
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		trigger,
	} = useForm<LinkedinFormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	type names =
		| "firstName"
		| "lastName"
		| "email"
		| "phone"
		| "profile"
		| "jobTitle"
		| "industry"
		| "desiredJobTitle"
		| "summary"
		| "additionalInfo"
		| "profilePicture"
		| "headline"
		| "isUploaded"
		| "profilePicture"
		| "desiredIndustry"
		| "requirements"
		| "yearsOfExperience"
		| "isUploaded"
		| "isRecommended"
		| "recommendations"
		| "outcomes"
		| "desiredIndustry"
		| "yearsOfExperience"
		| "educationLevel";

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

	const onSubmit = (data: LinkedinFormData) => {
		const info = {
			formType: "LinkedIn",
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
					TargetIndustry: data.desiredIndustry,
					educationalLevel: data.educationLevel,
					yearsOfExperience: data.yearsOfExperience,
				},
				linkedinOptimizationDetails: {
					currentHeadline: data.headline,
					currentSummary: data.summary,
					profilePicture: false,
					profilePictureLink: data.profilePicture,
					linkedinRecommendations: true,
					linkedinRecommendationDetails: data.recommendations,
					expectations: data.outcomes,
				},
				additionalComments: {
					additionalInfo: data.additionalInfo,
					specificPreferences: data.requirements,
				},
			},
		};
		console.log(info);
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
							<div className="flex flex-col justify-center  [&>*:not(:last-child)]:mb-5 md: [&>*:not(:last-child)]:mb-10 mt-5 lg:mt-10">
								<div className="flex flex-col md:flex-row w-full [&>*:not(:last-child)]:mr-7  [&>*:not(:last-child)]:mb-5">
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
								<div className="flex flex-col md:flex-row w-full [&>*:not(:last-child)]:mr-7  [&>*:not(:last-child)]:mb-5">
									<Input
										title="Email"
										name="email"
										register={register}
										error={errors}
									/>
									<Input
										title="Phone number"
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
							<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">LinkedIn Optimization Details</h1>
							<div className="flex flex-col justify-center  [&>*:not(:last-child)]:mb-5 md: [&>*:not(:last-child)]:mb-10 mt-5 lg:mt-10">
								<Input
									title="What is your current LinkedIn headline?"
									name="headline"
									register={register}
									error={errors}
								/>
								<TextArea
									title="Please describe your current LinkedIn summary"
									name="summary"
									register={register}
									error={errors}
								/>
								<Input
									title="Have you uploaded a profile picture on LinkedIn? [Yes/No]"
									name="isUploaded"
									register={register}
									error={errors}
								/>
								<Input
									title="If yes, please provide a link to your current profile picture."
									name="profilePicture"
									register={register}
									error={errors}
								/>
								<Input
									title="Do you have any LinkedIn recommendations or endorsements? [Yes/No]"
									name="isRecommended"
									register={register}
									error={errors}
								/>
								<TextArea
									title="If yes, please list some of them"
									name="recommendations"
									register={register}
									error={errors}
								/>
								<TextArea
									title="What specific outcomes or improvements do you expect from our LinkedIn optimization services?"
									name="outcomes"
									register={register}
									error={errors}
								/>
								<button
									type="button"
									onClick={() => nextPage(["headline", "summary", "isUploaded", "isRecommended", "profilePicture", "recommendations", "outcomes"])}
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
							<div className="flex flex-col justify-center  [&>*:not(:last-child)]:mb-5 md: [&>*:not(:last-child)]:mb-10 mt-5 lg:mt-10">
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
									name="desiredIndustry"
									register={register}
									error={errors}
								/>
								<Input
									title="Years of Professional Experience"
									name="yearsOfExperience"
									type="number"
									register={register}
									error={errors}
								/>
								<Input
									title="Highest Education Level"
									name="educationLevel"
									register={register}
									error={errors}
								/>
								<h1 className="text-xl md:text-2xl lg:text-[32px] font-medium">Additional Comments and Preferences:</h1>
								<TextArea
									title="Please share any specific preferences or requirements you have for your LinkedIn profile optimization (e.g., content, branding, keywords):"
									name="requirements"
									register={register}
									error={errors}
								/>
								<TextArea
									title="Is there anything else you would like to share or discuss during our LinkedIn optimization process?"
									name="additionalInfo"
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

export default LinkedInServices;
