import { Link } from "@tanstack/react-router"
import type { Product } from "../../interfaces/product"
import { MdAddShoppingCart } from "react-icons/md"
import { formatCurrency } from "../../helpers/currency-format"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

interface ProductCardProps {
    product: Product
}

export const ProductCard = ({product} : ProductCardProps) => {

    const { addProduct } = useContext(CartContext)

    return (
        <div className="bg-white rounded-2xl shadow-md">
            <Link to='/products/$productId' params={{ productId: String(product.id) }}>
                <img src={product.image} alt={product.name} className="w-full max-h-100 object-cover rounded-md mb-2 " />
            </Link>

            <div className="rounded-2xl p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>

                <p>{product.color}</p>

                <div className="flex justify-between mt-2.5">
                    <p className="font-bold">
                        {formatCurrency(product.price)}
                    </p>
                    <button className="cursor-pointer" onClick={() => addProduct(product)}>
                        <MdAddShoppingCart className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </div>
    )
}