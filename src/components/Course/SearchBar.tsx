import { ChangeEvent } from "react";
import { useCoursesActions } from "../../store/courses";

const SearchBar = () => {
	const { setFilter } = useCoursesActions();
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};
	return (
		<div className="w-full p-2 flex items-center gap-x-3 border border-black border-opacity-20 transition-shadow duration-300 rounded-lg">
			<img
				className="w-5 h-5 object-cover"
				src="/assets/search.svg"
				alt=""
			/>
			<input
				className="placeholder:text-black placeholder:text-opacity-40 w-full"
				placeholder="Search Something..."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBar;
