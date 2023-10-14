import { Link } from "react-router-dom";
import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";
import TextContainer from "../../../components/textContainer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useSize from "../../../hooks/useSize";
import "swiper/css"; 
import { useState } from "react";

const UnlockYourPotential = () => {
	const [width] = useSize()
		const [isEnd, setIsEnd] = useState(false);
		

	const services = [
		{
			title: "Resume building",
			text: "We craft compelling and tailored resumes that highlight your skills, experiences and achievements to make a lasting impression on employers.",
			link: "/consultation/resume-services",
			image: "/assets/resumeBuilding.jpg",
		},
		{
			title: "Resume review",
			text: "Get expert feedback on your existing resume to identify areas for improvement and maximize its impact in your job search.",
			link: "/consultation/resume-services",
			image: "/assets/resumeReview.jpg",
		},
		{
			title: "LinkedIn Optimization",
			text: "We optimize your LinkedIn profile to make it stand out to recruiters, showcasing your professional brand and accomplishments",
			link: "/consultation/linkedin-services",
			image: "/assets/linkedinOptimization.png",
		},
		{
			title: "Job application tailoring coaching",
			text: "Craft tailored job applications that align with your target positions, increasing your chances of getting noticed by employers.",
			link: "/consultation/job-application",
			image: "/assets/jobApplicationCoaching.jpg",
		},
		{
			title: "Career Transitioning Coaching",
			text: "Navigate career transitions with ease. Our coaching helps you to explore new oppurtunities and make successful transitions.",
			link: "/consultation/career-coaching",
			image: "/assets/careerTransitioning.jpg",
		},
		{
			title: "Career Interest and passion Discovery",
			text: "Discovery  your true career interests and passions through guided exploration, helping you find a fulfilling career link.",
			link: "/consultation/career-coaching",
			image: "/assets/resumeBuilding.jpg",
		},
		{
			title: "Resume Clinic",
			text: "Join our resume clinic sessions to recieve quick, actionable devices and tips for improving your resume.",
			link: "/consultation/resume-services",
			image: "/assets/resumeBuilding.jpg",
		},
		{
			title: "Career workshops and training",
			text: "Participate in our workshops and training sessions to build essential job search skills, from networking to negotiation, and stay ahead in your career journey.",
			link: "/consultation/career-coaching",
			image: "/assets/resumeBuilding.jpg",
		},
		{
			title: "Career/personal development coaching",
			text: "We offer personalized guidance, unwavering support, and tailored strategies to accelerate your professional growth and help you achieve your career goals and personal breakthroughs.",
			link: "/consultation/career-coaching",
			image: "/assets/resumeBuilding.jpg",
		},
	];


  return (
		<section className="mt-14 lg:mt-[100px] text-center overflow-hidden ">
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
			<Container className="flex gap-x-[30px] justify-center mt-8 lg:mt-6 text-center w-full ">
				<Swiper
					onReachEnd={() => setIsEnd(true)}
					allowTouchMove={false}
					spaceBetween={width > 767 ? (width > 1024 ? 40 : 40) : 20}
					slidesPerView={width > 500 ? (width > 1024 ?  3: 2) : 1}
				>
					{services.map(({ title, text, link, image }, index) => (
						<SwiperSlide key={index}>
							<div className=" h-full">
								<div className="w-full h-[200px] lg:h-[267px] md:h-[200px] scale-105">
									<img
										className="w-full  h-full  object-cover"
										src={image}
										alt=""
									/>
								</div>
								<div className="py-[30px] px-4 h-full">
									<h3 className="text-xl font-semibold">{title}</h3>
									<div className="flex flex-col justify-between">
										<p className="text-[#606060] text-sm leading-normal lg:leading-7 mt-4">{text}</p>
										<Link
											to={link}
											className="block mx-auto text-sm mt-5 font-bold tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center font-poppins hover:bg-black hover:text-white transition-colors duration-500"
										>
											Start Now
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}

					<SwiperNav enabled={isEnd} />
				</Swiper>
			</Container>
		</section>
	);
};

const SwiperNav = ({ enabled }: { enabled: boolean }) => {
	const swiper = useSwiper();
	return (
		<div className="absolute w-full bottom-[60%] translate-y-[50%] z-10 flex justify-between">
			<div
				aria-disabled={enabled}
				onClick={() => swiper.slidePrev()}
				className={`bg-[#726f6f99]  p-[4px] md:p-[10px] lg:p-4  left-0 none-select ${enabled && "cursor-pointer"}`}
			>
				<img
					className="w-10 h-10 object-cover"
					src="/assets/chevron-right.svg"
					alt=""
				/>
			</div>
			<div
				aria-disabled={!enabled}
				onClick={() => swiper.slideNext()}
				className={`bg-[#726f6f99] p-[4px] md:p-[10px] lg:p-4 right-0 rotate-180 none-select ${!enabled && "cursor-pointer"}`}
			>
				<img
					className="w-10 h-10 object-cover"
					src="/assets/chevron-right.svg"
					alt=""
				/>
			</div>
		</div>
	);
};


export default UnlockYourPotential;


