import Form from "../components/ContactUs/Form/Form";
// import Footer from "../components/Footer";
import Map from "../components/ContactUs/Map";

const ContactUs = () => {
	return (
		<div className="w-[100vw] flex justify-center mt-14 lg:mt-[100px]">
			<div className="w-full max-w-[1440px] self-stretch">
				<div className="flex justify-center items-center flex-col mb-9 px-5">
					<h1 className="mb-5 text-4xl font-bold  mt-14 ">Contact Us</h1>
					<p className="text-center">Got any questions or thoughts? We're just a message away!</p>
				</div>
				<div className="flex flex-col-reverse lg:flex-row gap-12 justify-between lg:mb-20 items-center relative sm:px-16 lg:px-32 sm:py-[50px] py-8 lg:py-[100px]">
					<div className="flex-1 h-full max-w-[545px] px-4 sm:px-0">
						<Form />
					</div>
					<div className="lg:flex-1 z-20 max-w-[545px] lg:self-stretch h-[300px] lg:h-auto w-full mx-2.5">
						<Map position={[6.45407, 3.39467]} />
					</div>
					<div className="w-[20vw] self-end bg-[#183A4A] hidden lg:block h-full max-h-[904px] z-10 absolute max-w-[426px] right-0 top-0" />
				</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default ContactUs;
