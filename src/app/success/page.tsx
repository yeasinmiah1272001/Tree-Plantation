import Container from "@/components/Container";

const SuccessPage = () => {
  return (
    <Container className="py-44">
      <h1>Payment Successful!</h1>
      <p>
        Your order has been successfully processed, and the cart has been reset.
      </p>
    </Container>
  );
};

export default SuccessPage;
