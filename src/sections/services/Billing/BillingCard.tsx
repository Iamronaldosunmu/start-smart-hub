import Button from "./Button";
import List from "./List";

interface BillingCardProps {
	type: string;
	price: number;
	description: string;
	proText?: string;
}

const BillingFree = ({ type, price, description, proText }: BillingCardProps) => {
	const ListText = ["Amazing feature one", "Wonderful feature two", "Priceless feature three", "Splended feature four"];
	const Protext = "Delightful feature five";
	return (
		<div className="lg:mr-7 mb-7 px-5 lg:px-0 sm:px-10">
			<div className="px-6 border shadow rounded-xl">
				<h1 className="font-semibold text-3xl mb-3 mt-4">{type}</h1>
				<p className="mb-3 text-2xl">${price}</p>
				<p className="text-gray-500 mb-7 text-sm">{description}</p>
				<div className="border border-gray-300"></div>
				{proText && <p className="mt-6">Everything in the Free plan, plus</p>}
				<div className="mt-5">
					<ul className="text-left lg:text-lg sm:text-base text-sm ">
						{ListText.map((text: string) => (
							<List text={text} />
						))}
						{proText && (
							<ul>
								<List text={Protext} />
							</ul>
						)}
					</ul>
				</div>
				<Button
					text={proText ? "Subscribe Now" : "Try for free"}
					className=""
				/>
			</div>
		</div>
	);
};

export default BillingFree;
