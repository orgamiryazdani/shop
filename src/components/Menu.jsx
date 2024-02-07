"use client"
import Link from "next/link"
import { TbCategory2 } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { RiHome3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

function Menu() {
    const pathname = usePathname();
    const { cart } = useCart()

    return (
        <div className="w-16 h-72 bg-secondary-200 rounded-3xl flex flex-col justify-around items-center">
            <Link className={`menu__item ${pathname == "/products" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/products">
                <RiHome3Line />
            </Link>
            <Link className={`menu__item ${pathname == "/categories" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/categories">
                <TbCategory2 />
            </Link>
            <Link className={`menu__item relative ${pathname == "/cart" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/cart">
                <IoCartOutline />
                {cart.length >= 1 ?
                    <span className="px-[6px] h-4 text-[9px] flex items-center justify-center left-5 bottom-5 pt-[2px] rounded-full bg-red-500 text-secondary-0 absolute">{cart.length}</span>
                    : null
                }
            </Link>
            <button className="menu__item hover:text-red-500">
                <TbLogout />
            </button>
        </div>
    )
}

export default Menu