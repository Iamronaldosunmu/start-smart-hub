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
	}
};

const submitForm = async ({ formType, data }: { formType: string; data: any }) => {
	const res = await axiosInstance.post("/book", {
		service: getService(formType),
		formType,
		data,
	});
	return res.data;
};

export const useCareerForm = () => {
	return useMutation({
		mutationFn: submitForm,
		onSuccess: (data) => alert(data["Email Status"]),
	});
};
