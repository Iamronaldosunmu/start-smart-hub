import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
	percentage: number;
	colour?: string;
}

const ProgressBar: FC<Props> = ({ percentage, colour = "#007aff" }) => {
	return (
		<div className="h-[10px] rounded-xl border relative">
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: `${percentage}%` }}
				transition={{ duration: 0.6, ease: "easeIn" }}
				className={`h-full rounded-xl bg-[${colour}] absolute`}
			></motion.div>
		</div>
	);
};

export default ProgressBar;
