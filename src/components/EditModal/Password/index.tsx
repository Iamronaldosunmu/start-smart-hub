import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
	.object({
		password: z.string().min(4, { message: "Minimum of 4 characters" }),
		confirmPassword: z.string().min(4, { message: "Minimum of 4 characters" }),
	})
	.refine(({ confirmPassword, password }) => password === confirmPassword, {
		message: "Passwords Must Match",
		path: ["confirmPassword"],
	});

type FormData = z.infer<typeof schema>;

const ChangePassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const [p1Shown, setP1Shown] = useState(false);
	const [p2Shown, setP2Shown] = useState(false);

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<section className="py-10 px-4 sm:p-16 font-poppins">
			<h1 className="text-2xl sm:text-3xl text-[#212338] font-bold">Change Password</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-6 grid gap-y-6"
			>
				<div>
					<label
						htmlFor="password"
						className="text-base text-[#717171] font-semibold mb-2 block"
					>
						New Password
					</label>
					<div className="w-full flex items-center relative">
						<input
							{...register("password")}
							id="password"
							type={p1Shown ? "text" : "password"}
							className="w-full border shadow-sm placeholder:text-[#00000066] px-2 py-3 rounded-lg text-sm placeholder:text-sm font-poppins"
							placeholder="Enter Your Password"
						/>
						<div
							onClick={() => setP1Shown((prev) => !prev)}
							className="w-5 h-5 absolute right-5 cursor-pointer"
						>
							<img
								className="w-full h-full object-cover"
								src={`/assets/eye-${p1Shown ? "open" : "closed"}.svg`}
							/>
						</div>
					</div>
					{errors.password && <p className="text-red-500 mt-1 font-poppins text-sm text-left">{errors.password.message}</p>}
				</div>
				<div>
					<label
						htmlFor="confirmPassword"
						className="text-base text-[#717171] font-semibold mb-2 block"
					>
						Confirm Password
					</label>
					<div className="w-full flex items-center relative">
						<input
							{...register("confirmPassword")}
							id="confirmPassword"
							type={p2Shown ? "text" : "password"}
							className="w-full border shadow-sm placeholder:text-[#00000066] px-2 py-3 rounded-lg text-sm placeholder:text-sm font-poppins"
							placeholder="Confirm Your Password"
						/>
						<div
							onClick={() => setP2Shown((prev) => !prev)}
							className="w-5 h-5 absolute right-5 cursor-pointer"
						>
							<img
								className="w-full h-full object-cover"
								src={`/assets/eye-${p2Shown ? "open" : "closed"}.svg`}
							/>
						</div>
					</div>
					{errors.confirmPassword && <p className="text-red-500 mt-2 font-poppins text-sm text-left">{errors.confirmPassword.message}</p>}
				</div>
				<div className="flex w-full">
					{/* <button className="rounded-3xl font-semibold bg-[#4B8CEA] text-white w-[130px] py-3">Cancel</button> */}
					<button className="rounded-3xl font-semibold ml-auto mr-5 sm:mr-10 bg-[#4B8CEA] text-white w-[100px] py-2 sm:w-[130px] sm:py-3">Save</button>
				</div>
			</form>
		</section>
	);
};

export default ChangePassword;
