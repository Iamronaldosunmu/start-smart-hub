import { FC, useRef } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CareerFormData } from "../Forms/CarrerCoaching";

interface CareerInputProps {
	name: "firstName" | "lastName" | "email" | "phone" | "jobTitle" | "employer" | "industry" | "yearsOfExperience" | "shortTermGoal" | "longTermGoal" | "challenges";
	register: UseFormRegister<CareerFormData>;
}

interface InputProps extends CareerInputProps {
	type?: "number" | "text";
	placeholder?: string;
	error: FieldErrors<CareerFormData>;
}

export const Input: FC<InputProps> = ({ name, placeholder, register, error, type = "text" }) => {
	return (
		<div className="w-full">
			<label
				className="text-sm lg:text-base leading-5 lg:leading-normal block text-[#331B3BA8] capitalize"
				htmlFor={name}
			>
				{name}
			</label>
			<input
				id={name}
				{...register(name, { valueAsNumber: type === "number" ? true : false })}
				type="text"
				className="p-4 border border-[#575252] rounded-md w-full mt-1 text-sm lg:text-base text-black placeholder:text-[#506fa1]"
				placeholder={placeholder}
			/>
			{error[name] && <p className="text-red-600 mt-2 font-poppins">{error[name]?.message}</p>}
		</div>
	);
};

interface InputListProps extends CareerInputProps {
	title: string;
}

export const InputList: FC<InputListProps> = ({ title }) => {
	return (
		<div>
			<h2 className="text-[#331B3BA8] text-sm lg:text-base xl:text-xl">{title}</h2>
			<div className="grid gap-y-3 mt-1">
				{[1, 2, 3, 4].map((a, index) => (
					<div
						key={index}
						className="flex items-center gap-x-2 w-[70%]"
					>
						<span className="">{`${a}.`}</span>
						<input
							type="text"
							className="w-full border-b-[1.4px] border-black lg:text-lg"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

interface CheckBoxListProps extends CareerInputProps {
	title: string;
	options: string[];
	useInput?: boolean;
	error: FieldErrors<CareerFormData>;
}

export const CheckBoxList: FC<CheckBoxListProps> = ({ title, name, options, useInput, register, error }) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	return (
		<div>
			<h2 className="text-[#331B3BA8] text-sm lg:text-base xl:text-xl">{title}</h2>
			<div className="grid gap-y-3 mt-2">
				{options.map((option) => (
					<div
						key={option}
						className="gap-x-[10px] flex items-center cursor-pointer"
					>
						<input
							{...register(name)}
							type="radio"
							id={option}
							name={name}
							value={option}
						/>
						<label
							htmlFor={option}
							className="text-sm lg:text-base xl:text-lg lg:leading-normal leading-5"
						>
							{option}
						</label>
					</div>
				))}
			</div>
			{useInput && (
				<div className="gap-x-[10px] flex items-center cursor-pointer mt-[10px]">
					<input
						id="others"
						type="radio"
						{...register(name)}
						name={name}
						value={inputRef.current?.value}
						onFocus={() => inputRef.current?.focus()}
						onBlur={() => inputRef.current?.blur()}
					/>
					<label
						htmlFor="others"
						className="text-sm lg:text-base xl:text-lg lg:leading-normal leading-5"
					>
						Other (please specify):
					</label>
					<input
						ref={inputRef}
						type="text"
						className="border-b border-black h-full text-sm lg:text-base xl:text-lg w-[30%] sm:w-[50%]"
					/>
				</div>
			)}
			{error[name] && <p className="text-red-600 mt-2 font-poppins">Must be Filled</p>}
		</div>
	);
};

interface TextAreaProps extends CareerInputProps {
	title: string;
	placeholder?: string;
	error: FieldErrors<CareerFormData>;
}

export const TextArea: FC<TextAreaProps> = ({ title, placeholder, register, name, error }) => {
	return (
		<div>
			<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">{title}</p>
			<textarea
				{...register(name)}
				placeholder={placeholder}
				className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] lg:h-[273px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
			></textarea>
			{error[name] && <p className="text-red-600 mt-2 font-poppins">{error[name]?.message}</p>}
		</div>
	);
};
