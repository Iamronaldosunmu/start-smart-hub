import Container from "../../../components/container";

const ReadyToStart = () => {
	return (
		<section className="relative bg-[#00998A] max-h-[482px] py-12 md:py-14 lg:py-20 w-full mt-14 lg:mt-[100px]">
			<Container className="text-center lg:px-20 flex flex-col justify-center items-center  [&>*:not(:last-child)]:mb-2 lg:[&>*:not(:last-child)]:mb-4">
				<h2
					data-aos="zoom-in"
					data-aos-duration="700"
					className="text-[#FBF5FD] text-[22px] lg:text-[40px] font-bold leading-normal"
				>
					Let's Transform Your HR Experience Together!
				</h2>
				<p
					data-aos="zoom-in"
					data-aos-duration="700"
					className="text-base lg:text-[28px] leading-[21px] lg:leading-[41px] text-[#FFFFFFDE]"
				>
					Partner with StartSmartHub and embark on a journey toward HR excellence. Contact us today to explore how our DEI, consulting, recruitment, program management and coaching consulting services can elevate your organization. Your success story starts here.
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
