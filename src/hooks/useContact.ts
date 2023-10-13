import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";

const submitForm = (data: FormData) => axiosInstance.post("/contact", data);

export const useContact = (data: FormData) =>
	useMutation<FormData, Error, FormData>({
		mutationFn: () => submitForm(data),
		onError: (error) => console.log(error?.message),
	});
