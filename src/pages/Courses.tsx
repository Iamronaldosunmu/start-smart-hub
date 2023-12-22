import CourseGrid from "../components/Course/CourseGrid";
// import Filter from "../components/Course/Filter";
import SearchBar from "../components/Course/SearchBar";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";

const Courses = () => {
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px] mb-20 text-black">
			<Container>
				<header className="mb-10 text-center flex flex-col items-center">
					<h1 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">Become the Best Professionally</h1>
					<p className="text-base sm:text-lg lg:text-xl max-w-[1024px] font-poppins">Whether you want to excel in web development, mobile development or strengthen your fundamental software engineering skills, there is a course for you.</p>
				</header>
				<div className="lg:px-12 flex flex-col lg:flex-row lg:items-center gap-4">
					<SearchBar />
					{/* <Filter /> */}
				</div>
				<CourseGrid />
			</Container>
		</PageContainer>
	);
};

export default Courses;
