import Nav from "../components/nav";
import Testimonials from "../sections/home/testimonials";
import Hero from "../sections/home/hero";
import MeetTheFounder from "../sections/home/meetTheFounder";
import ReadyToStart from "../sections/home/readyToStart";
import SeenOn from "../sections/home/seenOn";
import UnlockYourPotential from "../sections/home/unlockYourPotential";
import UpcomingEvents from "../sections/home/upcomingEvents";
import Subscribe from "../sections/home/subscribe";
import Footer from "../sections/footer";

const Home: React.FC = () => {
	return (
		<div className="mt-[116px] lg:mt-[133px]">
			<Hero />
			<ReadyToStart />
			<MeetTheFounder />
			<UnlockYourPotential />
			<SeenOn />
			<UpcomingEvents />
			<Testimonials />
			<Subscribe />
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
