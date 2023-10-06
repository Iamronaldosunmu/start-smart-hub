const GridComponent = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2">
			<div className="bg-[url('/assets/Section.png')] py-20 sm:flex flex-col justify-center items-center sm:px-10 px-5  large:px-20">
				<div className=" text-white flex flex-col justify-center items-center md:text-center">
					<h2 className="sm:text-[48px] text-[40px] font-bold">Start smart and build bright today!</h2>
					<p className="text-[#E5E5E2] leading-6 mt-5">We’re excited to be a part of your career story and can’t wait to assist you in reaching new heights! Let’s embark on this exciting journey together!</p>
				</div>
			</div>
			<div className="w-full h-full hidden lg:block overflow-hidden">
				<img
					src="/assets/img1.png"
					className="object-cover scale-105"
					alt=""
				/>
			</div>
		</section>
	);
};

export default GridComponent;
