interface Props {
	heading: string;
	paragraphs: string[];
}

const TextSection = ({ heading, paragraphs }: Props) => {
	return (
		<div>
			<h2 className="font-semibold mb-4 text-[36px]">{heading}</h2>
			{paragraphs.map((text, index) => (
				<p
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
