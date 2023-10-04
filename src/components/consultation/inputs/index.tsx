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
}

export const CheckBoxList: FC<CheckBoxListProps> = ({ title, name, options }) => {
	return (
		<div>
			<h2 className="text-[#331B3BA8] text-sm lg:text-base xl:text-xl">{title}</h2>
			<div className="grid gap-y-3 mt-2">
				{options.map((option) => (
					<div
						key={option}
						className="gap-x-[10px] flex items-center"
					>
						<input
							type="radio"
							name={name}
							value={option}
						/>
						<span className="text-sm lg:text-base xl:text-lg lg:leading-normal leading-5">{option}</span>
					</div>
				))}
			</div>
		</div>
	);
};
