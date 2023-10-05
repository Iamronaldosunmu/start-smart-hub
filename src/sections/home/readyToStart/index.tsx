import Container from "../../../components/container";
import TextContainer from "../../../components/textContainer";

const ReadyToStart = () => {
	return (
		<section className="relative bg-[#00998A] max-h-[482px] py-16 lg:py-20 w-full flex items-center mt-14 lg:mt-20">
			<Container className="text-center">
				<TextContainer>
					<h2 className="text-[#FBF5FD] text-[24px] lg:text-[40px] font-bold">
						Ready to start your career journey? <br /> We’ll help you find your way!
					</h2>
				</TextContainer>
				<TextContainer className="mt-4">
					<p className="text-base lg:text-[28px] leading-[21px] lg:leading-[41px] text-[#FFFFFFDE]">
						Welcome to StartSmart Hub- Your path to Career success! <br className="hidden lg:block" /> At Startsmart Hub, we’re dedicated to helping you achieve your professional <br className="hidden lg:block" /> goals and unlock your full potential.
					</p>
				</TextContainer>
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
