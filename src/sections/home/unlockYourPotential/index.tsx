import { Link } from "react-router-dom";
import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import TextContainer from "../../../components/textContainer";

const UnlockYourPotential = () => {
	const services = [
		{
			title: "Resume building",
			text: "We craft compelling and tailored resumes that highlight your skills, experiences and achievements to make a lasting impression on employers.",
			path: "/consultation/resume-services",
		},
		{
			title: "Resume review",
			text: "Get expert feedback on your existing resume to identify areas for improvement and maximize its impact in your job search.",
			path: "/consultation/resume-services",
		},
		{
			title: "LinkedIn Optimization",
			text: "We optimize your LinkedIn profile to make it stand out to recruiters, showcasing your professional brand and accomplishments.",
			path: "/consultation/linkedin-services",
		},
		{
			title: "Job application tailoring coaching",
			text: "Craft tailored job applications that align with your target positions, increasing your chances of getting noticed by employers.",
			path: "/consultation/job-application",
		},
		{
			title: "Career Transitioning Coaching",
			text: "Navigate career transitions with ease. Our coaching helps you to explore new oppurtunities and make successful transitions.",
			path: "/consultation/career-coaching",
		},
		{
			title: "Career Interest and passion Discovery",
			text: "Discovery  your true career interests and passions through guided exploration, helping you find a fulfilling career path.",
			path: "/consultation/career-coaching",
		},
		{
			title: "Resume Clinic",
			text: "Join our resume clinic sessions to recieve quick, actionable devices and tips for improving your resume.",
			path: "/consultation/resume-services",
		},
		{
			title: "Career workshops and training",
			text: "Participate in our workshops and training sessions to build essential job search skills, from networking to negotiation, and stay ahead in your career journey.",
			path: "/consultation/career-coaching",
		},
		{
			title: "Career/personal development coaching",
			text: "We offer personalized guidance, unwavering support, and tailored strategies to accelerate your professional growth and help you achieve your career goals and personal breakthroughs.",
			path: "/consultation/career-coaching",
		},
	];
	return (
		<section className="mt-14 lg:mt-[100px] text-center overflow-hidden">
			<Container>
				<TextAnimation
					className="text-[44px] lg:text-[56px] font-semibold font-poppins tracking-normal flex flex-wrap gap-x-3 justify-center"
					text="Unlock your potential!"
				/>
				<TextContainer className="flex justify-center">
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="300"
						className="text-[#171717C4] text-sm leading-normal lg:leading-7 mt-5 lg:mt-2 max-w-[778px]"
					>
						These services are designed to support you at every stage of your career, from crafting impactful job application materials to preparing for interviews and exploring new career paths
					</p>
				</TextContainer>
			</Container>
			<div
				data-aos="fade-up"
				data-aos-duration="700"
				data-aos-delay="800"
				className="relative h-full min-w-[2251.94px] scale-90 md:scale-100"
			>
				<div className="h-full w-5 bg-white absolute left-0"></div>
				<div className="flex gap-x-[30px] lg:gap-x-5 mt-8 lg:mt-6 text-center w-full animate-scroll">
					{services.map(({ title, text, path }, index) => (
						<div
							key={index}
							className="w-[352px] lg:w-[373px] h-full"
						>
							<div className="w-[370px] h-[267px]">
								<img
									className="w-full h-full object-cover"
									src="/assets/product.jpeg"
									alt=""
								/>
							</div>
							<div className="py-[30px] px-4">
								<h3 className="text-xl font-semibold">{title}</h3>
								<p className="text-[#606060] text-sm leading-normal lg:leading-7 mt-4">{text}</p>
								<Link
									to={path}
									className="block mx-auto text-sm mt-5 font-bold tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center font-poppins focus:bg-black focus:text-white transition-colors duration-500"
								>
									Start Now
								</Link>
							</div>
						</div>
					))}
					{services.map(({ title, text, path }, index) => (
						<div
							key={index}
							className="w-[352px] lg:w-[373px] h-full"
						>
							<div className="w-[370px] h-[267px]">
								<img
									className="w-full h-full object-cover"
									src="/assets/product.jpeg"
									alt=""
								/>
							</div>
							<div className="py-[30px] px-4">
								<h3 className="text-xl font-semibold">{title}</h3>
								<p className="text-[#606060] text-sm leading-normal lg:leading-7 mt-4">{text}</p>
								<Link
									to={path}
									className="block mx-auto text-sm mt-5 font-bold tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center font-poppins focus:bg-black focus:text-white transition-colors duration-500"
								>
									Start Now
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default UnlockYourPotential;
