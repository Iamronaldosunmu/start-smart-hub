import { FC, useRef } from "react";

interface InputProps {
	name: string /* "firstName" | "lastName" | "email" | "phone" | "jobTitle" | "employer" | "industry" */;
	// title: string;
	placeholder?: string;
	// register: UseFormRegister<FormData>;
	// error: FieldErrors<FormData>;
}

export const Input: FC<InputProps> = ({ name, placeholder }) => {
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
				// {...register(name)}
				type="text"
				className="p-4 border border-[#575252] rounded-md w-full mt-1 text-sm lg:text-base text-black placeholder:text-[#506fa1]"
				placeholder={placeholder}
			/>
			{/* {error[name] && <p className="text-red-600 mt-2 font-poppins">{error[name]?.message}</p>} */}
		</div>
	);
};

interface InputListProps {
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

interface CheckBoxListProps {
	title: string;
	name: string;
	options: string[];
	useInput?: boolean;
}

export const CheckBoxList: FC<CheckBoxListProps> = ({ title, name, options, useInput }) => {
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
						name={name}
						onFocus={() => {
							inputRef.current?.focus();
						}}
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
		</div>
	);
};

interface TextAreaProps {
	title: string;
	placeholder?: string;
}

export const TextArea: FC<TextAreaProps> = ({ title, placeholder }) => {
	return (
		<div>
			<p className="text-sm lg:text-base leading-5 text-[#331B3BA8] mb-4">{title}</p>
			<textarea
				placeholder={placeholder}
				className="border border-[#575252] lg:placeholder:text-[#1E4178] h-[157px] lg:h-[273px] py-4 px-3 focu:outline-0 placeholder:text-[#71717A] w-full rounded-md"
			></textarea>
		</div>
	);
};
