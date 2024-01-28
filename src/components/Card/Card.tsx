
interface Props{
    url: string;
    title: string;
    text: string;
}

const Card = ({url, title, text}: Props ) => {
  return (
		<div className="bg-white p-4 shadow-xl rounded-md md:h-[300px] md:w-[300px] h-[250px] w-[250px]">
			<img
				src={url}
				alt=""
				className="w-8 h-8 mr-2 mb-4"
			/>
			<div className="font-bold font-poppins text-lg mb-2">{title}</div>
			<div className="mt-2 font-mulish text-gray-600">{text}</div>
		</div>
	);
}

export default Card