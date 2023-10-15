import Container from "../../../components/container";
import TextAnimation from "../../../components/TextAnimation";

const Goals = () => {
	return (
		<div className="py-10 px-5 md:py-28 bg-hero-pattern object-fit w-full text-white items-center mt-14 lg:mt-[100px]">
			<Container className="m">
				<div className="flex flex-col justify-center items-center">
					<div
						className={"text-2xl md:text-3xl text-center lg:w-[750px] mb-5 font-semibold flex flex-wrap gap-x-2"}
						data-aos-duration="700"
						data-aos="zoom-in"
					>
						{" "}
						"We’re dedicated to providing you with the knowledge and support you need to thrive in your new career"{" "}
					</div>
					<p
						data-aos="zoom-in"
						data-aos-duration="700"
						className="text-lg md:text-xl text-center lg:w-[900px]"
					>
						At Startsmart, we are more than just your coaches; we’re your dedicated partners in success. We’re all about your goals. We want to explore your passions and we’re ready to walk this path with you. We’re with you every step of the way.
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Goals;
