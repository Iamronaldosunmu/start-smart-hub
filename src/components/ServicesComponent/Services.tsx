const Services = () => {
	return (
		<div className="mt-[150px]">
			<div className="lg:flex mt-5 justify-between">
				<div className="lg:flex flex-col items-left  mt-4 lg:w-1/2 mb-7 ">
					<p className="border border-gray-500 px-5 py-3   rounded-3xl w-fit text-gray-500 lg:text-xl">Our Services</p>
				</div>
				<div className="">
					<div className="text-[32px] md:text-[40px] lg:text-[56px] xl:text-[64px] max-w-[663px] font-poppins">
            We provide a wide range of services
        </div>
					{/* <div className="lg:text-[50px] max-w-[1023px] font-poppins">You have access to the wide range of services we provide!</div> */}
				</div>
			</div>
		</div>
	);
};

export default Services;
