import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";
import { Event } from "../store/events"

const getEvents = async () => {
	const res = await axiosInstance.get("/events").then((res) => res.data);
	return res.data;
};

const useEvents = () => {
	return useQuery<Event[], Error>({
		queryKey: ["events"],
		queryFn: getEvents,
	});
};

export default useEvents;
