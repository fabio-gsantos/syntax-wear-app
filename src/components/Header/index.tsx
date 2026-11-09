import Logo from "@/assets/images/logo/logo.svg";
import IconUser from "@/assets/images/icons/user.svg";
import { Link } from "@tanstack/react-router";
import { MenuMobile } from "../MenuMobile";
import { CartButton } from "../CartButton";
import { CartDrawer } from "../CartDrawer";
import { useState } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Masculino", href: "/products/category/masculino" },
  { name: "Feminino", href: "/products/category/feminino" },
  { name: "Outlet", href: "/products/category/outlet" },
]

export const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <header className="fixed top-5 left-6 right-6 lg:left-10 lg:right-10 z-10">
        <div className="bg-white max-w-[1320px] mx-auto flex justify-between items-center py-3 px-6 md:px-8 rounded-2xl mt-5">
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="Logo SyntaxWear" className="w-28 md:w-36" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <Link to={link.href} key={link.name} className='hover:text-primary'>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex items-center gap-4 md:gap-10">
              <li className="hidden lg:block hover:text-primary">
                <Link to='/our-stores'>Nossas Lojas</Link>
              </li>
              <li className="hidden lg:block hover:text-primary">
                <Link to='/about'>Sobre</Link>
              </li>
              <li className="md:hidden">
                <MenuMobile navLinks={navLinks}/>
              </li>
              <li className="hidden md:block">
                <Link to="/sign-up">
                  <img src={IconUser} alt="Usuário" />
                </Link>
              </li>
              
              <li>
                <CartButton onClick={() => setCartIsOpen(true)}/>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={cartIsOpen} onClose={() => {setCartIsOpen(false)}}/>
    </div>
  );
};
