import IconBag from "@/assets/images/icons/bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface CartButtonProps {
    onClick?: () => void;
}


export const CartButton = ({ onClick }: CartButtonProps) => {
const { cart } = useContext(CartContext)
const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

    return (
        <button
        className="relative flex cursor-pointer items-center"
        onClick={onClick}
      >
        <img src={IconBag} alt="Ícone carrinho de compras" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#9640f1] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {/* O contador no ícone da sacola com cart.length mostrava a quantidade de produtos distintos. Desta forna, ele mostra o total de unidades (por exemplo, 2 pares do mesmo tênis contam como 2) */}
            {cart.reduce((acc, p) => acc + p.quantity, 0)}
          </span>
        )}
      </button>
    )
}