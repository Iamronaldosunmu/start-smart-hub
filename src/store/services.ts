import { create } from "zustand";

export interface Service {
	id: number;
	attributes: {
		title: string;
		description: string;
		formType: "Resume" | "Linkedln" | "Job Application Tailoring" | "Career Coaching";
	};
}

interface ServiceStore {
	services: Service[];
	setServices: (clients: Service[]) => void;
}

const useServiceStore = create<ServiceStore>((set) => ({
	services: [],
	setServices: (services: Service[]) => set({ services }),
}));

export default useServiceStore;
