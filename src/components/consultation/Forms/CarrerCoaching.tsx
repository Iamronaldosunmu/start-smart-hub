import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PopupButton, useCalendlyEventListener } from "react-calendly";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForms } from "../../../hooks/useForms";
import Container from "../../container";
import MiniNav from "../MiniNav";
import { CheckBoxList, Input, TextArea } from "../inputs/careerCoaching";

const shortTermGoals = ["Promotion within current job", "Transition to a new role or industry", "Improve job satisfaction"];

const longTermgGoals = ["Leadership Position", "Entrepreneurship", "Career change"];

const schema = z.object({
	firstName: z.string().min(3, { message: "First Name must be at least 3 characters" }),
	lastName: z.string().min(3, { message: "Last Name must be at least 3 characters" }),
	email: z.string().email({ message: "The email format you entered is invalid" }),
	phone: z.string().min(1, { message: "Required" }),
	jobTitle: z.string().min(2, { message: "Job Title should not be less than 2 characters" }),
	employer: z.string().min(2, { message: "Employer should not be less than 2 characters" }),
	industry: z.string().min(2, { message: "Industry/Field is required" }),
	yearsOfExperience: z.number().min(0, { message: "Value must be greater than 0" }),
	shortTermGoal: z.string(),
	longTermGoal: z.string(),
	challenges: z.string().min(1, { message: "Required" }),
});

export type CareerFormData = z.infer<typeof schema>;

const CareerCoaching = ({ calendlyUrl }: { calendlyUrl: string }) => {
	const pages = [1, 2];
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	const { mutate } = useForms();

	type names = "firstName" | "lastName" | "email" | "phone" | "jobTitle" | "employer" | "industry" | "yearsOfExperience" | "shortTermGoal" | "longTermGoal" | "challenges";

	useEffect(() => {
		trigger();
	}, []);

	const Validate = (payload: string[]) => {
		let valid = true;
		payload.forEach((item) => {
			if (errors[item as names]) {
				valid = false;
			}
		});
		return valid;
	};

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
		trigger,
	} = useForm<CareerFormData>({ resolver: zodResolver(schema), mode: "onBlur" });

	const nextPage = (payload: names[]) => {
		if (Validate(payload)) {
			if (page > pages.length - 1) setPage(1);
			else setPage(page + 1);
		}
	};
	useCalendlyEventListener({
		onEventScheduled: () => {
			alert("Event Scheduled");
			handleSubmit(onSubmit)();
		},
	});

	const onSubmit = (data: CareerFormData) => {
		const info = {
			formType: "Career Coaching",
			data: {
				ClientInformation: {
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					yearsOfExperience: data.yearsOfExperience,
					industry: data.industry,
					currentEmployer: data.employer,
					currentJobTitle: data.jobTitle,
					phone: data.phone,
				},
				careerGoals: {
					shortTerm: data.shortTermGoal,
					longTerm: data.longTermGoal,
					// skills: [{ skill: "Typescript" }, { skill: "Problem Solving" }],
				},
				challenges: data.challenges,
			},
		};
		mutate(info);
		reset();
		navigate("/home");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	useEffect(() => {
		console.log(isValid);
	}, [isValid]);

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
							className="flex flex-col justify-center  [&>*:not(:last-child)]:mb-5 md: [&>*:not(:last-child)]:mb-[55px] mb-5"
						>
							<h1 className="text-xl lg:text-[32px] font-medium">Client Information</h1>
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
									title="Phone Number"
									name="phone"
									register={register}
									error={errors}
								/>
							</div>
							<Input
								title="Current Job Title"
								name="jobTitle"
								register={register}
								error={errors}
							/>
							<Input
								title="Current Employer"
								name="employer"
								register={register}
								error={errors}
							/>
							<Input
								title="Current/Field"
								name="industry"
								register={register}
								error={errors}
							/>
							<Input
								title="Years Of Experience"
								name="yearsOfExperience"
								register={register}
								error={errors}
								type="number"
							/>
							<button
								onClick={() => nextPage(["firstName", "lastName", "email", "industry", "yearsOfExperience"])}
								className="text-2xl lg:text-[32px] text-white bg-[#4B8CEA] font-medium w-full py-2 leading-[44px] rounded-[10px]"
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
							className="flex flex-col  [&>*:not(:last-child)]:mb-6 lg: [&>*:not(:last-child)]:mb-[55px] justify-center"
						>
							<h1 className="text-xl lg:text-[32px] font-medium">Career Goals</h1>
							<CheckBoxList
								title="Short-Term Goals (1-2 years)"
								register={register}
								name="shortTermGoal"
								options={shortTermGoals}
								useInput={true}
								error={errors}
							/>
							<CheckBoxList
								title="Long-Term Goals (3-5 years)"
								register={register}
								name="longTermGoal"
								options={longTermgGoals}
								useInput={true}
								error={errors}
							/>
							{/* <InputList title="List key skills and competencies you want to develop or enhance:" /> */}
							<div className="grid  [&>*:not(:last-child)]:mb-4 lg: [&>*:not(:last-child)]:mb-[55px]">
								<h2 className="text-xl lg:text-[32px] font-medium">Challenges and Obstacles</h2>
								<TextArea
									title="What challenges or obstacles are you currently facing in your career?"
									name="challenges"
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

export default CareerCoaching;
