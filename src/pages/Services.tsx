import React, { useEffect } from "react";
import Bookings from "../components/Booking";
import Container from "../components/container";
import Hero from "../components/HomeHero/Hero";
import PageContainer from "../components/PageContainer";
import Service from "../components/ServicesComponent/Service";
import Goals from "../sections/services/Goals/Goals";
import Grid from "../sections/services/Grid/Grid";
import Information from "../sections/services/Information/Information";
import useServiceStore from "../store/services";
import { useSearchParams } from "react-router-dom";
import ServiceHeader from "../components/ServicesComponent/Services";
import CoachingServices from "../components/ServicesComponent/CoachingServices/CoachingServices";

export const getPathFromFormType = (formType: string) => {
	if (formType == "Resume") {
		return "/consultation/resume-services";
	} else if (formType == "Linkedln") {
		return "/consultation/linkedin-services";
	} else if (formType == "Job Application Tailoring") {
		return "/consultation/job-application";
	} else if (formType == "Career Coaching") return "/consultation/career-coaching";
	else return "/consultation/resume-services";
};

const Services: React.FC = () => {
	const { services } = useServiceStore();
	const [searchParams, setSearchParams] = useSearchParams();
	const scrollTo = searchParams.get("scroll_to");

	useEffect(() => {
		console.log(scrollTo)
		if (scrollTo) {
			console.log(scrollTo)
			setTimeout(() => document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" }), 500);
			console.log(document.getElementById(scrollTo))
				// ?.scrollIntoView({ behavior: "smooth" })
		};
	}, [searchParams]);
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px]">
			<Hero />
			<Goals />
			<Information />
			<Grid />
			<Container id="services">
				<ServiceHeader />
				{services?.length > 0 &&
					services?.filter((service) => !service.formType)?.filter((service)=> service.title !== "Coaching Services").map(
						(service, index) =>
							<Service
								id={service.id}
										number={index + 1}
										imageUrl="/assets/service.png"
										title={service?.title}
										text={service?.description}
										subheading={service?.subheading}
										path={getPathFromFormType(service?.formType)}
									/>
					)}
				{!(services?.length > 0) && (
					<>
						{/* <Service
							number={1}
							imageUrl="/assets/service.png"
							title="Resume Building"
							text="We craft compelling and tailored resumes that highlight your skills, experiences and achievements to make a lasting impression on employers."
							path="/consultation/resume-services"
						/>
						<Service
							number={2}
							imageUrl="/assets/service.png"
							title="Resume Review"
							text="Get expert feedback on your existing resume to identify areas for improvement and maximize its impact in your job search."
							path="/consultation/resume-services"
						/>
						<Service
							number={3}
							imageUrl="/assets/service.png"
							title="LinkedIn Optimization"
							text="We optimize your LinkedIn profile to make it stand out to recruiters, showcasing your professional brand and accomplishments."
							path="/consultation/linkedin-services"
						/>
						<Service
							number={4}
							imageUrl="/assets/service.png"
							title="Interview Prep Coaching"
							text="Prepare for interviews with personalized coaching sessions. Learn efffective strategies and gain the confidence to ace your interviews."
							path="/consultation/job-application"
						/>
						<Service
							number={5}
							imageUrl="/assets/service.png"
							title="Job Application Tailoring Coaching"
							text="Craft tailored job applications that align with your target positions, increasing your chances of getting noticed by employers."
							path="/consultation/job-application"
						/>
						<Service
							number={6}
							imageUrl="/assets/service.png"
							text="Navigate career transitions with ease. Our coaching helps you to explore new oppurtunities and make successful transitions."
							title="Career Transitioning Coaching"
							path="/consultation/career-coaching"
						/>
						<Service
							number={7}
							imageUrl="/assets/service.png"
							title="Career Interest And Passion Discovery"
							text="Discovery  your true career interests and passions through guided exploration, helping you find a fulfilling career path."
							path="/consultation/career-coaching"
						/> */}
						{/* <Service
							number={8}
							imageUrl="/assets/service.png"
							title="Resume Clinic"
							text="Join our resume clinic sessions to recieve quick, actionable devices and tips for improving your resume."
							path="/consultation/resume-services"
						/>
						<Service
							number={9}
							imageUrl="/assets/service.png"
							title="Career Workshops And Training"
							text="Participate in our workshops and training sessions to build essential job search skills, from networking to negotiation, and stay ahead in your career journey."
							path="/consultation/career-coaching"
						/> */}
						{/* <Service
							number={8}
							imageUrl="/assets/service.png"
							title="Career/Personal Development Coaching"
							text="We offer personalized guidance, unwavering support, and tailored strategies to accelerate your professional growth and help you achieve your career goals and personal breakthroughs."
							path="/consultation/career-coaching"
						/> */}
					</>
				)}
			</Container>
			<CoachingServices />
			{/* <Billing /> */}
			<Bookings />
		</PageContainer>
	);
};

export default Services;
