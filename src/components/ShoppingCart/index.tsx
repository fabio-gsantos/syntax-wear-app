import IconBag from "@/assets/images/icons/bag.svg";
import { useState } from "react";
import MensTreeDasher from "@/assets/images/images-products/tree-dasher-2-natural-black-boyal-blue.webp";
import MensTreeRunnerNz from "@/assets/images/images-products/tree-runner-nz-weathered-brown.webp";
import MensWoolCruiser from "@/assets/images/images-products/wool-cruiser-burgundy.webp";
import MensWoolCruiserSlipOn from "@/assets/images/images-products/wool-cruiser-slip-on-dark-grey.webp";
import MensWoolCruiserWaterproof from "@/assets/images/images-products/wool-cruiser-waterproof-natural-black.webp";
import { formatCurrency } from "../../helpers/currency-format";
import { products } from "../../mocks/products";

const productsInCart = [
  {
    id: 1,
    name: "Mens tree dasher 2",
    image: MensTreeDasher,
    price: 135,
    color: "Natural Black/Royal blue",
    quantity: 5,
  },
  {
    id: 2,
    name: "Mens tree runner nz",
    image: MensTreeRunnerNz,
    price: 110,
    color: "Weathered Brown",
    quantity: 3,
  },
  {
    id: 3,
    name: "Mens wool cruiser",
    image: MensWoolCruiser,
    price: 100,
    color: "Burgundy",
    quantity: 3,
  },
  {
    id: 4,
    name: "Mens wool cruiser slip on",
    image: MensWoolCruiserSlipOn,
    price: 95,
    color: "Dark Grey",
    quantity: 6,
  },
  {
    id: 5,
    name: "Mens wool cruiser waterproof",
    image: MensWoolCruiserWaterproof,
    price: 140,
    color: "Natural Black",
    quantity: 2,
  },
];

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex cursor-pointer items-center"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconBag} alt="Ícone carrinho de compras" />
      </button>

      {/* { Overlay } */}
      <div
        className={`${cartIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        {/* { Drawer } */}
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Carrinho ({productsInCart.length})</p>
            <button className="text-xl cursor-pointer" onClick={() => setCartIsOpen(!cartIsOpen)}>X</button>
          </header>

          <ul className="px-4 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)] flex flex-col gap-10">
            {productsInCart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 px-6">
                <button className="self-end text-xs cursor-pointer">X</button>

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
                      <button className="cursor-pointer">-</button>
                      <p className="text-sm">{product.quantity}</p>
                      <button className="cursor-pointer">+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            <button className="bg-black text-white w-full h-full rounded-xs cursor-pointer hover:bg-gray-800 transition">Fechar pedido</button>
          </footer>
        </div>
      </div>
    </>
  );
};
