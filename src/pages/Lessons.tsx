import PageContainer from "../components/PageContainer";
import ProgressBar from "../components/ProgressBar";

const Lessons = () => {
	return (
		<PageContainer className="grid grid-cols-[351px_auto] w-full pt-16 h-screen overflow-hidden">
			<section className="overflow-y-auto h-full">
				<div className="font-inter font-bold text-center border-r border-[#d7dadb]">
					<header className="bg-[#eff4ff] pt-6 border-b border-[#e3e3e3]">
						<h1 className="text-[#212338] mb-3 text-lg">Complete Python Mastery</h1>
						<div className="flex flex-col pb-6 justify-center text-center">
							<p className="text-lg font-DMSans font-bold leading-6 mb-3 text-[#222222]">92% Complete</p>
							<div className="w-[80%] mx-auto">
								<ProgressBar
									colour="#007aff"
									percentage={92}
								/>
							</div>
						</div>
					</header>
					<div>
						{Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
							<div className="h-full text-left pt-6">
								<h2 className="text-[#212338] pb-3 font-extrabold border-b border-[#8244ff1a] px-4">{`${i} - Getting Started (32m)`}</h2>
								{Array.from({ length: 5 }).map(() => (
									<div className="flex gap-x-5 items-center py-4 border-b border-[#8244ff1a] bg-[#fafafa] px-4">
										<img
											className="w-6 h-6 object-cover"
											src="/assets/check-circle.svg"
											alt=""
										/>
										<div className="flex items-center gap-x-3 pr-5">
											<img
												className="w-6 h-6 object-cover"
												src="/assets/monitor-play-brown.svg"
												alt=""
											/>
											<span className="text-sm text-[#676767]">1 - What is Python (3:21)</span>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="pt-6 overflow-y-auto">
				<div className="px-10 flex items-center gap-x-3 mb-4">
					<img
						className="w-10 h-10 object-cover"
						src="/assets/monitor-play.svg"
						alt=""
					/>
					<span className="text-2xl font-bold font-poppins">3 - Your First Video</span>
				</div>
				<div className="relative h-[570px] w-full mb-10">
					<iframe
						src="https://iframe.mediadelivery.net/embed/186395/8106cb01-629c-4fa5-923c-7c8df494257a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
						loading="lazy"
						className="border-0 absolute top-0 h-full w-full"
						allow="accelerometer;gyroscope;autoplay;encrypted-media;"
						// allowfullscreen="true"
					></iframe>
				</div>
				{/* <div className="border-b-2 border-[#8244ff1a] flex gap-x-6 px-7">
					<span className="text-[#2D2F31] font-semibold">Overview</span>
					<span className="text-[#2D2F31] font-semibold">Q&A</span>
					<span className="text-[#2D2F31] font-semibold">Reviews</span>
				</div> */}
			</section>
		</PageContainer>
	);
};

export default Lessons;
