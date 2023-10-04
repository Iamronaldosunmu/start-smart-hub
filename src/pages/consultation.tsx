import { useState } from "react";
import Container from "../components/container";
import Form from "../components/consultation/Form";

const Consultation = () => {
	const [pages] = useState([1, 2, 3, 4]);
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
			<Container className="my-10 lg:my-14">
				<div className="flex justify-center items-center gap-x-3">
					{pages.map((page) => (
						<div className="flex items-center w-full">
							<button className="rounded-full text-[#6F6C90] bg-[#EFF0F6] max-w-[24px] w-full h-6 mx-auto font-DMSans self-start">{page}</button>
							{page !== pages.length && <div className="ml-3 max-w-[63px] lg:max-w-[98px] w-full bg-[#4B8CEA] rounded-[40px] h-2"></div>}
						</div>
					))}
				</div>
			</Container>
			<Form />
		</div>
	);
};

export default Consultation;
