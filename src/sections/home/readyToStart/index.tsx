import Container from "../../../components/Container";
import TextAnimation from "../../../components/TextAnimation";

const ReadyToStart = () => {
	return (
		<section className="relative bg-[#00998A] max-h-[482px] py-12 md:py-14 lg:py-20 w-full mt-14 lg:mt-[100px]">
			<Container className="text-center lg:px-20 flex flex-col justify-center items-center gap-y-2 lg:gap-y-4">
				<h2
					// data-aos="zoom-in"
					// data-aos-duration="700"
					className="text-[#FBF5FD] text-[22px] lg:text-[40px] font-bold leading-normal"
				>
					Ready to start your career journey? <br /> We’ll help you find your way!
				</h2>
				<p
					// data-aos="zoom-in"
					// data-aos-duration="700"
					className="text-base lg:text-[28px] leading-[21px] lg:leading-[41px] text-[#FFFFFFDE]"
				>
					Welcome to StartSmart Hub- Your path to Career success! <br /> At Startsmart Hub, we’re dedicated to helping you achieve your professional <br /> goals and unlock your full potential.
				</p>
			</Container>
			<img
				className="w-full h-full object-cover absolute top-0"
				src="/assets/bubbles.png"
				alt=""
			/>
		</section>
	);
};

export default ReadyToStart;
