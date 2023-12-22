import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { SignInFormData } from "../pages/SignIn";
import { SignUpFormData } from "../pages/SignUp";
import axiosInstance from "../services/apiClient";
import { User, useAuthActions } from "../store/auth";
import { Toast } from "../utils/toast";

interface AuthData {
	jwt: string;
	user: User;
}

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
	const navigate = useNavigate();
	return useMutation({
		mutationFn: signUpUser,
		onSuccess: () => {
			Toast.success("Account Created");
			navigate("/courses");
		},
	});
};

export const useLoginUser = () => {
	const [, setCookie] = useCookies();
	const { setUser } = useAuthActions();
	const navigate = useNavigate();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: ({ jwt, user }) => {
			setCookie("auth", jwt, {
				expires: new Date(Date.now() + 1000 * 60),
			});
			setUser(user); // Test with WIFI
			Toast.success("Login Successful");
			navigate("/courses");
		},
	});
};
