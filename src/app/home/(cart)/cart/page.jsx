"use client"
import CartAllItems from "@/components/CartAllItems";
import { useCart } from "@/context/CartContext";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useTranslation } from "react-i18next";
import ProductCard from "../../(products)/products/ProductCard";

function Page() {
    const { cart, payCart } = useCart()
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            <CartAllItems />
            <div className="overflow-y-auto w-full h-5/6 relative flex gap-4 pb-16 flex-wrap items-center justify-center xl:justify-start">
                <ProductCard products={cart} />
            </div>
            <div className="w-5/6 h-16 fixed bg-secondary-100 bottom-0 flex items-center">
                <div className="flex items-center font-bold text-secondary-0 text-2xl w-2/4">
                    <p>{t('cartPage.purchase')} : </p>
                    <span className="px-2">{toPersianNumbersWithComma(cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0))}</span>
                    <p>{t('currency')}</p>
                </div>
                <button onClick={() => payCart()} className="btn btn--primary w-2/4">{t('cartPage.payment')}</button>
            </div>
        </div>
    )
}

export default Page