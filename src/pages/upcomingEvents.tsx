import PageContainer from "../components/PageContainer";
import Event from "../components/UpcomingEvents/Events";
import Container from "../components/container";
import useEvents from "../hooks/useEvents";

const UpcomingEvents = () => {
	const { data: events } = useEvents();
	return (
		<PageContainer className="pt-[90px] pb-5 lg:pb-7">
			<header className="w-full relative ">
				<h1 className="hidden lg:block text-[54px] font-bold absolute left-20 xl:left-[calc((100vw-1220px)/2)] top-1/2">Upcoming Events</h1>
				<img
					className="h-[300px] w-full object-cover hidden lg:block"
					src="/assets/header.png"
					alt=""
				/>
				<img
					className="h-[142px] w-full object-cover lg:hidden flex-shrink-0 "
					src="/assets/upcoming-events.png"
					alt=""
				/>
			</header>
			<Container className="mb-3 text-center flex flex-col gap-y-7 justify-center items-center md:text-left">
				{/* {events ? (
					events?.map(({ attributes: { date, venue, summary, expectations, title, price, meetingLink }, id }) => (
						<Event
							key={id}
							date={date}
							venue={venue}
							summary={summary}
							expectations={expectations}
							title={title}
							price={price}
							meetingLink={meetingLink}
						/>
					))
				) : (
					<img
						className="w-[120px] h-[120px]"
						src="/assets/loader.svg"
						alt=""
					/>
				)} */}
				<Event
					key={1}
					date={"October 20th - 21st, Time: Book available Slots"}
					venue={"online"}
					summary={"Join us for an exclusive opportunity to supercharge your resume! Our Free Resume Clinic is designed to empower you with the tools and knowledge to stand out in today’s competitive job market."}
					expectations={`**Personalized Resume Reviews**: Get expert feedback on your resume.
					**Pro Tips**: Learn the secrets of crafting an attention-grabbing resume from an industry recruiter.
					**Q&A Session**: Ask our career coach your burning questions.
					**Networking**: Connect with a like-minded professional and industry recruiter.`}
					title={"Free Resume Clinic"}
					price={"free"}
					meetingLink={"https://calendly.com/startsmarthub/30min"}
				/>
			</Container>
		</PageContainer>
	);
};

export default UpcomingEvents;
