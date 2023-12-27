import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import { useCourses } from "../store/courses";
import DropDownDetails from "../components/Enrolled/DropDownDetails";
import ProgressBar from "../components/ProgressBar";

const EnrolledCourseDetails = () => {
	const { id } = useParams();
	const courses = useCourses();
	const course = courses?.filter((course) => course.id === parseInt(id as string))[0];
	return (
		<PageContainer className="lg:mt-[133px] mb-20 font-poppins">
			<div className="lg:hidden h-[250px] md:h-[300px] mb-5">
				<img
					className="w-full h-full object-cover"
					src={course?.thumbnail.url}
					alt={course?.thumbnail.alt}
				/>
			</div>
			<Container className="lg:hidden">
				<header className="text-center text-[#331B3B]">
					<h1 className="text-4xl font-bold mb-2">{course?.name}</h1>
					<p className="text-lg font-semibold leading-6 w-[90%] mx-auto mb-3 font-DMSans">92% Complete</p>
					<div className="w-[80%] mx-auto">
						<ProgressBar percentage={92} />
					</div>
				</header>
				<section className="mt-5 text-center">
					<h2 className="text-[#331B3B] font-mulish font-semibold mb-3 underline underline-offset-2 cursor-pointer">Next Lesson</h2>
					<div className="h-fit text-white rounded-md py-5 bg-[#331B3B] mb-3 text-xl font-semibold">5 - Sharing State Using React Context</div>
					<div className="flex flex-col gap-y-3">
						{Array.from({ length: 4 }, (_, i) => i + 1).map((item) => (
							<DropDownDetails
								key={item}
								index={item}
								name={"Getting Started"}
								sections={[
									{ title: "Introduction", watched: false },
									{ title: "Introduction", watched: false },
									{ title: "Introduction", watched: true },
								]}
							/>
						))}
					</div>
				</section>
			</Container>
			<Container className="hidden lg:block">
				<header className="bg-[#ECECED] rounded-md p-8 grid grid-cols-2 min-h-[360px] h-full gap-x-6">
					<img
						className="w-full h-full object-cover"
						src={course?.thumbnail.url}
						alt={course?.thumbnail.alt}
					/>
					<div className="bg-[#007aff] text-white flex flex-col justify-center gap-y-3 items-center text-center px-6 xl:px-14">
						<span>Global State Management (1h 47m): 5 / 25</span>
						<h1 className="h-fit text-white rounded-md text-2xl font-bold">5 - Sharing State Using React Context</h1>
						<button className="bg-[#44303A] text-white py-2 px-7 rounded-md font-semibold">Start Lesson</button>
					</div>
				</header>
				<section className="grid grid-cols-[60%_auto] xl:grid-cols-[68%_auto] gap-x-8 mt-7">
					<div className="flex flex-col gap-y-3">
						{Array.from({ length: 4 }, (_, i) => i + 1).map((item) => (
							<DropDownDetails
								key={item}
								index={item}
								name={"Getting Started"}
								sections={[
									{ title: "Introduction", watched: false },
									{ title: "Introduction", watched: false },
									{ title: "Introduction", watched: true },
								]}
							/>
						))}
					</div>
					<div className="bg-[#7F6362] flex flex-col h-[140px] justify-center rounded-md text-center">
						<p className="text-2xl font-DMSans font-semibold leading-6 w-[90%] mx-auto mb-3 text-white">92% Complete</p>
						<div className="w-[80%] mx-auto">
							<ProgressBar
								colour="#007aff"
								percentage={92}
							/>
						</div>
					</div>
				</section>
			</Container>
		</PageContainer>
	);
};

export default EnrolledCourseDetails;
