"use client"
import { useCart } from "@/context/CartContext"
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useTranslation } from "react-i18next";

function CartAllItems() {
    const { cart } = useCart()
    const { t } = useTranslation();
    const { language } = useLanguage()
    const total = cart.reduce((acc, cur) => acc + cur.quantity, 0)

    return (
        <span className='w-full md:h-1/6 h-[7%] text-secondary-0 md:text-xl flex items-start md:items-center justify-center' dir={language == 'fa' ? "ltr" : "rtl"}>
            {t('cartTotal')} ( {language == 'fa' ? toPersianNumbers(total) : total} )
        </span>
    )
}

export default CartAllItems