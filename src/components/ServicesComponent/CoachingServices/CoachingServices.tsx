import { getPathFromFormType } from "../../../pages/Services";
import useServiceStore from "../../../store/services";
import Container from "../../container";
import Service from "./service";

const CoachingServices = () => {
	const { services } = useServiceStore();
	return (
		<Container className="mt-[200px] mb-[100px]">
			<div>
				<div
					id="service-2"
					className="flex flex-col lg:items-end justify-between lg:space-x-6 md:flex-row font-poppins font-medium"
				>
					<h2 className="xl:text-5xl sm:text-4xl text-[28px] font-medium mb-2">Coaching Services</h2>
				</div>
				{services?.length > 0 &&
					services
						?.filter((service) => service.formType)
						?.map((service: { formType: string; title: string; description: string }, index: number) => (
							<Service
								key={index}
								number={index + 1}
								Title={service?.title}
								Text={service?.description}
								url={getPathFromFormType(service?.formType)}
							/>
						))}
			</div>
		</Container>
	);
};

export default CoachingServices;
