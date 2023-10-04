import { Link } from "react-router-dom";
import Container from "../../../components/container";

const UpcomingEvents = () => {
	return (
		<section className="bg-[#FAFAFA] py-5">
			<Container className="mt-14 mb-3 text-center lg:text-left">
				<h2 className="text-[44px] lg:text-[54px] lg:font-semibold font-medium text-center">Upcoming Events</h2>
				<div className="relative mt-10 flex flex-col lg:flex-row justify-center items-center gap-x-14 gap-y-8">
					<div className="relative w-[400px] lg:w-[585px] h-[300px] lg:h-[422px]">
						<div className="absolute top-0 right-0 font-inter text-xs leading-7 font-bold px-5 bg-[#ED847A] rounded-md text-white z-10">Online</div>
						<img
							className="object-cover w-full h-full z-0"
							src="/assets/event.png"
							alt=""
						/>
					</div>
					<div className="flex flex-col justify-center gap-y-5 max-w-[523px]">
						<h2 className="text-[25px] font-medium leading-8 tracking-wide">Learn Secrets to Peak Performance</h2>
						<p className="text-[#606060] font-light leading-5 lg:text-lg">This program is a set of personal sessions and workshops. It is the quickest and the most effective way to find out all my tips...</p>
						<button className="font-medium lg:font-bold lg:text-lg lg:max-w-[189px] px-9 py-4 rounded-xl lg:rounded-none border-2 border-black font-inter">View Details</button>
					</div>
				</div>
				<div className="flex justify-center">
					<Link
						to=""
						className="border-b border-[#F04956] text-[#F04956] text-[18px] px-2 mt-5 lg:mt-10 lg:text-lg"
					>
						Learn More
					</Link>
				</div>
			</Container>
		</section>
	);
};

export default UpcomingEvents;
