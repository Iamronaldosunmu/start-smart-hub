import PageContainer from "../components/PageContainer";
import Event from "../components/UpcomingEvents/Events";
import Container from "../components/container";
import useEvents from "../hooks/useEvents";

const UpcomingEvents = () => {
	const { data: events } = useEvents();
	return (
		<PageContainer className="pt-[90px] pb-5 lg:pb-7">
			<header className="w-full relative">
				<h1 className="hidden lg:block text-[54px] font-bold absolute left-20 top-1/2">Upcoming Events</h1>
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
			</header>
			<Container className="mb-3 text-center flex flex-col gap-y-7 justify-center items-center md:text-left">
				{events ? (
					events?.map(({ date, venue, summary, expectations, title, price }) => (
						<Event
							date={date}
							venue={venue}
							summary={summary}
							expectations={expectations}
							title={title}
							price={price}
						/>
					))
				) : (
					<img
						src="/assets/loader.svg"
						alt=""
					/>
				)}
			</Container>
		</PageContainer>
	);
};

export default UpcomingEvents;
