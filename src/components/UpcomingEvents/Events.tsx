import { motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Markdown from "markdown-to-jsx";

interface Props {
	date: string;
	venue: "online" | "physical";
	summary: string;
	expectations: string;
	title: string;
	price: string;
	meetingLink: string;
}

const Event: FC<Props> = ({ title, venue, price, date, summary, expectations, meetingLink }) => {
	const navigate = useNavigate();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.4 }}
			className="mt-7 md:mt-14 w-full lg:mt-[90px] h-full flex flex-col lg:flex-row gap-x-10 gap-y-8 mb-3 text-center md:text-left"
		>
			<img
				className="object-cover z-0 "
				src="/assets/event.png"
				alt=""
				loading="eager"
			/>

			<div className="flex flex-col justify-center md:items-start gap-y-3 max-w-[500px] text-[#606060]">
				<h2 className="text-[25px] lg:text-[36px] text-left font-medium leading-[30px] lg:leading-normal tracking-wide">{title}</h2>
				<p className="text-[#606060] text-left font-light leading-5 lg:text-xl">
					<img
						src="/assets/date.svg"
						className="inline mr-2 text-left"
						alt=""
					/>
					{date}
				</p>
				<p className="text-[#606060] font-light text-left leading-5 lg:text-xl">
					<img
						src="/assets/location.svg"
						className="inline mr-2 text-left"
						alt=""
					/>
					{venue}
				</p>
				<p className="text-[#606060] text-left font-light leading-5 lg:text-xl">
					<img
						src="/assets/tag.svg"
						className="inline mr-2 text-left"
						alt=""
					/>
					{price}
				</p>
				<div className="lg:text-xl mb-5 text-left">
					<h3 className="font-semibold mb-5">Summary</h3>
					<p>{summary}</p>
				</div>
				<div className="lg:text-xl text-left">
					<h3 className="font-semibold mb-5">What to expect</h3>
					<Markdown options={{ wrapper: "article" }}>{expectations}</Markdown>
				</div>

				<button
					onClick={() => navigate(meetingLink)}
					className="font-medium md:font-bold mt-5 rounded-lg lg:text-lg max-w-[200px] px-9 py-4  border-2 border-black hover:bg-black hover:text-white font-inter focus:bg-black focus:text-white transition-colors duration-500"
				>
					Book a Slot
				</button>
			</div>
		</motion.div>
	);
};

export default Event;
