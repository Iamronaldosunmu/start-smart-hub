import Hero from "../components/HomeHero/Hero";
import Service from "../components/ServicesComponent/Service";
import Services from "../components/ServicesComponent/Services";
import Bookings from "../components/Booking";
import Footer from "../components/Footer";
import Billing from "../components/Services/Billing/Billing";
import Container from "../components/Container/HeroContainer";
import Goals from "../components/Services/Goals/Goals";
import BodyContainer from "../components/Container/BodyContainer";
import Information from "../components/Services/Information/Information";
import Grid from "../components/Services/Grid/Grid";


const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Goals />
      <BodyContainer>
        <Information/>
      </BodyContainer>
       <Grid/>
      <BodyContainer>
       
        <Services />
        <Service
          number={1}
          imageUrl="/src/assets/service.png"
          title="Resume building"
          text="We craft compelling and tailored resumes that highlight your skills, experiences and achievements to make a lasting impression on emlpyers."
        />
        <Service
          number={2}
          imageUrl="/src/assets/service.png"
          title="Resume review"
          text="Get expert feedback on your existing resume to identify areas for improvement and maximize its impact in your job search."
        />
        <Service
          number={3}
          imageUrl="/src/assets/service.png"
          title="LinkedIn Optimization"
          text="We optimize your LinkedIn profile to make it stand out to recruiters, showcasing your professional brand and accomplishments."
        />
        <Service
          number={4}
          imageUrl="/src/assets/service.png"
          title="Interview prep coaching"
          text="Prepare for interviews with personalized coaching sessions. Learn efffective strategies and gain the confidence to ace your interviews."
        />
        <Service
          number={5}
          imageUrl="/src/assets/service.png"
          title="Job application tailoring coaching"
          text="Craft tailored job applications that align with your target positions, increasing your chances of getting noticed by employers."
        />
        <Service
          number={6}
          imageUrl="/src/assets/service.png"
          text="Navigate career transitions with ease. Our coaching helps you to explore new oppurtunities and make successful transitions."
          title="Career Transitioning Coaching"
        />
        <Service
          number={7}
          imageUrl="/src/assets/service.png"
          title="Career Interest and passion Discovery"
          text="Discovery  your true career interests and passions through guided exploration, helping you find a fulfilling career path."
        />
        <Service
          number={8}
          imageUrl="/src/assets/service.png"
          title="Resume Clinic"
          text="Join our resume clinic sessions to recieve quick, actionable devices and tips for improving your resume."
        />
        <Service
          number={9}
          imageUrl="/src/assets/service.png"
          title="Career workshops and training"
          text="Participate in our workshops and training sessions to build essential job search skills, from networking to negotiation, and stay ahead in your career journey."
        />
        <Service
          number={10}
          imageUrl="/src/assets/service.png"
          title="Career/personal development coaching"
          text="We offer personalized guidance, unwavering support, and tailored strategies to accelerate your professional growth and help you achieve your career goals and personal breakthroughs."
        />
        

      </BodyContainer>
      <Billing />
        <Bookings />
        <Footer />
    </>
  );
};

export default Home;
