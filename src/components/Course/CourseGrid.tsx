import { AnimatePresence } from "framer-motion";
import useCourseStore from "../../store/courses";
import CourseCard from "./CourseCard";

const CourseGrid = () => {
	const filteredCourses = useCourseStore((s) => s.filterdCourses);
	return (
		<section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-20 justify-items-center items-center mt-14 min-h-[369px]">
			<AnimatePresence mode="popLayout">
				{filteredCourses.map(({ id, attributes }) => (
					<CourseCard
						key={id}
						id={id}
						title={attributes.title}
						description={attributes.description}
						duration={attributes.duration}
						price={attributes.price}
						image={attributes.image}
					/>
				))}
			</AnimatePresence>
		</section>
	);
};

export default CourseGrid;
