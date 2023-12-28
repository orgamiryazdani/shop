"use client"
import Link from "next/link"
import { TbCategory2 } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { RiHome3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

function Menu() {
    const pathname = usePathname();
    return (
        <div className="w-16 h-72 bg-secondary-200 rounded-3xl flex flex-col justify-around items-center">
            <Link className={`menu__item ${pathname == "/" ? "bg-primary-100 text-white" : ""}`} href="/">
                <RiHome3Line />
            </Link>
            <Link className={`menu__item ${pathname == "/category" ? "bg-primary-100 text-white" : ""}`} href="/category">
                <TbCategory2 />
            </Link>
            <Link className={`menu__item ${pathname == "/cart" ? "bg-primary-100 text-white" : ""}`} href="/cart">
            <IoCartOutline />
            </Link>
            <button className="menu__item hover:text-red-500">
                <TbLogout />
            </button>
        </div>
    )
}

export default Menu