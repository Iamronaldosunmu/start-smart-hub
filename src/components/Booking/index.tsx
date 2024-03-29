import { motion } from "framer-motion";
import { interactionAnimations } from "../../utils/framer-default-animations";
import { useNavigate } from "react-router-dom";
import { PopupButton } from "react-calendly";

const Bookings = () => {
	const navigate = useNavigate();
	return (
		<div className="relative flex justify-center items-center flex-col bg-red-50 mt-12 py-[66px]">
			<div className="text-center py-10 px-4 relative z-10">
				<div className="font-semibold text-[36px] justify-center lg:text-[50px] pb-5 leading-10 flex flex-wrap [&>*:not(:last-child)]:mr-2">
					{"Schedule a Conversation with Us Now".split(" ").map((word, index) => (
						<motion.div
							initial={{ y: 45, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
							}}
						>
							{word}
						</motion.div>
					))}
				</div>
				{/* <p
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="700"
					className="text-[#606060] pb-5"
				>
					Kickstart your journey to success with a coaching call today. Book now and let’s get started!
				</p> */}
				{/* <motion.button
					{...interactionAnimations}
					onClick={() => navigate("/services?scroll_to=services")}
					data-aos="zoom-in"
					data-aos-duration="700"
					data-aos-delay="1000"
					className="border-2 border-black px-6 py-2 text-base rounded-[10px] transition-colors hover:bg-black hover:text-white font-bold"
				>
					Book a call
				</motion.button> */}
				<button onClick={()=> navigate('/contact-us')} className="border-2 border-black px-6 py-2 text-base rounded-[10px] transition-colors hover:bg-black hover:text-white font-bold">Contact us</button>
			</div>
			<img
				className="object-cover w-full h-full absolute z-0"
				src="/public/assets/bubbles2.svg"
				alt=""
			/>
		</div>
	);
};

export default Bookings;
