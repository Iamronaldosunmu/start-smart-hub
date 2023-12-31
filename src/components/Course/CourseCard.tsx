import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	id: number;
	title: string;
	description: string;
	duration: number;
	price: string;
	image: {
		url: string;
		alt: string;
	};
}

const CourseCard: FC<Props> = ({ id, title, description, duration, price, image }) => {
	return (
		<Link to={`/courses/${id}`}>
			<motion.div
				// initial={{ scale: 1 }}
				// whileHover={{ scale: 1.07 }}
				// transition={{ duration: 0.3 }}
				className="overflow-hidden rounded-lg relative w-full max-w-[300px] lg:max-w-[360px] h-[363px] lg:h-[433px] grid grid-rows-[150px_auto]  lg:grid-rows-[200px_auto] border-2 border-[#e5e7e8] hover:shadow-lg transition-shadow"
			>
				<img
					className="h-full relative w-full object-cover scale-[1.05]"
					src={image.url}
					// src="/assets/sample.jpg"
					alt={image.alt}
				/>
				{/* <div className="relative w-full h-full"></div> */}
				<div className="p-4 h-full w-full">
					<div className="flex justify-between gap-x-6 items-center mb-3">
						<h2 className="font-semibold text-base font-poppins">{title}</h2>
						<div className="bg-[#4b8cea] font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-white">{`${duration}h`}</div>
					</div>
					<p className="hidden sm:block text-sm mb-3 font-DMSans">{description.length < 228 ? description : `${description.slice(0, 130)}...`}</p>
					<p className="sm:hidden text-sm mb-3 font-DMSans">{description.length < 80 ? description : `${description.slice(0, 80)}...`}</p>
					<span className="font-extrabold font-inter">{`$${price}`}</span>
				</div>
			</motion.div>
		</Link>
	);
};

export default CourseCard;
