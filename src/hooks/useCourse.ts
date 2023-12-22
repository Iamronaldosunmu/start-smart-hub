import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";
import { Course } from "../store/courses";

const getCourse = async (id: string): Promise<Course> => {
	const res = await axiosInstance.get(`/courses/${id}`);
	return res.data;
};

const useCourse = (id: string) => {
	return useQuery({
		queryKey: ["courses", id],
		queryFn: () => getCourse(id),
		// select: (data) => ({ ...data, module: data.module.map((item) => item.name) }),
	});
};

export default useCourse;
