import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";
import { FormData } from "../components/ContactUs/Form/Form";

const submitForm = (data: FormData) => axiosInstance.post<string>("/contact", data).then((res) => res.data);

export const useContact = () =>
	useMutation({
		mutationFn: submitForm,
		onError: (error) => alert(error),
		onSuccess: (data) => alert(data),
	});
