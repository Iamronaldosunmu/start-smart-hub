import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://startsmart-demo.onrender.com/api",
});

export default axiosInstance;

// class ApiClient<T> {
// 	endpoint: string;

// 	constructor(endpoint: string) {
// 		this.endpoint = endpoint;
// 	}

// 	// Arrow functions dont Change the scope of "this" keyword in a class
// 	getAll = () => {
// 		return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
// 	};

// 	post = (data: T) => {
// 		return axiosInstance.post(this.endpoint, data).then((res) => res.data);
// 	};
// }

// export default new ApiClient<Todo>("/todos");
