import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

export interface IEvent {
	id: number;
	attributes: {
		date: string;
		venue: "online" | "physical";
		summary: string;
		expectations: string;
		title: string;
		price: string;
	};
}

const getEvents = async () => {
	const res = await axiosInstance.get("/events").then((res) => res.data);
	return res.data;
};

const useEvents = () => {
	return useQuery<IEvent[], Error>({
		queryKey: ["events"],
		queryFn: getEvents,
	});
};

export default useEvents;
