import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
	percentage: number;
}

const ProgressBar: FC<Props> = ({ percentage }) => {
	return (
		<div className="h-[10px] rounded-xl border relative">
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: `${percentage}%` }}
				transition={{ duration: 0.6, ease: "easeIn" }}
				className="h-full rounded-xl bg-[#4B8CEA] absolute"
			></motion.div>
		</div>
	);
};

export default ProgressBar;
