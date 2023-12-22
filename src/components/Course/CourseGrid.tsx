import { AnimatePresence } from "framer-motion";
import { useCourses, useCoursesActions, useCoursesFilter } from "../../store/courses";
import CourseCard from "./CourseCard";
import { useEffect } from "react";

const CourseGrid = () => {
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
					<CourseCard
						key={`Unique ${course.id}`}
						id={course.id}
						title={course.name}
						description={course.description}
						duration={12}
						price={course.price}
						image={course.thumbnail}
					/>
				))}
			</AnimatePresence>
		</section>
	);
};

export default CourseGrid;
