import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import { useCourses } from "../store/courses";
import DropDownDetails from "../components/Enrolled/DropDownDetails";

const EnrolledCourseDetails = () => {
	const { id } = useParams();
	const courses = useCourses();
	const course = courses?.filter((course) => course.id === parseInt(id as string))[0];
	return (
		<PageContainer className="lg:mt-[133px] mb-20 font-poppins lg:px-20">
			<div className="h-[250px] md:h-[300px] mb-5">
				<img
					className="w-full h-full object-cover"
					src={course?.thumbnail.url}
					alt={course?.thumbnail.alt}
				/>
			</div>
			<Container>
				<header className="text-center text-[#331B3B]">
					<h1 className="text-4xl font-bold mb-2">{course?.name}</h1>
					<p className="text-lg font-inter font-semibold leading-6 w-[90%] mx-auto">92% Complete</p>
				</header>
				<section className="mt-5 text-center">
					<h2 className="text-[#331B3B] font-mulish font-semibold mb-3">Next Lesson</h2>
					<div className="h-fit text-white rounded-lg py-2 bg-[#331B3B] mb-2">5 - Sharing State Using React Context</div>
					<div className="flex flex-col mx-4">
						<DropDownDetails
							name={"Getting Started"}
							sections={[]}
						/>
						<DropDownDetails
							name={"Getting Started"}
							sections={[]}
						/>
					</div>
				</section>
			</Container>
		</PageContainer>
	);
};

export default EnrolledCourseDetails;
