/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import PageContainer from "../components/PageContainer";
import ProgressBar from "../components/ProgressBar";
import useCourseNavStore from "../store/courseNav";
import { useParams } from "react-router-dom";
import { useCourses } from "../store/courses";
import Nav from "../components/Enrolled/Nav";

const Lessons = () => {
	const { id } = useParams();
	const courses = useCourses();
	const course = courses?.filter((course) => course.id === parseInt(id as string))[0];
	const mobileNavOpen = useCourseNavStore((s) => s.mobileNavOpen);
	return (
		<PageContainer className="relative pt-[54px] lg:pt-16 h-screen overflow-hidden">
			<Nav />
			<div className={`grid lg:grid-cols-[351px_auto] w-full h-full relative z-10 ${mobileNavOpen ? "hidden" : "block"}`}>
				<section className="overflow-y-auto h-full hidden lg:block">
					<div className="font-inter font-bold text-center border-r border-[#d7dadb] h-full">
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
						<div className="flex flex-col">
							{course?.module?.map((module: any, index) => (
								<div
									key={index}
									className="h-full text-left pt-6"
								>
									<h2 className="text-[#212338] pb-3 font-extrabold border-b border-[#8244ff1a] px-4">{`${index + 1} - Getting Started (32m)`}</h2>
									{module?.moduleMedia?.map((media: any) => (
										<div className={`${media?.sectionText === null || media?.sectionText === "" ? "hidden" : "flex"} gap-x-5 items-center py-4 border-b border-[#8244ff1a] bg-[#fafafa] px-4`}>
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
												<span className="text-sm text-[#676767]">{`${media?.id} - ${media?.sectionText} (3:21)`}</span>
											</div>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="overflow-y-auto py-4">
					<div className="px-10 items-center gap-x-3 mb-5 hidden lg:flex">
						<img
							className="w-10 h-10 object-cover"
							src="/assets/monitor-play.svg"
							alt=""
						/>
						<span className="text-2xl font-bold font-poppins">3 - Your First Video</span>
					</div>
					<div className="relative h-[458px] w-full mb-10">
						<iframe
							src="https://iframe.mediadelivery.net/embed/186395/8106cb01-629c-4fa5-923c-7c8df494257a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
							loading="lazy"
							className="border-0 absolute top-0 h-full w-full"
							allow="accelerometer;gyroscope;autoplay;encrypted-media;"
							allowFullScreen
						></iframe>
					</div>
					<button className="flex gap-x-1 items-center font-semibold justify-center rounded-lg bg-[#007aff] text-white pl-4 pr-2 py-[10px] mx-auto lg:mx-20">
						<span className="">Complete and Continue</span>
						<img
							className="w-6 h-6 rotate-180"
							src="/assets/chevron-right.svg"
							alt=""
						/>
					</button>
				</section>
			</div>
			<motion.div
				animate={{ height: mobileNavOpen ? "100%" : 0 }}
				style={{ paddingBottom: mobileNavOpen ? 30 : 0 }}
				className={`overflow-y-auto z-20 ${!mobileNavOpen ? "absolute w-full top-[-1000px]" : ""}`}
			>
				{course?.module?.map((module: any, index) => (
					<div
						key={index}
						className="text-left pt-6"
					>
						<h2 className="text-[#212338] pb-3 font-extrabold border-b border-[#8244ff1a] px-4">{`${index + 1} - Getting Started (32m)`}</h2>
						{module?.moduleMedia?.map((media: any) => (
							<div className={`${media?.sectionText === null || media?.sectionText === "" ? "hidden" : "flex"} text-center gap-x-5 items-center py-4 border-b border-[#8244ff1a] bg-[#fafafa] px-4`}>
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
									<span className="text-sm text-[#676767]">{`${media?.id} - ${media?.sectionText}`}</span>
									<span className="text-sm text-[#676767]">(3:21)</span>
								</div>
							</div>
						))}
					</div>
				))}
			</motion.div>
		</PageContainer>
	);
};

export default Lessons;

{
	/* <div className="border-b-2 border-[#8244ff1a] flex gap-x-6 px-7">
					<span className="text-[#2D2F31] font-semibold">Overview</span>
					<span className="text-[#2D2F31] font-semibold">Q&A</span>
					<span className="text-[#2D2F31] font-semibold">Reviews</span>
				</div> */
}
