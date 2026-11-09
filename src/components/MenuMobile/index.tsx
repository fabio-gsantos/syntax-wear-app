import IconMenu from "@/assets/images/icons/hamburguer.svg";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header";

interface MenuMobileProps {
    navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    return (
        <>
            <button
                className="relative flex cursor-pointer items-center"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
                <img src={IconMenu} alt="Ícone Menu" />
            </button>

            {/* { Overlay } */}
            <div
                className={`${menuIsOpen ? "bg-black/70 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
                {/* { Drawer } */}
                <div
                    className={`${menuIsOpen ? "translate-x-0" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 flex flex-col transition-all duration-500 ease-in-out w-75`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <header className="hover:bg-primary hover:text-white transition-colors duration-500 text-primary py-5 px-5 flex justify-center">
                        <nav>
                            <Link to='/sign-in' className="flex items-center gap-3">
                                <FaRegUserCircle className="h-6 w-6" />
                                <p>Olá! Faça seu login</p>
                            </Link>
                        </nav>
                    </header>

                    <ul className="p-4 space-y-1.5 overflow-y-auto scrollbar-hide h-[calc(100%_-_140px)] flex flex-col gap-3 text-center">
                        {navLinks.map((link) => (
                            <Link to={link.href} key={link.name} onClick={() => setMenuIsOpen(!menuIsOpen)} className="hover:text-primary border-b border-b-[#eeeeee]">
                                {link.name}
                            </Link>
                        ))}

                        <li className="hover:text-primary border-b border-b-[#eeeeee]">
                            <Link to='/our-stores' onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas Lojas</Link>
                        </li>
                        <li className="hover:text-primary border-b border-b-[#eeeeee]">
                            <Link to='/about' onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};
