import { create } from "zustand";

type type = "Resume" | "LinkedIn" | "All Courses";

interface Course {
	id: string;
	attributes: {
		title: string;
		description: string;
		duration: number;
		price: number;
		image?: string;
		tag: type;
	};
}

const Courses: Course[] = [
	{
		id: "@1",
		attributes: {
			title: "Successful Career Development",
			description: "Life coach your clients to a successful job search, resume, interviewing skills, LinkedIn networking & career they love",
			duration: 12,
			price: 140,
			image: "/assets/courseImg1.jpg",
			tag: "Resume",
		},
	},
	{
		id: "@2",
		attributes: {
			title: "Successful Career Development",
			description: "Life coach your clients to a successful job search, resume, interviewing skills, LinkedIn networking & career they love",
			duration: 12,
			price: 140,
			image: "/assets/courseImg1.jpg",
			tag: "LinkedIn",
		},
	},
	{
		id: "@3",
		attributes: {
			title: "Successful Career Development",
			description: "Life coach your clients to a successful job search, resume, interviewing skills, LinkedIn networking & career they love",
			duration: 12,
			price: 140,
			image: "/assets/courseImg1.jpg",
			tag: "LinkedIn",
		},
	},
	{
		id: "@4",
		attributes: {
			title: "Successful Career Development",
			description: "Life coach your clients to a successful job search, resume, interviewing skills, LinkedIn networking & career they love",
			duration: 12,
			price: 140,
			image: "/assets/courseImg1.jpg",
			tag: "Resume",
		},
	},
];

interface CourseStore {
	courses: Course[];
	filterdCourses: Course[];
	findCourse: (value: string) => void;
	findByTag: (value: type | string) => void;
	// setCourses: (courses: Course[]) => void;
}

const useCourseStore = create<CourseStore>((set) => ({
	courses: Courses,
	filterdCourses: Courses,
	findCourse: (value) => set({ filterdCourses: value == "" ? Courses : Courses.filter((course) => course.attributes.title.includes(value)) }),
	findByTag: (value) =>
		set({
			filterdCourses: value == "All Courses" ? Courses : Courses.filter((course) => course.attributes.tag == value),
		}),
	// setCourses: (courses: Course[]) => set({ courses }),
}));

export default useCourseStore;
