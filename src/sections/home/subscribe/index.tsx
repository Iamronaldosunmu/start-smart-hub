import Container from "../../../components/container";

const Subscribe = () => {
	return (
		<section className="relative py-20 text-center bg-[#FFF2EC] mt-14">
			<Container className="flex flex-col items-center">
				<h2 className="text-[44px] font-bold">Stay in the loop!</h2>
				<p className="text-[#606060] mt-5 text-base xl:text-xl leading-[32px]">
					Get the inside scoop, level up your career. <br className="hidden sm:block" /> Don’t miss out on all the recent updates! <br className="hidden sm:block" /> Subscribe to our newsletter now!
				</p>
				<div className="mt-[50px] flex justify-center items-center h-[51px] overflow-hidden rounded-md w-full max-w-[450px]">
					<input
						className="w-full h-full px-4 placeholder:text-xs placeholder:text-[#757575]"
						placeholder="Enter your email"
						type="text"
					/>
					<button className="text-sm tracking-widest bg-[#FFA177] h-full max-w-[121px] w-full text-white uppercase leading-4">Join</button>
				</div>
			</Container>
		</section>
	);
};

export default Subscribe;
