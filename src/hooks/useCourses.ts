import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

const getCourses = async () => {
	const res = await axiosInstance.get("/courses").then((res) => res.data);
	return res.data;
};

const useCourses = () => {
	return useQuery({
		queryKey: ["courses"],
		queryFn: getCourses,
		initialData: JSON.parse(localStorage.getItem("courses")!),
		select: (data) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return data?.map((course: any) => {
				console.log(course);
				return {
					id: course.id,
					name: course.name,
					description: course.description,
					price: course.price,
					thumbnail: {
						url: course.thumbnail?.url,
						alt: course.thumbnail?.name,
					},
					module: course.module,
				};
			});
		},
	});
};

export default useCourses;
