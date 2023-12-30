import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../../ProgressBar";

interface Props {
	id: number;
	title: string;
	progress: number;
	image: {
		url: string;
		alt: string;
	};
}

const EnrolledCourseCard: FC<Props> = ({ id, title, image, progress }) => {
	return (
		<Link
			to={`/courses/enrolled/${id}`}
			className="cursor-pointer"
		>
			<motion.div
				// initial={{ scale: 1 }}
				// whileHover={{ scale: 1.07 }}
				// transition={{ duration: 0.3 }}
				className="overflow-hidden rounded-lg relative w-full max-w-[360px] h-[400px] grid grid-rows-[200px_auto] border-2 border-[#e5e7e8] hover:shadow-lg transition-shadow"
			>
				<img
					className="h-full relative w-full object-cover scale-[1.05]"
					src={image.url}
					alt={image.alt}
				/>
				<div className="p-4 pt-8 h-full w-full grid">
					<div>
						<h2 className="font-semibold text-lg font-poppins mb-5	">{title}</h2>
						<ProgressBar percentage={progress} />
					</div>
					<div className="self-end text-right font-DMSans">
						<p className="text-lg font-bold leading-4">{`${progress}%`}</p>
						<p className="text-sm font-medium">COMPLETE</p>
					</div>
				</div>
			</motion.div>
		</Link>
	);
};

export default EnrolledCourseCard;
