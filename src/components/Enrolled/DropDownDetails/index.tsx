/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
	name: string;
	sections: any[];
}

const DropDownDetails: FC<Props> = ({ name, sections }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full max-w-[672px]">
			<div
				onClick={() => setOpen(!open)}
				className="flex justify-between w-full items-center cursor-pointer py-2"
			>
				<h2 className="text-sm md:text-lg font-semibold inline flex-grow text-left">
					{name} <span className="text-base">{`(${120}m)`}</span>
				</h2>
				<motion.img
					initial={{ rotate: 0 }}
					animate={{ rotate: open ? 180 : 0 }}
					className="w-4 h-"
					src="/assets/chevron-up-thick.svg"
				/>
			</div>
			<AnimatePresence>
				{open && (
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "easeIn" }}
						className="mt-2 font-poppins"
					>
						{sections?.length &&
							sections?.map(({ sectionText }, index) => (
								<li
									key={index}
									className={`${sectionText === null ? "hidden" : "flex"} items-center space-x-4 w-full mb-2`}
								>
									<img
										className="w-6 h-6 object-cover"
										// src={`/assets/${type === "video" ? "camera" : "file"}.svg`}
										src="/assets/camera.svg"
										alt=""
									/>
									<span>{sectionText}</span>
								</li>
							))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropDownDetails;
