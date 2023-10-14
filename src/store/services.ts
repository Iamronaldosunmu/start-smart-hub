import { create } from "zustand";

export interface Service {
	id: number;
	title: string;
	description: string;
    formType: "Resume" | "Linkedln" | "Job Application Tailoring" | "Career Coaching";
    image?: { url: string }[];
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
