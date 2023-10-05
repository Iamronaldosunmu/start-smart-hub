import Form from "../components/consultation/Form";

const Consultation = () => {
	return (
		<div className="mt-10 lg:mt-[72px]">
			<img
				className="h-[300px] w-full object-cover hidden lg:block"
				src="/assets/header.png"
				alt=""
			/>
			<img
				className="h-[142px] w-full object-cover block lg:hidden"
				src="/assets/header_mobile.png"
				alt=""
			/>
			<Form />
		</div>
	);
};

export default Consultation;
