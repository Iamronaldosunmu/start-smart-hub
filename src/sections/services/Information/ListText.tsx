interface Props {
	text: string;
}

const ListText = ({ text }: Props) => {
	return (
		<div className="flex gap-[15px] items-center   mb-[25px]">
			<img
				src="/assets/ellipse.png"
				alt=""
				className="h-[30px]"
			/>
			<p className=" tracking-wide font-poppins">{text}</p>
		</div>
	);
};

export default ListText;
