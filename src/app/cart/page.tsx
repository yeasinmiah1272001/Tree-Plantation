import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
// import { useSession } from "next-auth/react";

const CartPage = () => {
  // const { data: session } = useSession();

  return (
    <Container className="py-44">
      <CartItem />
    </Container>
  );
};

export default CartPage;
