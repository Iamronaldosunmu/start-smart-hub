import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig: ToastOptions = {
	position: "top-right",
	autoClose: 1000,
	hideProgressBar: false,
	closeOnClick: true,
	className: "mt-5 mr-2 ml-auto max-w-[300px] sm:max-w-[361px] font-poppins",
	pauseOnHover: true,
	draggable: true,
	theme: "colored",
};

// Add a Unique ID to cancel same toasts
export const Toast = {
	success: (message: string) => toast.success(message, toastConfig),
	info: (message: string) => toast.info(message, toastConfig),
	warning: (message: string) => toast.warning(message, toastConfig),
	error: (message: string) => toast.error(message, toastConfig),
};
