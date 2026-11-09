import { useContext } from "react";
import { formatCurrency } from "../../helpers/currency-format";
import { CartContext } from "../../contexts/CartContext";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { cart, removeItem, increment, decrement } = useContext(CartContext)

    const subtotal = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    return (
        <>
            {/* { Overlay } */}
            <div
                className={`${isOpen ? "bg-black/80 visible" : "bg-transparent invisible"} fixed inset-0 z-50 transition-all duration-600 ease-in-out`}
                onClick={onClose}
            >
                {/* { Drawer } */}
                <div
                    className={`${isOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-100`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className="flex items-center justify-between px-5 mb-6 shrink-0">
                        <p className="text-2xl font-bold">Carrinho ({cart.length})</p>
                        <button className="text-xl cursor-pointer" onClick={onClose}>X</button>
                    </header>

                    <ul className="px-4 pb-6 flex-1 min-h-0 overflow-y-auto scrollbar-hide flex flex-col gap-10">
                        {cart.map((product) => (
                            <li key={product.id} className="flex flex-col gap-1 px-6">
                                <button className="self-end text-xs cursor-pointer" onClick={() => removeItem(product.id)}>X</button>

                                <div className="flex gap-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16"
                                    />

                                    <div className="flex flex-col items-start">
                                        <p className="mb-1 text-sm font-bold">{product.name}</p>
                                        <p className="mb-1 text-sm">Cor: {product.color}</p>
                                        <p className="mb-1 text-sm">
                                            Quantidade: {product.quantity}
                                        </p>
                                        <p className="mb-1 text-sm">
                                            <span className="font-bold">
                                                {formatCurrency(product.price)}
                                            </span>{" "}
                                            à vista
                                        </p>
                                        <div className="flex border gap-4 px-2 items-center">
                                            <button className="cursor-pointer" onClick={() => decrement(product)}>-</button>
                                            <p className="text-sm">{product.quantity}</p>
                                            <button className="cursor-pointer" onClick={() => increment(product)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <footer className="shrink-0 p-4 flex flex-col gap-3 border-t border-gray-200 bg-white">
                        <div className="flex items-center justify-between">
                            <span className="text-base">Subtotal</span>
                            <span className="text-lg font-bold">{formatCurrency(subtotal)}</span>
                        </div>
                        <button className="bg-black text-white w-full h-14 rounded-xs cursor-pointer hover:bg-gray-800 transition">Fechar pedido</button>
                    </footer>
                </div>
            </div>
        </>
    )
}