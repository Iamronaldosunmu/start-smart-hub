import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useCourses, useCoursesActions, useCoursesFilter } from "../../../store/courses";
import EnrolledCourseCard from "../CourseCard";

const EnrolledCourseGrid = () => {
	const courses = useCourses();
	const { saveCourses } = useCoursesActions();
	const filter = useCoursesFilter();

	const filteredCourses = courses?.filter((course) => {
		return course.name.toLowerCase().includes(filter.toLowerCase());
	});

	useEffect(() => {
		saveCourses();
	}, [courses, saveCourses]);

	return (
		<section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-20 h-fit m-h-[433px] justify-items-center items-center mt-14">
			<AnimatePresence mode="sync">
				{filteredCourses?.map((course) => (
					<EnrolledCourseCard
						key={`Unique ${course.id}`}
						id={course.id}
						progress={70}
						title={course.name}
						image={course.thumbnail}
					/>
				))}
			</AnimatePresence>
		</section>
	);
};

export default EnrolledCourseGrid;
