import { Link } from "react-router-dom";
import Container from "../../../components/container";
import { useState } from "react";

const UnlockYourPotential = () => {
	const [plans] = useState([1, 2, 3, 4, 5, 6]);
	return (
		<>
			<Container className="mt-14 lg:mt-[132px] text-center overflow-hidden">
				<h2 className="text-[44px] lg:text-[56px] font-medium">Unlock your potential!</h2>
				<p className="text-[#171717C4] text-sm leading-normal lg:leading-7 mt-5 lg:mt-2">
					There’s no limit to your capabilities! Here’s a range of services we offer to enhance your potential, <br /> help you chase your passions, and achieve career success!
				</p>
				<div className="min-w-[2251.94px] scale-90 md:scale-100">
					<div className="flex gap-x-[30px] lg:gap-x-5 mt-8 lg:mt-6 text-center w-full animate-scroll">
						{plans.map((_, index) => (
							<div
								key={index}
								className="w-[352px] lg:w-[373px] h-full"
							>
								<div className="w-[370px] h-[267px]">
									<img
										className="w-full h-full object-cover"
										src="/assets/product.jpeg"
										alt=""
									/>
								</div>
								<div className="py-[30px] px-4">
									<h3 className="text-xl font-semibold">Public Program for Individuals and Teams</h3>
									<p className="text-[#606060] text-sm leading-normal lg:leading-7 mt-4">Level up your career with our expert resume building services. Stand out from the crowd!</p>
									<Link
										to=""
										className="block mx-auto text-sm mt-5 font-bold tracking-widest uppercase border-2 border-black rounded-[10px] w-[182px] py-[18.5px] text-center"
									>
										Start Now
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</>
	);
};

export default UnlockYourPotential;
