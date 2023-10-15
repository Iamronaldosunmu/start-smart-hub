import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

const getService = (formType: string) => {
	switch (formType) {
		case "Career Coaching":
			return "Career / Personal Development Coaching";
		case "Job Application Tailoring":
			return "Job Application sth";
		case "Resume":
			return "Resume sth";
		case "LinkedIn":
			console.log("Linkedin sth");
			return "Linkedin sth";
	}
};

const submitForm = async ({ formType, data }: { formType: string; data: unknown }) => {
	const res = await axiosInstance.post("/book", {
		service: getService(formType),
		formType,
		data,
	});
	return res.data;
};

export const useForms = () => {
	return useMutation({
		mutationFn: submitForm,
		onSuccess: (data) => alert(data["Booking Status"]),
	});
};
