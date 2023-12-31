import PageContainer from "../components/PageContainer";
import PaymentForm from "../components/PaymentForm";
import Container from "../components/container";

const Payment = () => {
	return (
		<PageContainer className="mt-[96px] lg:mt-[133px]">
			<Container>
				<PaymentForm />
			</Container>
		</PageContainer>
	);
};

export default Payment;
