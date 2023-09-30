import Container from "../../../components/container";

const SeenOn = () => {
	const images: string[] = ["parents-magazine.png", "grief-out-loud.jpg", "authority-magazine.png", "widow-we-do-now.png", "grief-2-growth.jpg", "psychology-today.jpg"];
	return (
		<section className="my-[142px] font-poppins bg-[#FFF2EC] h-[366px] overflow-hidden">
			<Container>
				<h2 className="text-[37px] text-[#262B2B] text-center font-medium">As Seen on</h2>
				<div className="flex justify-between gap-x-3 py-11">
					{images.map((image: string) => (
						<img
							className="object-contain"
							src={`/src/assets/${image}`}
							alt="a Logo"
						/>
					))}
				</div>
			</Container>
		</section>
	);
};

export default SeenOn;
