import { useParams, useSearchParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import CareerCoaching from "../components/consultation/Forms/CarrerCoaching";
import JobApplication from "../components/consultation/Forms/JobApplication";
import LinkedInServices from "../components/consultation/Forms/LinkedInServices";
import ResumeServices from "../components/consultation/Forms/ResumeServices";

const Consultation = () => {
	const { type } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get("title"))

	const getCalendlyServiceNameInUrlFromServiceTitle = (title: string) => {
		switch (title) {
			case "Resume Building":
				return "resume-building"
			case "Resume review": 
				return "resume-review"
			case "LinkedIn Optimization":
				return "linkedin-optimization"
			case "Interview prep coaching": 
				return "interview-prep-coaching"
			case "Job application tailoring coaching":
				return "job-application-tailoring"
			case "Career Transitioning Coaching": 
				return "coaching-career-transitioning"
			case "Career Interest and passion Discovery": 
				return "coaching-career-interest-and-passion-discovery"
			case "Career/Personal Development Coaching":
				return "coaching-career-personal-development"
			}
	}

	const calendlyUrl = getCalendlyServiceNameInUrlFromServiceTitle(searchParams.get("title") as string);
	console.log(calendlyUrl)
	return (
		<PageContainer className="mt-10 lg:mt-[72px]">
			<div className="w-full relative">
				<h1 className="hidden lg:block text-[56px] font-medium absolute font-poppins left-10 top-1/2 xl:left-[calc((100vw-1200px)/2)]">Consultation</h1>
				<img
					className="h-[300px] w-full object-cover hidden lg:block"
					src="/assets/header.png"
					alt=""
				/>
				<img
					className="h-[142px] w-full object-cover block lg:hidden"
					src="/assets/header_mobile.png"
					alt=""
				/>
			</div>
			<>{type == "career-coaching" && <CareerCoaching calendlyUrl={calendlyUrl as string} />}</>
			<>{type === "job-application" && <JobApplication calendlyUrl={calendlyUrl as string} />}</>
			<>{type === "linkedin-services" && <LinkedInServices calendlyUrl={calendlyUrl as string} />}</>
			<>{type === "resume-services" && <ResumeServices calendlyUrl={calendlyUrl as string} />}</>
		</PageContainer>
	);
};

export default Consultation;
