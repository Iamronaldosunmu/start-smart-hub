import { useNavigate } from "react-router-dom";

interface ServiceProps {
	title: string;
	text: string;
	subheading?: string;
	imageUrl: string;
	number: number;
	path: string;
}
const Service = ({ title, text, imageUrl,subheading, number, path }: ServiceProps) => {
	const navigate = useNavigate();
	return (
		<div
			id="service"
			className=" font-poppins"
		>
			<div className="border border-gray-300 mb-7 mt-8 lg:mb-10" />
			<div className="text-gray-500 border inline p-2 px-5 mb-10 text-2xl rounded-xl">{`${number > 9 ? "" : "0"}${number}`}</div>
			<img
				src={imageUrl}
				className="mb-3 mt-7"
				alt=""
			/>
			<div className="lg:flex justify-center lg:mt-5">
				<div className="w-full">
					<h2 className="xl:text-5xl sm:text-4xl text-[28px] font-medium mb-5 w-full">{title}</h2>
				</div>
				<div className="lg:ml-20 lg:w-full max-w-[605px]">
					<p className="lg:leading-7 mb-6 max-w-[800px] font-medium text-[#575252]">{subheading}</p>
					<p className="lg:leading-7 mb-6 max-w-[800px] text-[#575252]">{text}</p>
					<button
						onClick={() => navigate('/contact-us')}
						className="border border-gray-500  md:px-7 md:py-3 mt-4 px-5 py-2 rounded-3xl text-gray-500 md:text-xl text-base hover:bg-gray-500 hover:text-white transition duration-300"
					>
						Contact us
					</button>
					{/* <button
						onClick={() => navigate(path + `?scroll_to=services&title=${title}`)}
						className="border border-gray-500 after:content-['_↗'] md:px-7 md:py-3 mt-4 px-5 py-2 rounded-3xl text-gray-500 md:text-xl text-base hover:bg-gray-500 hover:text-white transition duration-300"
					>
						Book now
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Service;
