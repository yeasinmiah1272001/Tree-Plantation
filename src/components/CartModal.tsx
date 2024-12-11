import Image from "next/image";
import { StateType, TreeBlogItem } from "../../type";
import FunctionalBtn from "./FunctionalBtn";
import Link from "next/link";
import { useSelector } from "react-redux";

interface CartModalProps {
  onClose: () => void;
  cartItems: TreeBlogItem[];
}

const CartModal: React.FC<CartModalProps> = ({ onClose, cartItems }) => {
  const { cart } = useSelector((state: StateType) => state.tree);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-96">
        <h2 className="text-lg font-bold mb-4">Cart Items</h2>
        <ul className="mb-4">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b py-2 flex items-center justify-between"
              >
                <Image
                  className="w-16 h-10"
                  src={item.images[0]?.url || "/placeholder.png"} // Fallback for missing image
                  alt="image"
                  height={100}
                  width={100}
                />
                <h1>{item.title.slice(0, 10)}</h1>
                <FunctionalBtn singleData={item} />
              </div>
            ))
          ) : (
            <li className="text-center">Your cart is empty!</li>
          )}
        </ul>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          {cart?.length > 0 && (
            <Link
              onClick={onClose}
              href={"/cart"}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              View Cart
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
