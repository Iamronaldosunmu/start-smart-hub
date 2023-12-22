// import { ChangeEvent } from "react";
// import { useCoursesActions } from "../../store/courses";

// const Filter = () => {
// 	const options = ["All Courses", "Resume", "LinkedIn"];
// 	const {findByTag} = useCoursesActions();
// 	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
// 		findByTag(e.target.value);
// 	};
// 	return (
// 		<div className="select max-w-[150px]">
// 			<select
// 				id="colour"
// 				className="py-[9px] px-4 w-full font-bold text-black cursor-pointer border border-black border-opacity-20 transition-shadow duration-300 rounded-lg"
// 				onChange={handleChange}
// 			>
// 				{options.map((option) => (
// 					<option
// 						className="text-black"
// 						key={option}
// 						value={option}
// 						// onSelect={(e) => console.log(e)}
// 					>
// 						{option}
// 					</option>
// 				))}
// 			</select>
// 		</div>
// 	);
// };

// export default Filter;
