import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import CareerCoaching from "../components/consultation/Forms/CarrerCoaching";
import JobApplication from "../components/consultation/Forms/JobApplication";
import LinkedInServices from "../components/consultation/Forms/LinkedInServices";
import ResumeServices from "../components/consultation/Forms/ResumeServices";

const Consultation = () => {
	const { type } = useParams();
	return (
		<PageContainer className="mt-10 lg:mt-[72px]">
			<div className="w-full relative">
				<h1 className="hidden lg:block text-[56px] font-medium absolute font-poppins left-10 top-1/2">Consultation</h1>
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
			<>{type == "career-coaching" && <CareerCoaching />}</>
			<>{type === "job-application" && <JobApplication />}</>
			<>{type === "linkedin-services" && <LinkedInServices />}</>
			<>{type === "resume-services" && <ResumeServices />}</>
		</PageContainer>
	);
};

export default Consultation;
