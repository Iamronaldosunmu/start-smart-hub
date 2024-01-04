import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	email: z.string().email({ message: "Email is Required" }),
});

type FormData = z.infer<typeof schema>;

const EditEmail = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		mode: "onChange",
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<section className="py-10 px-4 sm:p-16 font-poppins">
			<h1 className="text-2xl sm:text-3xl text-[#212338] font-bold">Edit Email</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mt-6"
			>
				<label
					htmlFor="username"
					className="text-base text-[#717171] font-semibold mb-2 block"
				>
					Email
				</label>
				<input
					{...register("email")}
					id="email"
					type="email"
					className="w-full border shadow-sm placeholder:text-[#00000066] px-2 py-3 rounded-lg text-sm placeholder:text-sm"
					placeholder="Enter a New Email"
				/>
				{errors.email && <p className="text-red-500 mt-2 font-poppins text-sm text-left">{errors.email.message}</p>}
				<div className="flex mt-4 w-full">
					<button className="rounded-3xl font-semibold ml-auto mr-5 sm:mr-10 bg-[#4B8CEA] text-white w-[100px] py-2 sm:w-[130px] sm:py-3">Save</button>
				</div>
			</form>
		</section>
	);
};

export default EditEmail;
