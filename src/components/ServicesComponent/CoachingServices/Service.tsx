import { useNavigate } from "react-router-dom";

interface Props {
	number: number;
	Title: string;
	Text: string;
	url: string;
}

const Service = ({ number, Title, Text, url }: Props) => {
	const navigate = useNavigate();
	return (
		<div className="font-poppins">
			<div className="border border-gray-300 mb-7 mt-8 lg:mb-10" />
			<div className="grid md:grid-cols-4 ">
				<p className="md:col-span-1 mb-2 ">{`${number > 9 ? "" : "0"}${number}`}</p>
				<div className="md:col-span-3 flex flex-col justify-between lg:flex-row ">
					<div className="lg:w-3/4 max-w-[605px]">
						<p className="text-xl font-semibold mb-1">{Title}</p>
						<p>{Text}</p>
					</div>
					<div className="">
						<button
							onClick={() => navigate(url + `?scroll_to=services&title=${Title}`)}
							className="border border-gray-500 after:content-['_↗'] md:px-7 md:py-3 lg:px-4 lg:py-2 mt-4 px-5 py-2 rounded-lg text-gray-500 md:text-xl text-base hover:bg-gray-500 hover:text-white transition duration-300"
						>
							Book now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
