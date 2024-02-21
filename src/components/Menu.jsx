"use client"
import Link from "next/link"
import { TbCategory2 } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { RiHome3Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Modal from "@/common/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import useGetUser from "@/hooks/useAuth";

function Menu() {
    const [openModal, setOpenModal] = useState(false)
    const pathname = usePathname();
    const { cart } = useCart()
    const { language } = useLanguage()
    const { t } = useTranslation();
    const { data } = useGetUser()

    const onClose = () => {
        setOpenModal(false);
    }

    const logOutHandler = () => {
        if (data == undefined) {
            toast(t('pleaseLogin'));
            return;
        } else {
            setOpenModal(true)
        }
    }

    const deleteTokens = () => {
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        toast.success(t('logOut'));
        onClose();
        window.location.reload()
    }

    return (
        <div className="md:min-w-16 md:w-16 w-full md:h-72 h-full bg-secondary-200 md:rounded-3xl rounded-t-3xl flex md:flex-col justify-around items-center">
            <Link className={`menu__item ${pathname == "/home/products" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/home/products">
                <RiHome3Line />
            </Link>
            <Link className={`menu__item ${pathname == "/home/categories" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/home/categories">
                <TbCategory2 />
            </Link>
            <Link className={`menu__item relative ${pathname == "/home/cart" ? "bg-primary-100 text-white" : "hover:text-primary-100"}`} href="/home/cart">
                <IoCartOutline />
                {cart.length >= 1 ?
                    <span className="px-[6px] h-4 text-[9px] flex items-center justify-center left-5 bottom-5 pt-[2px] rounded-full bg-red-500 text-secondary-0 absolute">{language == 'fa' ? toPersianNumbers(cart.length) : cart.length}</span>
                    : null
                }
            </Link>
            <button onClick={() => logOutHandler()} className="menu__item hover:text-red-500">
                <TbLogout />
            </button>
            <Modal
                open={openModal}
                onClose={onClose}
                title={t('modal.logOutTitle')}
            >
                <div className="w-full flex items-center justify-around">
                    <button className="btn btn--primary w-56 mx-1" onClick={() => deleteTokens()}>{t('modal.accBtn')}</button>
                    <button className="btn btn--primary w-56 mx-1 bg-red-500" onClick={() => onClose()}>{t('modal.closeBtn')}</button>
                </div>
            </Modal>
        </div>
    )
}

export default Menu