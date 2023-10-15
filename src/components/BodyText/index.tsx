import TextAnimation from "../TextAnimation";

interface Props {
	heading: string;
	paragraphs: string[];
}

const TextSection = ({ heading, paragraphs }: Props) => {
	return (
		<div className="w-full">
			<div
				data-aos-duration="700"
				data-aos="zoom-in"
				data-aos-delay="700"
				className="font-semibold mb-4 text-[36px] flex gap-x-2 flex-wrap"
				
			>{heading}</div>
			{paragraphs.map((text, index) => (
				<p
					data-aos="fade-up"
					data-aos-duration="700"
					data-aos-delay="700"
					key={index}
					className={`text-[#71717A] ${index === 2 ? "pb-0" : "pb-6 lg:pb-[30px]"} leading-7 lg:leading-9 lg:text-xl`}
				>
					{text}
				</p>
			))}
		</div>
	);
};

export default TextSection;
