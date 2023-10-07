import { useState } from "react";
import TextAnimation from "../../../components/TextAnimation";
import Container from "../../../components/container";

const Testimonials = () => {
	const [pages] = useState([1, 2, 3, 4]);
	return (
		<Container className="flex flex-col justify-center items-center mt-14 gap-y-[30px] font-poppins lg:mt-[100px]">
			<TextAnimation
				className="text-[40px] text-center font-medium flex gap-x-2 flex-wrap"
				text="Client Testimonials"
			/>
			<div
				data-aos="zoom-in"
				data-aos-duration="700"
				data-aos-delay="300"
				className="overflow-hidden rounded-full w-[100px] h-[100px]"
			>
				<img
					src="/assets/profilePic.png"
					alt=""
				/>
			</div>
			<p
				data-aos="fade-up"
				data-aos-duration="700"
				data-aos-delay="700"
				className="text-base leading-8 text-center lg:px-5"
			>
				<span className="font-bold">achieving each task without defaulting to avoidance. </span>Grace's guidance helped me practice making small mental shifts when I was going through the most stressful time in my work and personal life. Her lessons both challenged my perspective on forming new habits and behaviors I've previously found challenging, while also helping me with what I already knew
				about myself.
			</p>
			<div
				data-aos="fade-up"
				data-aos-duration="700"
				data-aos-delay="1000"
				className="text-cnter font-bold text-[18px]"
			>
				Tiffany | Sr. Product Designer
			</div>
			<div
				data-aos="zoom-out"
				data-aos-duration="700"
				data-aos-delay="1000"
				className="pt-4 pb-3 flex justify-center gap-x-5"
			>
				{pages.map((page) => (
					<button
						key={page}
						className="rounded-full opacity-20 h-2 w-2 bg-black focus:opacity-100"
					></button>
				))}
			</div>
		</Container>
	);
};

export default Testimonials;
