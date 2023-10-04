import Container from "../../../components/container";

const Subscribe = () => {
	return (
		<Container className="py-20 text-center bg-[#FAEDE8] mt-14 border-b border-black">
			<h2 className="text-[44px] font-bold">Stay in the loop!</h2>
			<p className="text-[#606060] mt-5">Get the inside scoop, level up your career. Don’t miss out on all the recent updates! Subscribe to our newsletter now!</p>
			<div className="mt-[50px] flex justify-center items-center h-[51px] overflow-hidden rounded-md">
				<input
					className="w-full h-full px-4 placeholder:text-xs placeholder:text-[#757575]"
					placeholder="Enter your email"
					type="text"
				/>
				<button className="text-sm tracking-widest bg-[#FFA177] h-full max-w-[121px] w-full text-white uppercase leading-4">Join</button>
			</div>
		</Container>
	);
};

export default Subscribe;
