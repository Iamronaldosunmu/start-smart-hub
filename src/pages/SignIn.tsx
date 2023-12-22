import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import PageContainer from "../components/PageContainer";
import Container from "../components/container";
import { useLoginUser } from "../hooks/useUser";

const isUsernameOrEmail = (value: string) => {
	const isUsername = /^[A-Za-z0-9.]+$/.test(value);

	const isEmail = /\S+@\S+\.\S+/.test(value);

	return isUsername || isEmail;
};

const schema = z.object({
	identifier: z.string().refine(isUsernameOrEmail, {
		message: "Field must be a valid username or email",
	}),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
});

export type SignInFormData = z.infer<typeof schema>;

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormData>({
		resolver: zodResolver(schema),
	});

	const { isLoading, mutate: loginUser } = useLoginUser();

	const onSubmit = (data: SignInFormData) => {
		loginUser(data);
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
								htmlFor="identifier"
							>
								Email
							</label>
							<input
								{...register("identifier")}
								id="identifier"
								type="text"
								className="w-full border shadow-sm placeholder:text-[#00000066] p-2 rounded-lg text-sm placeholder:text-sm font-poppins"
								placeholder="Enter Your Email"
							/>
							{errors.identifier && <p className="text-red-500 mt-1 font-poppins text-sm text-left">{errors.identifier.message}</p>}
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
							disabled={isLoading}
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
						Don’t have an account?{" "}
						<Link
							to="/sign-up"
							className="font-semibold text-[#735355]"
						>
							Sign up
						</Link>
					</p>
				</section>
			</Container>
		</PageContainer>
	);
};

export default SignIn;
