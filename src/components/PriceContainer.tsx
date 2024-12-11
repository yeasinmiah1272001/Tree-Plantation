import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateType, TreeBlogItem } from "../../type";

const PriceContainer = ({ singleData }: { singleData: TreeBlogItem }) => {
  const { cart } = useSelector((state: StateType) => state.tree);
  const [existingProduct, setExistingProduct] = useState<TreeBlogItem | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === singleData.id);
    setExistingProduct(availableProduct || null);
  }, [cart, singleData.id]);

  const mainPrice = existingProduct?.quantity
    ? singleData.price * existingProduct.quantity
    : singleData.price;

  const oldPrice = existingProduct?.quantity
    ? singleData.old_price * existingProduct.quantity
    : singleData.old_price;

  return (
    <div className="flex items-center gap-4">
      <p className="line-through text-xl font-medium text-gray-400">
        {oldPrice.toFixed(2)} $
      </p>
      <p className="text-xl font-medium">{mainPrice.toFixed(2)} $</p>
    </div>
  );
};

export default PriceContainer;
