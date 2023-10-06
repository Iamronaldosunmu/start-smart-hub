import Container from "../../../components/Container";

const Grid = () => {
	return (
		<div className="grid lg:grid-cols-2 mt-14 lg:mt-[100px]">
			<div className="bg-[#FFF2EC] py-14">
				<Container>
					<p className="mb-8 text-3xl font-semibold font-DMSans">Here's what you can expect from us...</p>
					<ul className="text-sm md:text-base leading-6 list-disc [&>*]:mb-1 [&>*]:ml-5 font-poppins">
						<li>Personalized guidance, empathy and support</li>
						<li>Expertise and insights</li>
						<li>Transparent communication</li>
						<li>collaboration</li>
						<li>Inclusivity</li>
						<li>Continous improvement and empowerment</li>
					</ul>
				</Container>
			</div>
			<div className="w-full h-[585px] hidden lg:block">
				<img
					src="/assets/img1.png"
					className="w-full h-full object-cover"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Grid;
