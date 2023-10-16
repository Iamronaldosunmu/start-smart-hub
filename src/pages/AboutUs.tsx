import TextSection from "../components/BodyText";
import Bookings from "../components/Booking";
import Container from "../components/container";
import GridComponent from "../components/Grid";
import PageContainer from "../components/PageContainer";
import Hero from "../sections/services/Hero";

const AboutUs = () => {
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px]">
			<Hero />
			<section className="bg-[#FFF3EE] mt-8 lg:mt-12 py-20">
				<Container className="grid gap-y-0 lg:gap-y-[0px]">
					<TextSection
						heading="Hello, I'm Doyin!"
						paragraphs={[
							"I’m the founder of StartSmart Hub. With over a decade of experience as a senior tech recruiter and career coach, I’ve had the privilege of providing compassionate guidance to individuals at every stage of their careers.",
							"Whether you’re a recent graduate embarking on your professional journey, in the midst of a mid-career transition, a high-school student uncertain about your academic path, or a newcomer navigating a new job market, We are here to be your dedicated partner on your career expedition.",
						]}
					/>
					<TextSection
						heading="Making the start"
						paragraphs={[
							"My own journey led me to Canada in the midst of a global pandemic- a challenging time when movement was restricted, opportunities were scarce and uncertainty loomed large. As a result of this experience, I gained a profound understanding of the hurdles newcomers face when transitioning into unfamiliar job markets. I recognized the profound information gap and the scarcity of rescources available to new immigrant job seekers.",
							"Driven by a passion to do more, I felt the need to create a meaningful resource to empower newcomers and bridge the knowledge gap they often encounter during their career journeys post-relocation. This led to the birth of StartSmart Hub.",
						]}
					/>
				</Container>
			</section>
			<GridComponent />
			<Container className="mt-10">
				<TextSection
					heading="Fast-forward to today, "
					paragraphs={[" I’ve had the privilege of collaborating with numerous hiring managers, fellow recruiters, and helping over 50 diverse candidates secure jobs that have not only increased their income but also facilitated their transformative career transitions."]}
				/>
				<TextSection
					heading="Our Mission"
					paragraphs={["At StartSmart Hub, our mission is simple yet impactful: To help you “Start Smart and Build Right”. We’re dedicated to providing you with the knowledge, resources and support you need to thrive in your new career, and we’re excited to embark on this journey with you.", "Welcome to StartSmart Hub, where your career success story begins!"]}
				/>
			</Container>
			<Bookings />
		</PageContainer>
	);
};

export default AboutUs;
