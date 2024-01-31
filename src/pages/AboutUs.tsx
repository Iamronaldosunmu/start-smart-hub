import TextSection from "../components/BodyText";
import Bookings from "../components/Booking";
import Card from "../components/Card/Card";
import Container from "../components/container";
import GridComponent from "../components/Grid";
import PageContainer from "../components/PageContainer";
import Hero from "../sections/services/Hero";

const AboutUs = () => {
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px]">
			<Hero />
			<section className="bg-[#FFF3EE] mt-8 lg:mt-12 py-20">
				<Container className="grid  [&>*:not(:last-child)]:mb-0 lg:[&>*:not(:last-child)]:mb-[0px]">
					{/* <TextSection
						heading="About StartSmartHub"
						paragraphs={["Welcome to StartSmartHub where human resources is not just a function; it's a transformative journey. At the core of our philosophy is a deep commitment to fostering workplaces that inspire, innovate, and thrive. We are more than an HR company; we are your dedicated partners in building a workplace that reflects your values and fuels your success."]}
					/> */}
					<TextSection
						heading="Who We Are"
						paragraphs={["At StartSmartHub, we are a team of seasoned HR professionals, strategists, and consultants united by a common purpose – to redefine the human resources landscape. With a collective passion for people and organizational development, we bring a wealth of expertise to every partnership."]}
					/>
				</Container>
			</section>

			<Container className="mt-[100px] my-[150px]">
				{/* <TextSection
					heading="Why Choose StartSmartHub"
					paragraphs={[
						"Expertise: Benefit from the extensive knowledge and experience of our HR professionals.",
						"Tailored Solutions: Every organization is unique, and so are our solutions. We tailor our services to meet your specific needs.",
						"Innovation: Stay ahead in the HR realm with our innovative approaches and cutting-edge strategies.",
						"Client-Centric: Your success is our priority. We are dedicated to building lasting partnerships and driving your organization toward excellence.",
					]}
				/> */}
				<div
					data-aos-duration="700"
					data-aos="zoom-in"
					data-aos-delay="700"
					className="font-semibold mb-7 text-center text-[36px] [&>*:not(:last-child)]:mr-2 flex-wrap"
				>
					Why Choose Start Smart Hub
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="700"
					data-aos-delay="800"
					className="flex lg:flex place-items-center flex-col md:grid md:grid-cols-2 items-center justify-center lg:flex-row lg:space-x-9 space-y-5 lg:space-y-0"
				>
					<Card
						url="/assets/expertise.png"
						title="Expertise"
						text="Benefit from the extensive knowledge and experience of our HR professionals."
					/>
					<Card
						url="/assets/solution.png"
						title="Tailored Solutions"
						text="Every organization is unique, and so are our solutions. We tailor our services to meet your specific needs."
					/>
					<Card
						url="/assets/innovation.png"
						title="Innovation"
						text="Stay ahead in the HR realm with our innovative approaches and cutting-edge strategies."
					/>
					<Card
						url="/assets/client.png"
						title="Client-Centric"
						text="Your success is our priority. We are dedicated to building lasting partnerships and driving your organization toward excellence."
					/>
				</div>
			</Container>
			<Bookings />
		</PageContainer>
	);
};

export default AboutUs;
