import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../../components/container";
import { interactionAnimations } from "../../../utils/framer-default-animations";
import useEventStore from "../../../store/events";
import { format } from "date-fns";

interface Props {
	date?: string;
}

const UpcomingEvents = ({ date }: Props) => {
	const { events } = useEventStore();
	const navigate = useNavigate();
	console.log(events);
	return (
		<section className="bg-[#FAFAFA] pt-14 lg:pt-[100px] pb-5 lg:pb-7">
			<Container className="mb-3 text-center flex flex-col items-center md:text-left">
				<div
					data-aos="zoom-in"
					data-aos-duration="700"
					className="text-[40px] sm:text-[48px] lg:text-[54px] lg:font-semibold font-medium text-center flex gap-x-3 justify-center"
				>
					Upcoming Events
				</div>
				<div className="mt-7 md:mt-14 lg:mt-[90px] flex flex-col md:flex-row items-center gap-x-10 gap-y-8">
					<div
						data-aos="zoom-in"
						data-aos-duration="700"
						className="relative max-w-[400px] md:max-w-[585px] md:max-h-[422px] max-h-[300px] flex shrink"
					>
						<div className="absolute top-0 right-0 font-inter text-xs leading-7 font-bold px-5 bg-[#ED847A] rounded-md text-white z-10">{events?.length > 0 ? events[0]?.attributes?.venue : ""}</div>
						<img
							className="object-cover z-0"
							src="/assets/event.png"
							alt=""
							loading="eager"
						/>
					</div>
					<div className="flex flex-col justify-center items-center md:items-start gap-y-3 max-w-[500px]">
						<h2
							data-aos="zoom-in"
							data-aos-duration="700"
							data-aos-delay="200"
							className="text-[25px] lg:text-[36px] font-medium leading-[30px] lg:leading-normal tracking-wide"
						>
							{events?.length > 0 ? events[0]?.attributes?.title : ""}
						</h2>
						<p
							data-aos="zoom-in"
							data-aos-duration="700"
							data-aos-delay="400"
							className="text-[#606060] font-light leading-5 lg:text-lg"
						>
							{events?.length > 0 ? events[0]?.attributes?.summary : ""}
						</p>
						<p className="text-gray-400 text-xl font-semibold mt-[45px]">Date: {events?.length > 0 ? format(new Date(events[0]?.attributes?.date), "MMMM do yyyy, h:mm:ss a") : ""}</p>
						<motion.button
							{...interactionAnimations}
							onClick={() => navigate(events?.length > 0 ? events[0]?.attributes?.meetingLink : "")}
							data-aos="zoom-in"
							data-aos-duration="700"
							data-aos-delay="0"
							className="font-medium md:font-bold lg:text-lg max-w-[200px] px-9 py-4 rounded-xl   hover:text-white hover:bg-black lg:rounded-none border-2 border-black font-inter focus:bg-black focus:text-white transition-colors duration-500"
						>
							View Details
						</motion.button>
					</div>
				</div>
				<Link
					data-aos="zoom-out"
					data-aos-duration="700"
					data-aos-delay="900"
					to="/upcoming-events"
					className="border-b border-[#F04956] text-[#F04956] text-[18px] px-2 mt-5 md:mt-10 lg:text-lg flex justify-center max-w-[113px]"
				>
					Learn More
				</Link>
			</Container>
		</section>
	);
};

export default UpcomingEvents;
