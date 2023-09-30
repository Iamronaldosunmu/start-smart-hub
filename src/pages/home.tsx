import Nav from "../components/Nav";
import Hero from "../sections/home/hero";
import MeetTheFounder from "../sections/home/meetTheFounder";
import ReadyToStart from "../sections/home/readyToStart";
import SeenOn from "../sections/home/seenOn";
import UnlockYourPotential from "../sections/home/unlockYourPotential";

const Home: React.FC = () => {
	return (
		<div className="mt-[133px]">
			<Nav />
			<Hero />
			<ReadyToStart />
			<MeetTheFounder />
			<UnlockYourPotential />
			<SeenOn />
		</div>
	);
};

export default Home;
