import Container from "../../../components/container";
import TextAnimation from "../../../components/TextAnimation";

interface EventProps {
	title?: string;
	tag?: string;
	status?: string;
	date?: Date;
}

const UpcomingEvents = ({ title, tag, status, date }: EventProps) => {
	return (
		<section className="bg-[#FAFAFA] mt-[90px]  pb-5 lg:pb-7">
			<Container className="mb-3 text-center flex flex-col items-center md:text-left">
				<div className=" flex justify-between  items-center lg:ml-[120px] sm:ml-[80px] w-full">
					<TextAnimation
						className=" sm:text-[40px] flex-wrap  lg:text-[54px] text-[20px]  lg:font-semibold font-medium text-center flex md:gap-x-3 gap-x-1"
						text="Upcoming Events"
					/>
					<img
						src="/assets/upcomingEvents.png"
						alt=""
						className="inline w-full max-w-[50%] h-full lg:w-auto"
					/>
				</div>
				<div className="mt-7 md:mt-14 lg:mt-[90px] h-full flex flex-col lg:flex-row  gap-x-10  gap-y-8">
					<img
						className="object-cover z-0 "
						src="/assets/event.png"
						alt=""
						loading="eager"
					/>

					<div className="flex flex-col justify-center md:items-start gap-y-3 max-w-[500px] text-[#606060]">
						<h2
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay="1100"
							className="text-[25px] lg:text-[36px] text-left font-medium leading-[30px] lg:leading-normal tracking-wide"
						>
							Free Resume Clinic
							{title}
						</h2>
						<p
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay="1300"
							className="text-[#606060] text-left font-light leading-5 lg:text-xl"
						>
							<img
								src="/assets/date.svg"
								className="inline mr-2 text-left"
								alt=""
							/>
							{/* {date} */}
						</p>
						<p
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay="1300"
							className="text-[#606060] font-light text-left leading-5 lg:text-xl"
						>
							<img
								src="/assets/location.svg"
								className="inline mr-2 text-left"
								alt=""
							/>
							{tag}
						</p>
						<p
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay="1300"
							className="text-[#606060] text-left font-light leading-5 lg:text-xl"
						>
							<img
								src="/assets/tag.svg"
								className="inline mr-2 text-left"
								alt=""
							/>
							{status}
						</p>
						<div className="lg:text-xl mb-5 text-left">
							<h3 className="font-semibold mb-5">Summary</h3>
							<p>Join us for an exclusive opportunity to supercharge your resume! Our Free Resume Clinic is designed to empower you with the tools and knowledge to stand out in today’s competitive job market.</p>
						</div>
						<div className="lg:text-xl text-left">
							<h3 className="font-semibold mb-5">What to expect</h3>
							<ul>
								<li>
									<b>Personalised Resume Reviews:</b> Get expert feedback on your resume.
								</li>
								<li>
									<b>Pro Tips: </b> Learn the secrets of crafting an attention-grabbing resume from an industry recruiter.
								</li>
								<li>
									<b>Q&A Session:</b> Ask our career coach your burning questions.
								</li>
								<li>
									<b>Networking:</b> Connect with a like-minded professional and industry recruiter.
								</li>
							</ul>
						</div>

						<button
							data-aos="fade-up"
							data-aos-duration="700"
							data-aos-delay="1500"
							className="font-medium md:font-bold mt-5 rounded-lg lg:text-lg max-w-[200px] px-9 py-4  border-2 border-black hover:bg-black hover:text-white font-inter focus:bg-black focus:text-white transition-colors duration-500"
						>
							Apply Now
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default UpcomingEvents;
