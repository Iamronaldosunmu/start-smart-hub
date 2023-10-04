import { Link } from "react-router-dom";
import Container from "../../../components/container";

const UpcomingEvents = () => {
	return (
		<Container className="mt-14 mb-3 text-center">
			<h2 className="text-[44px] font-medium">Upcoming Events</h2>
			<div className="relative mt-10 flex flex-col justify-center items-center gap-y-8">
				<div className="absolute top-0 right-0 font-inter text-xs leading-7 font-bold px-5 bg-[#ED847A] rounded-md text-white z-10">Online</div>
				<img
					className="object-cover w-[400px] h-[300px] z-0"
					src="/assets/event.png"
					alt=""
				/>
				<div className="flex flex-col items-center justify-center gap-y-5">
					<h2 className="text-[25px] font-medium leading-8 tracking-wide">Learn Secrets to Peak Performance</h2>
					<p className="text-[#606060] font-light leading-5">This program is a set of personal sessions and workshops. It is the quickest and the most effective way to find out all my tips...</p>
					<button className="font-medium px-9 py-4 rounded-xl border-2 border-black">View Details</button>
				</div>
				<Link
					to=""
					className="border-b border-[#F04956] text-[#F04956] text-[18px] px-2"
				>
					Learn More
				</Link>
			</div>
		</Container>
	);
};

export default UpcomingEvents;
