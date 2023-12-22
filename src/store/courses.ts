/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

// type type = "Resume" | "LinkedIn" | "All Courses";

export interface Course {
	id: number;
	name: string;
	price: string;
	description: string;
	thumbnail: {
		url: string;
		alt: string;
	};
	module: {
		name: string;
		sections: any[];
	}[];
}

interface CourseStore {
	courses: Course[];
	filter: string;
	actions: {
		setCourses: (courses: Course[]) => void;
		saveCourses: () => void;
		setFilter: (query: string) => void;
		// findByTag: (value: type | string) => void;
	};
}

const useCourseStore = create<CourseStore>((set, get) => ({
	courses: localStorage.getItem("courses") ? JSON.parse(localStorage.getItem("courses")!) : [],
	filter: "",
	actions: {
		setCourses: (courses) => set({ courses }),
		saveCourses: () => localStorage.setItem("courses", JSON.stringify(get().courses)),
		setFilter: (query) => set({ filter: query }),
		// findByTag: (value) =>
		// 	set((state) => ({
		// 		filterdCourses: value == "All Courses" ? state.courses : state.courses.filter((course) => course.tag == value),
		// 	})),
	},
}));

export const useCourses = () => useCourseStore((s) => s.courses);
export const useCoursesFilter = () => useCourseStore((s) => s.filter);
export const useCoursesActions = () => useCourseStore((s) => s.actions);
