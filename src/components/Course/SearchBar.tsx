import { ChangeEvent } from "react";
import useCourseStore from "../../store/courses";

const SearchBar = () => {
	const { findCourse } = useCourseStore();
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		findCourse(e.target.value);
		// console.log(courses[0].attributes.title.search(e.target.value));
	};
	return (
		<div className="lg:max-w-[500px] w-full p-2 flex items-center gap-x-3 border border-black border-opacity-20 transition-shadow duration-300 rounded-lg">
			<img
				className="w-5 h-5 object-cover"
				src="/assets/search.svg"
				alt=""
			/>
			<input
				className="placeholder:text-black placeholder:text-opacity-40 w-full"
				placeholder="Something Somto said...."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;
