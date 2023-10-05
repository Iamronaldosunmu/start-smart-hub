import Container from "../../../components/Container";

const SeenOn = () => {
	const images: string[] = ["parents-magazine.png", "grief-out-loud.jpg", "authority-magazine.png", "widow-we-do-now.png", "grief-2-growth.jpg", "psychology-today.jpg"];
	return (
		<section className="mt-14 lg:mt-[100px] font-poppins bg-[#FFF2EC] py-[67px] overflow-hidden">
			<Container className="flex flex-col items-center justify-center">
				<h2 className="text-2xl lg:text-[37px] text-[#262B2B] text-center font-bold lg:font-semibold font-poppins">As Seen on</h2>
				<div className="min-w-[2251.94px]">
					<div className="flex justify-center items-center gap-x-10 pt-8 animate-scroll">
						{images.map((image: string) => (
							<img
								className="object-contain"
								src={`/assets/${image}`}
								alt="a Logo"
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SeenOn;
