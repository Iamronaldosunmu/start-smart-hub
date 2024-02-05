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
						heading="About Doyin Adetona"
						paragraphs={[
							"With a decade-long journey in the realms of Human Resources, Talent Acquisition, Diversity, Equity, and Inclusion (DEI), and Consulting, Doyin is a seasoned professional renowned for crafting and implementing strategic workforce solutions. Having spent several years at KPMG, a global leader in professional services, Doyin honed a comprehensive skill set and strategic mindset that continues to drive success in every venture",
						]}
					/>
					<TextSection
						heading="KPMG Legacy And Consultative Approach"
						paragraphs={["Having been an integral part of the KPMG family, Doyin imbibed the values of excellence, integrity, and innovation. The consultative approach cultivated during this tenure forms the cornerstone of StartSmartHub’s methodology. Doyin believes in not just meeting but exceeding client expectations by understanding their unique needs and crafting tailored solutions."]}
					/>
					<TextSection
						heading="Vision For StartSmartHub"
						paragraphs={["At StartSmartHub, Doyin’s vision is to be a trailblazer in HR, talent acquisition, and DEI consulting. The commitment to delivering transformative solutions, combined with an unwavering dedication to client success, defines Doyin’s leadership."]}
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
				{/* <TextSection
					heading="Who We Are"
					paragraphs={["At StartSmartHub, we are a team of seasoned HR professionals, strategists, and consultants united by a common purpose – to redefine the human resources landscape. With a collective passion for people and organizational development, we bring a wealth of expertise to every partnership."]}
				/> */}
				<div
					data-aos-duration="700"
					data-aos="zoom-in"
					data-aos-delay="700"
					className="w-full [&>*:not(:last-child)]:mr-2 flex-wrap"
				>
					<p className="font-semibold text-center mb-4 text-[36px] ">Who We Are</p>
					<p className="text-[#71717A] leading-7 lg:leading-9 lg:text-xl">At StartSmartHub, we are a team of seasoned HR professionals, strategists, and consultants united by a common purpose – to redefine the human resources landscape. With a collective passion for people and organizational development, we bring a wealth of expertise to every partnership.</p>
				</div>
				<div
					data-aos-duration="700"
					data-aos="zoom-in"
					data-aos-delay="700"
					className="font-semibold mb-7 text-center text-[36px] mt-10 [&>*:not(:last-child)]:mr-2 flex-wrap"
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
