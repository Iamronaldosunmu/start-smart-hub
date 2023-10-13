import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

interface Response {
	data: IEvent[];
	meta: unknown;
}

export interface IEvent {
	date: string;
	venue: "online" | "physical";
	summary: string;
	expectations: string;
	title: string;
	price: string;
}

const getEvents = async () => {
	const res = await axiosInstance.get<Response>("/events").then((res) => res.data);
	return res.data;
};

const useEvents = () => {
	return useQuery<IEvent[], Error>({
		queryKey: ["events"],
		queryFn: getEvents,
		onSuccess: (data) => console.log(data),
	});
};

export default useEvents;
