const Bookings = () => {
	return (
		<div className="relative flex justify-center items-center flex-col bg-red-50 mt-5 py-[66px]">
			<div className="text-center py-10 px-4 relative z-10">
				<div className="font-semibold text-3xl pb-5 leading-10">Book a Discovery Call Today</div>
				<p className="text-[#606060] pb-5">Kickstart your journey to success with a coaching call today. Book now and let’s get started!</p>
				<button className="border-2 border-black px-6 py-2 text-base rounded-[10px] transition-colors hover:bg-black hover:text-white font-bold">Book a call</button>
			</div>
			<img
				className="object-cover w-full h-full absolute z-0"
				src="/public/assets/bubbles2.svg"
				alt=""
			/>
		</div>
	);
};

export default Bookings;
