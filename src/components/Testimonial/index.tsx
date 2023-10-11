import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
	name: string;
	body: string;
	forward: () => void;
	backward: () => void;
}

const variants = {
	initial: {
		x: 500,
		opacity: 0,
	},
	enter: {
		x: 0,
		opacity: 1,
	},
	exit: {
		x: -500,
		opacity: 0,
	},
};

const stringSplitter = (text: string) => {
	const arr = text.split(" ");
	if (arr.includes("*")) {
		const bold = arr.splice(0, arr.lastIndexOf("*")).join(" ");
		const regular = arr
			.splice(arr.lastIndexOf("*"))
			.filter((a) => a !== "*")
			.join(" ");
		return [bold, regular];
	}
	return ["", text];
};

const Testimonial: FC<Props> = ({ name, body, forward, backward }) => {
	const [bold, regular] = stringSplitter(body);

	const swipeConfidenceThreshold = 1000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};

	return (
		<motion.div
			className="flex flex-col justify-center items-center gap-y-[30px] font-poppins h-[480px] sm:h-[300px]"
			variants={variants}
			initial="initial"
			animate="enter"
			exit="exit"
			transition={{ x: { type: "spring", stiffness: 150, damping: 20 }, opacity: { duration: 0.2 } }}
			drag="x"
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={1}
			onDragEnd={(e, { offset, velocity }) => {
				const swipe = swipePower(offset.x, velocity.x);

				if (swipe < -swipeConfidenceThreshold) {
					forward();
				} else if (swipe > swipeConfidenceThreshold) {
					backward();
				}
			}}
		>
			{/* <div className="overflow-hidden rounded-full w-[100px] h-[100px]">
				<img
					src="/assets/profilePic.png"
					alt=""
				/>
			</div> */}
			<p className="text-base leading-8 text-center lg:px-5">
				<span className="font-bold">{bold}</span> {regular}
			</p>
			<div className="text-center font-bold sm:text-[18px] lg:text-xl">{name}</div>
		</motion.div>
	);
};

export default Testimonial;
