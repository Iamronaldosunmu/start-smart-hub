import { create } from "zustand";

export interface Event {
	id: number;
	attributes: {
		date: string;
		venue: "online" | "physical";
		summary: string;
		expectations: string;
		title: string;
		price: string;
		meetingLink: string;
	};
}

interface EventStore {
	events: Event[];
	setEvents: (events?: Event[]) => void;
}

const useEventStore = create<EventStore>((set) => ({
	events: [],
	setEvents: (events?: Event[]) => set({ events }),
}));

export default useEventStore;
