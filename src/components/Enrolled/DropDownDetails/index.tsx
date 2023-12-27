/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
	index: number;
	name: string;
	sections: any[];
}

const DropDownDetails: FC<Props> = ({ index, name, sections }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full bg-[#7F6362] rounded-md text-white p-4 font-inter">
			<div
				onClick={() => setOpen(!open)}
				className="flex justify-between w-full items-center cursor-pointer"
			>
				<div>
					<h2 className="md:text-lg font-semibold inline flex-grow text-left">
						{`${index} - ${name}`} <span className="text-base">{`(${100}m)`}</span>
					</h2>
					<div className="flex gap-x-2 mt-2 items-center">
						<img
							className="w-4 h-4 object-cover"
							src="/assets/complete.svg"
						/>
						<span className="text-sm">7 / 7 Complete</span>
					</div>
				</div>
				<motion.img
					initial={{ rotate: 0 }}
					animate={{ rotate: open ? 180 : 0 }}
					className="w-4 h-4 object-cover"
					src="/assets/chevron-up-white.svg"
				/>
			</div>
			<AnimatePresence>
				{open && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeIn" }}
						className="mt-4 space-y-4"
					>
						{sections?.length &&
							sections?.map(({ title, watched }, index) => (
								<li
									key={index}
									className={`${title === null || title === "" ? "hidden" : "grid"} grid-cols-[20px_auto_80px] sm:grid-cols-[30px_auto_100px] items-center space-x-4 md:space-x-4 w-full mb-2 bg-white px-3 py-3 text-black rounded-md text-sm sm:text-base`}
								>
									<img
										className="w-5 h-5 sm:w-6 sm:h-6 object-cover"
										src="/assets/complete-filled.svg"
										alt=""
									/>
									<div className="flex items-center gap-x-2">
										<img
											className="w-5 h-5 object-cover"
											src="/assets/monitor.svg"
											alt=""
										/>
										<span className="text-left w-full font-semibold">{`${title} (1:02)`}</span>
									</div>
									<button className="rounded px-3 font-semibold py-1 text-sm justify-self-end bg-[#723188] text-white">{watched ? "Review" : "Start"}</button>
								</li>
							))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropDownDetails;
