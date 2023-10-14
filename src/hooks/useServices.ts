import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

export const useServices = () => {
	const getServices = async () => axiosInstance.get("/services").then((res) => res.data.data);
	return useQuery({
		queryKey: ["services"],
		queryFn: getServices,
	});
};
