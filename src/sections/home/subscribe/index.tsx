import { motion } from "framer-motion";
import Container from "../../../components/container";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../services/apiClient";

interface EmailNewsletterPayload {
	data: {
		email: string;
	};
}

const Subscribe = () => {
	const subscribeToNewsletter = async (data: EmailNewsletterPayload) => {
		const res = await axiosInstance.post("/mailing-lists", data);
		return res.data;
	};
	const subscribeToNewsletterMutation = useMutation(subscribeToNewsletter);
	const [finalMessage, setFinalMessage] = useState("");

	const newsletterValidationSchema = z.object({
		email: z.string().min(1, { message: "Please Enter A Valid Email Address" }).email({ message: "Please Enter A Valid Email Address" }),
	});

	type NewsletterValidationSchema = z.infer<typeof newsletterValidationSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewsletterValidationSchema>({
		resolver: zodResolver(newsletterValidationSchema),
	});

	const onSubscribe = (data) => {
		subscribeToNewsletterMutation.mutate(
			{ data: { email: data.email } },
			{
				onSuccess: () => {
					setFinalMessage("Thanks For Subscribibng!");
				},
				onError: (error: any) => {
					if (error.response.status === 400) {
						console.log(error);
						setFinalMessage("You Are Already In The Loop!");
					}
				},
			}
		);
	};

	return (
		<section className="relative py-20 text-center bg-[#FFF2EC] mt-14">
			<Container className="flex flex-col items-center">
				<div className="text-[44px] lg:text-[54px] font-bold flex flex-wrap gap-x-2 justify-center">
					{"Stay in the loop!".split(" ").map((word, index) => (
						<motion.div
						key={index}
							initial={{ y: 45, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
							}}
						>
							{word}
						</motion.div>
					))}
				</div>
				<p
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="1000"
					className="text-[#606060] mt-5 text-base xl:text-xl leading-[32px] max-w-[617px]"
				>
					Get the inside scoop, level up your career. Don’t miss out on all the recent updates! Subscribe to our newsletter now!
				</p>
				{!finalMessage && <>
					<form
						onSubmit={handleSubmit(onSubscribe)}
						data-aos="fade-up"
						data-aos-duration="700"
						data-aos-delay="1000"
						className="mt-[50px] flex justify-center items-center h-[51px] overflow-hidden rounded-md w-full max-w-[450px]"
					>
						<input
							{...register("email")}
							className="w-full h-full px-4 placeholder:text-xs placeholder:text-[#757575]"
							placeholder="Enter your email"
							type="text"
						/>
						<button className="text-sm tracking-widest bg-[#FFA177] h-full max-w-[121px] w-full text-white uppercase leading-4">{subscribeToNewsletterMutation.isLoading ? "Loading..." : "Submit"}</button>
					</form>
					<p className="text-[red] mt-[15px]">{errors.email?.message}</p>
				</>}
				{finalMessage && (
					<motion.p
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
						className="text-[30px] mt-[64px] text-center font-semibold"
					>
						{finalMessage}
					</motion.p>
				)}
			</Container>
		</section>
	);
};

export default Subscribe;
