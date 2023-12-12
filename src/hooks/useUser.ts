import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SignInFormData } from "../pages/SignIn";
import { SignUpFormData } from "../pages/SignUp";
import axiosInstance from "../services/apiClient";
import { AuthData, useAuthActions } from "../store/auth";
import { Toast } from "../utils/toast";

const signUpUser = async (payload: SignUpFormData): Promise<AuthData> => {
	try {
		const res = await axiosInstance.post("auth/local/register", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

const loginUser = async (payload: SignInFormData): Promise<AuthData> => {
	try {
		const res = await axiosInstance.post("auth/local", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const useCreateUser = () => {
	const { setAuth } = useAuthActions();
	return useMutation({
		mutationFn: signUpUser,
		onSuccess: (data) => {
			setAuth(data);
			Toast.success("Account Created");
		},
	});
};

export const useLoginUser = () => {
	const { setAuth } = useAuthActions();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: (data) => {
			setAuth(data); // Test with WIFI
			Toast.success("Login Successful");
		},
		networkMode: "offlineFirst",
	});
};
