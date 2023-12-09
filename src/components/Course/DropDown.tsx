import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
	title: string;
	duration: number;
}

const DropDown: FC<Props> = ({ title, duration }) => {
	const [open, setOpen] = useState(false);
	const sections = [
		{ title: "Welcome", type: "video" },
		{ title: "Prerequisites", type: "video" },
		{ title: "Source Code", type: "file" },
		{ title: "Questions and Support", type: "file" },
		{ title: "Connect with Me", type: "file" },
		{ title: "Learning Paths", type: "file" },
	];

	return (
		<div className="w-full max-w-[672px]">
			<div
				onClick={() => setOpen(!open)}
				className="flex justify-between w-full items-center cursor-pointer py-2"
			>
				<h2 className="text-lg font-semibold inline flex-grow">
					{title} <span className="text-base">{`(${duration}m)`}</span>
				</h2>
				<motion.img
					initial={{ rotate: 0 }}
					animate={{ rotate: open ? 180 : 0 }}
					className="w-4 h-"
					src="/assets/chevron-up.svg"
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
						{sections.map(({ title, type }, index) => (
							<li
								key={index}
								className="flex items-center space-x-4 w-full mb-2"
							>
								<img
									className="w-4 h-4 object-cover"
									src={`/assets/${type === "video" ? "camera" : "file"}.svg`}
									alt=""
								/>
								<span>{title}</span>
							</li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropDown;
