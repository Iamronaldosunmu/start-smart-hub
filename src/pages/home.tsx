import Hero from "../sections/home/hero";
import MeetTheFounder from "../sections/home/meetTheFounder";
import ReadyToStart from "../sections/home/readyToStart";
import SeenOn from "../sections/home/seenOn";
import Subscribe from "../sections/home/subscribe";
import Testimonials from "../sections/home/testimonials";
import UnlockYourPotential from "../sections/home/unlockYourPotential";
import UpcomingEvents from "../sections/home/upcomingEvents";

const Home: React.FC = () => {
	return (
		<div className="mt-[96px] lg:mt-[133px]">
			<Hero />
			<ReadyToStart />
			<MeetTheFounder />
			<UnlockYourPotential />
			<SeenOn />
			<UpcomingEvents />
			<Testimonials />
			<Subscribe />
		</div>
	);
};

export default Home;
