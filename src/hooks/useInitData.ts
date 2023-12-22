import { useEffect } from "react";
import { useCoursesActions } from "../store/courses";
import useEventStore from "../store/events";
import useServiceStore from "../store/services";
import useCourses from "./useCourses";
import useEvents from "./useEvents";
import { useServices } from "./useServices";

const useInitData = () => {
	const { setServices } = useServiceStore();
	const { setEvents } = useEventStore();
	const { setCourses } = useCoursesActions();
	const { data: servicesData } = useServices();
	const { data: eventsData } = useEvents();
	const { data: coursesData } = useCourses();

	useEffect(() => {
		setServices(servicesData);
		setEvents(eventsData);
		setCourses(coursesData);
	}, [servicesData, eventsData, coursesData]);
};

export default useInitData;
