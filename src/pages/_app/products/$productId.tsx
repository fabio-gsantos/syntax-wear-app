import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../../mocks/products";
import { formatCurrency } from "../../../helpers/currency-format";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

export const Route = createFileRoute("/_app/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {

  const { addProduct } = useContext(CartContext)

  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId),
  );

  if (!filteredProduct) return;

  const originalPrice = filteredProduct?.price ?? 0;

  // 10% do valor
  const discountPrice = originalPrice * 0.9;

  // Valor parcelado
  const inInstallmentsPrice = originalPrice / 6;

  return (
  <section className="container mx-auto px-5 pt-44 md:pt-54 pb-10 md:px-10">
    <nav className="text-sm mb-8 md:mb-15">
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      / {""}
      <Link to="/products" className="hover:underline">
        Produtos
      </Link>{" "}
      / {""}
      <span className="font-semibold">{filteredProduct?.name}</span>
    </nav>

    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-10">
      <img
        src={filteredProduct?.image}
        alt={filteredProduct?.name}
        className="w-full max-w-[500px] bg-white rounded-2xl object-contain"
      />

      <div className="w-full max-w-[500px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">
          {filteredProduct?.name}
        </h1>

        <p className="text-sm mb-2">
          Cor: <span className="font-semibold">{filteredProduct?.color}</span>
        </p>

        <p className="line-through text-sm text-[#878787]">
          {formatCurrency(originalPrice)}
        </p>

        <p className="text-2xl md:text-3xl font-bold mb-2">
          {formatCurrency(discountPrice)} no PIX
        </p>

        <p className="text-sm text-[#878787]">
          Você economiza: <span className="font-semibold">10%</span>
        </p>

        <p className="mb-2">
          Ou <span className="text-[#38373A] font-semibold">6x</span> de{" "}
          <span className="text-[#38373A] font-semibold">
            {formatCurrency(inInstallmentsPrice)}
          </span>
        </p>

        <p className="my-5"><span className="text-[#38373A] font-semibold">Descrição:</span> {filteredProduct?.description}</p>

        <div className="mb-6">
          <p className="text-sm mb-1">Calcular o prazo de entrega:</p>

          <form className="flex gap-3">
            <input
              type="text"
              placeholder="Insira seu CEP"
              className="border border-[#c0c0c0] rounded-md p-3 flex-1 min-w-0"
            />

            <button className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 transition shrink-0">
              Calcular
            </button>
          </form>
        </div>

        <button
          className="bg-black text-white p-5 w-full rounded-md cursor-pointer hover:bg-gray-800 transition"
          onClick={() => addProduct(filteredProduct)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  </section>
);
}
