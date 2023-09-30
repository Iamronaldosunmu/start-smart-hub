import Container from "../../../components/container";
import TextContainer from "../../../components/textContainer";

const ReadyToStart = () => {
	return (
		<section className="relative bg-[#00998A] h-[482px] w-full flex items-center mt-[152px]">
			<Container className="text-center">
				<TextContainer>
					<h2 className="text-[#FBF5FD] text-[40px] font-bold">
						Ready to start your career journey? <br /> We’ll help you find your way!
					</h2>
				</TextContainer>
				<TextContainer className="mt-4">
					<p className="text-[28px] leading-[41px] text-[#FFFFFFDE]">
						Welcome to StartSmart Hub- Your path to Career success! <br /> At Startsmart Hub, we’re dedicated to helping you achieve your professional <br /> goals and unlock your full potential.
					</p>
				</TextContainer>
			</Container>
			<img
				className="w-full h-full object-cover absolute top-0"
				src="/src/assets/bubbles.png"
				alt=""
			/>
		</section>
	);
};

export default ReadyToStart;
