import { FC } from "react";

interface InputProps {
	name: string;
	placeholder: string;
}

export const Input: FC<InputProps> = ({ name, placeholder }) => {
	return (
		<div className="w-full">
			<label
				className="text-sm lg:text-base leading-5 lg:leading-normal block text-[#331B3BA8]"
				htmlFor={name}
			>
				{name}
			</label>
			<input
				id={name}
				type="text"
				className="p-4 border border-[#575252] rounded-md w-full mt-1 text-sm lg:text-base text-[#1E4178] placeholder-inherit"
				placeholder={placeholder}
			/>
		</div>
	);
};
