import Logo from "@/assets/images/logo/logo.svg";
import IconUser from "@/assets/images/icons/user.svg";
import IconHelp from "@/assets/images/icons/help.svg";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "../ShoppingCart";

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-5 left-6 right-6 lg:left-10 lg:right-10 z-10">
        <div className="bg-white max-w-[1320px] mx-auto flex justify-between items-center py-3 px-6 md:px-8 rounded-2xl mt-5">
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="Logo SyntaxWear" className="w-28 md:w-36" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              <li className="hidden md:block">
                <Link to="/products">Masculino</Link>
              </li>
              <li className="hidden md:block">
                <a href="#">Feminino</a>
              </li>
              <li className="hidden md:block">
                <a href="#">Outlet</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex items-center gap-4 md:gap-10">
              <li className="hidden lg:block">
                <Link to='/our-stores'>Nossas Lojas</Link>
              </li>
              <li className="hidden lg:block">
                <a href="#">Sobre</a>
              </li>
              <li>
                <Link to="/sign-up">
                  <img src={IconUser} alt="Usuário" />
                </Link>
              </li>
              <li>
                <a href="#">
                  <img src={IconHelp} alt="Ajuda" />
                </a>
              </li>
              <li>
                {/* <a href="#">
                  <img src={IconBag} alt="Carrinho" />
                </a> */}

                <ShoppingCart />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
