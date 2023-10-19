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
					date={"October 21 - 22"}
					venue={"Online"}
					summary={summary}
					expectations={expectations}
					title={title}
					price={price}
					meetingLink={meetingLink}
				/>
			</Container>
		</PageContainer>
	);
};

export default UpcomingEvents;
