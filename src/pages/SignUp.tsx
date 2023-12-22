import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import { useCreateUser } from "../hooks/useUser";

const schema = z.object({
	username: z
		.string()
		.min(3, { message: "Username must be a minimum of 3 Letters" })
		.max(15, { message: "Username must be a maximum of 15 Letters" })
		.refine((value) => /^[A-Za-z .]+$/.test(value), {
			message: "Invalid format. It should contain only letters, spaces, and dots.",
		}),
	email: z.string().email({ message: "Email is Required" }),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
});

export type SignUpFormData = z.infer<typeof schema>;

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(schema),
	});

	const { isLoading, mutate: createUser } = useCreateUser();

	const onSubmit = (data: SignUpFormData) => {
		createUser(data);
	};

	return (
		<PageContainer>
			<Container className="grid lg:grid-cols-2 lg:gap-x-8 h-screen my-auto md:mt-7">
				<div className="hidden lg:flex items-center mt-16">
					<img
						className="w-full"
						src="/assets/consultation.svg"
						alt=""
					/>
				</div>
				<section className="bg-white text-black text-center lg:text-left my-auto w-full">
					<h1 className="text-[36px] lg:text-[40px] xl:text-[54px] font-semibold font-DMSans">Create Account</h1>
					<form
						className="mt-3 mb-2 grid gap-y-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="text-left">
							<label
								className="block font-DMSans font-semibold mb-[7px]"
								htmlFor="username"
							>
								Username
							</label>
							<input
								{...register("username")}
								id="username"
								type="text"
								className="w-full border shadow-sm placeholder:text-[#00000066] p-2 rounded-lg text-sm placeholder:text-sm font-poppins"
								placeholder="Enter Your Username"
							/>
							{errors.username && <p className="text-red-500 mt-1 font-poppins text-sm text-left">{errors.username.message}</p>}
						</div>
						<div className="text-left">
							<label
								className="block font-DMSans font-semibold mb-[7px]"
								htmlFor="email"
							>
								Email
							</label>
							<input
								{...register("email")}
								id="email"
								type="email"
								className="w-full border shadow-sm placeholder:text-[#00000066] p-2 rounded-lg text-sm placeholder:text-sm font-poppins"
								placeholder="Enter Your Email"
							/>
							{errors.email && <p className="text-red-500 mt-1 font-poppins text-sm text-left">{errors.email.message}</p>}
						</div>
						<div className="text-left">
							<label
								className="block font-DMSans font-semibold mb-[7px]"
								htmlFor="password"
							>
								Password
							</label>
							<input
								{...register("password")}
								id="password"
								type="text"
								className="w-full border shadow-sm placeholder:text-[#00000066] p-2 rounded-lg text-sm placeholder:text-sm font-poppins"
								placeholder="Enter Your Password"
							/>
							{errors.password && <p className="text-red-500 mt-1 font-poppins text-sm text-left">{errors.password.message}</p>}
						</div>
						<button
							type="submit"
							className="mt-3 py-2 text-xl tracking-wide text-white bg-[#4B8BEA] rounded-lg font-DMSans font-semibold flex justify-center items-center"
						>
							{isLoading ? (
								<img
									src="/assets/loader2.svg"
									className="w-7 h-7 object-cover"
								/>
							) : (
								"Register"
							)}
						</button>
					</form>
					<p className="text-sm md:text-base text-center font-inter">
						Already have an account?{" "}
						<Link
							to="/sign-in"
							className="font-semibold text-[#735355]"
						>
							Sign in
						</Link>
					</p>
				</section>
			</Container>
		</PageContainer>
	);
};

export default SignUp;
