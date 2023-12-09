import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
	id: string;
	title: string;
	description: string;
	duration: number;
	price: number;
	image?: string;
}

const CourseCard: FC<Props> = ({ id, title, description, duration, price, image }) => {
	return (
		<Link to={`/courses/${id}`}>
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.07 }}
				transition={{ duration: 0.25, ease: "linear" }}
				className="overflow-hidden rounded-lg relative w-full max-w-[360px] border-2 border-[#e5e7e8] hover:shadow-lg"
			>
				<div className="relative w-full h-full">
					<img
						className="h-[196px] relative w-full object-cover"
						src={image}
						alt=""
					/>
				</div>
				<div className="p-4">
					<div className="flex justify-between items-center mb-3">
						<h2 className="font-semibold text-base font-poppins">{title}</h2>
						<div className="bg-[#4b8cea] font-medium md:font-bold inline px-3 py-1 rounded-2xl text-sm text-white">{`${duration}h`}</div>
					</div>
					<p className="text-sm mb-3 font-DMSans">{description}</p>
					<span className="font-extrabold font-inter">{`$${price}`}</span>
				</div>
			</motion.div>
		</Link>
	);
};

export default CourseCard;
