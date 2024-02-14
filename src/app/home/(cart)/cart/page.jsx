"use client"
import CartAllItems from "@/components/CartAllItems";
import { useCart } from "@/context/CartContext";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useTranslation } from "react-i18next";
import ProductCard from "../../(products)/products/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

function Page() {
    const { cart, payCart } = useCart()
    const { t } = useTranslation();
    const { language } = useLanguage()
    const price = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

    if (cart.length == 0) return <div className="w-full h-full flex items-center justify-center text-lg">{t('cartLength')}</div>

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            <CartAllItems />
            <div className="overflow-y-auto w-full h-5/6 relative flex gap-4 pb-32 lg:pb-0 flex-wrap items-center justify-center xl:justify-start">
                <ProductCard products={cart} />
            </div>
            <div className="w-full px-4 md:px-0 h-16 fixed md:relative bg-secondary-100 md:bottom-0 bottom-16 flex items-center">
                <div className="flex items-center font-bold text-secondary-0 md:text-2xl text-sm w-2/4">
                    <p>{t('cartPage.purchase')} : </p>
                    <span className="px-2">{language == 'fa' ? toPersianNumbersWithComma(price) + " " + t('currency') : t('currency') + price}</span>
                </div>
                <button onClick={() => payCart()} className="btn btn--primary w-2/4 text-xs md:text-lg">{t('cartPage.payment')}</button>
            </div>
        </div>
    )
}

export default Page