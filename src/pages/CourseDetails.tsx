import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import useCourseStore from "../store/courses";
import DropDown from "../components/Course/DropDown";

const CourseDetails = () => {
	const { id } = useParams();
	const course = useCourseStore((s) => s.courses).filter((course) => course.id === id)[0];
	const overview = ["Beginner", "8 hours of HD Video", "140 Lessons", "Downloadable Content", "Hands-on Exercises", "English Captions", "Certificate of Completion", "Life Time Completion"];
	// const objectives = ["Confidently build front-end apps with React and TypeScript", "Build reusable function components", "Style your components using vanilla CSS, CSS modules, and CSS-in-JS", "Build forms with React Hook Forms"];
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px] mb-20 font-poppins">
			<Container>
				<header className="text-black text-center">
					<h1 className="text-4xl font-bold text-[#331B3B]">{course.attributes.title}</h1>
					<p className="my-5 text-lg font-inter text-[#494949] font-light leading-6 w-[90%] mx-auto">{course.attributes.description}</p>
				</header>
				<div className="w-full border border-gray-200 rounded-lg shadow p-6 mt-10">
					<h2 className="font-bold text-xl uppercase">Course Overview</h2>
					<ul className="space-y-4 font-normal mt-4">
						{overview.map((value) => (
							<li className="flex gap-x-3 font-inter items-center">
								<img
									className="w-5 h-5 object-cover"
									src="/assets/youtube.svg"
									alt=""
								/>
								<span className="font-medium text-base">{value}</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="my-12 mb-6 text-center text-3xl font-bold">Clear. Concise. Comprehensive</h2>
					<p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">Tired of piecing together disconnected tutorials or dealing with rambling, confusing instructors? This course is for you! It's perfectly structured into a series of bite-sized, easy-to-follow videos that cover both theory and practice.</p>
				</div>
				{/* <div className="w-fit p-3 flex justify-center items-center rounded-full bg-black bg-opacity-40 mb-3">
					<img
						className="w-8 h-8 object-cover"
						src="/assets/bulb.svg"
						alt=""
					/>
				</div>
				<h2 className="text-2xl font-semibold">What You'll Learn</h2>
				<ul className="mt-5 flex flex-col gap-y-3">
					{objectives.map((value) => (
						<li className="flex flex-row items-start space-x-3">
							<img
								className="w-6 h-6 object-cover"
								src="/assets/check.svg"
								alt=""
							/>
							<span className="text-lg">{value}</span>
						</li>
					))}
				</ul> */}
				<section>
					<h2 className="text-3xl font-bold text-center mb-">Course Content</h2>
					<div className="flex gap-x-3 justify-center">
						<span>8 Hours.</span>
						<span>8 Sections.</span>
						<span>140 Lessons</span>
					</div>
					<div className="mt-4 flex flex-col space-y-4">
						<DropDown
							title={"Getting Started"}
							duration={3}
						/>
						<DropDown
							title={"Getting Started"}
							duration={3}
						/>
						<DropDown
							title={"Getting Started"}
							duration={3}
						/>
						<DropDown
							title={"Getting Started"}
							duration={3}
						/>
					</div>
				</section>
			</Container>
		</PageContainer>
	);
};

export default CourseDetails;
