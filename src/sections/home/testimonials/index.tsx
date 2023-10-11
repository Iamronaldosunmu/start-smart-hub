import { AnimatePresence, wrap } from "framer-motion";
import { useState } from "react";
import Testimonial from "../../../components/Testimonial";
import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";

const Testimonials = () => {
	const [page, setPage] = useState(0);
	const testimonials = [
		{
			name: "Zainab Adetona",
			body: "My resume was built from and scratch and I used it for my admissions into college.                                                       --Rounding up a Marketing Management Program at centennial college in Dec 2023                               ",
		},
		{
			name: "Kimberly Osunde | Project and Communications Assistant @ Tribunals Ontario | Strategic Communications",
			body: "I had an amazing experience with Doyin's HR services! * Her guidance and support were invaluable, and I feel more confident in my job search now. I highly recommend her services to anyone looking to enhance their career prospects. Thank you, Doyin!  ",
		},
		{
			name: "Sepi Wakama | Certified Scrum Master | Project Analyst and Coordination| Fostering Agile Collaboration and Delivering High-Performing, Customer-Centric Teams",
			body: "Doyin was really amazing and wonderful in helping me tailor my experience * (existing and upcoming) to what the industry I am transitioning into. I definitely recommend her for everyone to work with. Thank you so much Doyin 😊😊",
		},
		{
			name: "Tiwa Sikuade | Finance Leader | Talent Acquisition Lead |  Talent Management | eople Analytics",
			body: "Doyin supported me with building my resume * and with interview preparations when I began my job search in Canada. Her recommendations were well researched, detailed and practical and were very helpful in acing interviews and getting offers.",
		},
	];

	const contentIndex = wrap(0, testimonials.length, page);
	return (
		<Container className="mt-14 lg:mt-[100px] flex flex-col justify-center items-center overflow-hidden">
			<TextAnimation
				className="text-[40px] text-center font-medium flex gap-x-2 flex-wrap justify-center"
				text="Client Testimonials"
			/>
			<AnimatePresence
				mode="wait"
				custom={page}
			>
				<Testimonial
					key={`${page} ${contentIndex}`}
					forward={() => setPage(page + 1)}
					backward={() => setPage(page - 1)}
					name={testimonials[contentIndex].name}
					body={testimonials[contentIndex].body}
				/>
			</AnimatePresence>
			<div className="pt-4 pb-3 flex justify-center gap-x-5">
				{testimonials.map((_, index) => (
					<button
						key={index}
						onClick={() => setPage(index)}
						className={`rounded-full h-2 w-2 bg-black ${contentIndex === index ? "opacity-100" : "opacity-20"} transition-colors duration-200`}
					></button>
				))}
			</div>
		</Container>
	);
};

export default Testimonials;
