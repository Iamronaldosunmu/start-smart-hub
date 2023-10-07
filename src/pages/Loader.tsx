import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftIcon = () => (
	<svg
		width="63"
		height="63"
		viewBox="0 0 63 63"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.82254 54.5216C20.1285 65.5718 38.2967 65.4107 49.3185 54.1338C57.4699 45.7939 61.3412 31.6622 62.1567 21.5077C62.332 19.3241 62.5315 17.1589 62.5037 15.0184C62.4717 12.5307 62.4068 4.39973 60.2558 2.15987C58.108 -0.0765455 49.7556 -0.0568944 47.2831 0.0260557C42.952 0.171269 38.6621 0.666757 34.3394 1.54818C25.2528 3.40107 15.1487 7.17094 8.17719 14.3037C-2.51853 25.2468 -2.40049 43.5522 8.82254 54.5216Z"
			fill="url(#paint0_linear_1064_150)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1064_150"
				x1="46"
				y1="52"
				x2="18"
				y2="7.5"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#E7747F" />
				<stop
					offset="1"
					stop-color="#FFCF6A"
					stop-opacity="0.8"
				/>
			</linearGradient>
		</defs>
	</svg>
);

const RightIcon = () => {
	return (
		<svg
			width="63"
			height="64"
			viewBox="0 0 63 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M54.1775 8.97839C42.8715 -2.07184 24.7033 -1.91079 13.6815 9.36619C5.53007 17.706 1.65879 31.8378 0.843279 41.9922C0.668049 44.1759 0.468474 46.3411 0.49626 48.4816C0.528304 50.9693 0.593201 59.1002 2.74423 61.3401C4.89201 63.5765 13.2444 63.5568 15.7169 63.4739C20.048 63.3287 24.3379 62.8332 28.6606 61.9518C37.7472 60.0989 47.8513 56.329 54.8228 49.1963C65.5185 38.2531 65.4005 19.9477 54.1775 8.97839Z"
				fill="#5F9DF7"
			/>
		</svg>
	);
};

const Loader = () => {
	const [showText, setShowText] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const navigate = useNavigate();

	return (
		<motion.main
			initial={{ opacity: 1, scale: 1 }}
			animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 0.9 : 1, transition: { duration: 0.4, delay: 0.4 } }}
			onAnimationComplete={() => {
				if (fadeOut) setTimeout(() => navigate("/home"), 500);
			}}
			className="h-screen flex items-center justify-center relative"
		>
			<motion.div
				onAnimationComplete={() => setShowText(true)}
				initial={{ scale: 1.5 }}
				animate={{ scale: [1.5, 1.7, 1], x: -100, transition: { scale: { delay: 1.2 }, x: { delay: 1.45, duration: 0.5 } } }}
				className="flex items-center justify-center"
			>
				<motion.div
					className="z-10 relative"
					initial={{ rotate: -45, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1, x: 23, y: -13, transition: { opacity: { duration: 1 }, rotate: { delay: 0.5, duration: 0.6 }, x: { delay: 0.5, duration: 0.5 }, y: { delay: 0.5, duration: 0.3 } } }}
				>
					<LeftIcon />
				</motion.div>
				<motion.div
					initial={{ rotate: -45, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1, x: -23, y: 13, transition: { opacity: { duration: 1 }, rotate: { delay: 0.5, duration: 0.6 }, x: { delay: 0.5, duration: 0.5 }, y: { delay: 0.5, duration: 0.3 } } }}
				>
					<RightIcon />
				</motion.div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: showText ? 1 : 0, scale: showText ? 1 : 0.95, transition: { delay: 0.2, duration: 0.4 } }}
				onAnimationComplete={() => {
					if (showText) setFadeOut(true);
				}}
				className="text-[28px] leading-[28px] absolute top-0 left-0 right-0 bottom-0 flex items-center flex-col justify-center"
			>
				<p className="relative font-semibold left-[20px] poppins-font">
					Start <br /> Smart Hub{" "}
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="absolute -top-[10px] left-[70px] text-[8px]"
					>
						TM
					</motion.span>
				</p>
				<p className="text-[12px] left-[20px] relative leading-[14px] italic">start smart, build right...</p>
			</motion.div>
		</motion.main>
	);
};

export default Loader;
