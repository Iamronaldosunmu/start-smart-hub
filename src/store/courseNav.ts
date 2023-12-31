import { create } from "zustand";

interface CourseNavStore {
	mobileNavOpen: boolean;
	setMobileNavOpen: (isOpen: boolean) => void;
}

const useCourseNavStore = create<CourseNavStore>((set) => ({
	mobileNavOpen: false,
	setMobileNavOpen: (isOpen) => set({ mobileNavOpen: isOpen }),
}));

export default useCourseNavStore;
