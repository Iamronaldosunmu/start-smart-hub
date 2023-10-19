import TextAnimation from "../TextAnimation";

const GridComponent = () => {
	return (
		<section className="grid grid-cols-1   lg:grid-cols-[53%_47%] w-full">
			<div className="bg-[url('/assets/Section.png')] py-20 sm:flex flex-col justify-center items-center sm:px-10 px-5  large:px-20">
				<div className=" text-white flex flex-col justify-center lg:items-start items-center md:text-start xl:pl-[calc((100vw-1280px)/2)]">
					<TextAnimation
						text={"Start smart and build right today!"}
						className={"sm:text-[48px] text-[40px] font-bold flex flex-wrap [&>*:not(:last-child)]:mr-2"}
					/>
					<p
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="700"
						className="text-[#E5E5E2] lg:text-xl xl:text-2xl leading-6 mt-5 text-center lg:text-start"
					>
						We’re excited to be a part of your career story and can’t wait to assist you in reaching new heights! Let’s embark on this exciting journey together!
					</p>
				</div>
			</div>
			<div className="relative w-full h-full hidden lg:block overflow-hidden ">
				<img
					src="/assets/img1.png"
					className="object-cover scale-105 w-full h-full"
					alt=""
				/>
			</div>
		</section>
	);
};

export default GridComponent;
