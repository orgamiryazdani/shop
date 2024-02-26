"use client"
import CartAllItems from "@/components/CartAllItems";
import { useCart } from "@/context/CartContext";
import { numberWithCommas, toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useTranslation } from "react-i18next";
import ProductCard from "../../(products)/products/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

function Page() {
    const { cart, payCart } = useCart()
    const { t } = useTranslation();
    const { language } = useLanguage()
    const price = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (cart.length == 0 && isClient) return <div className="w-full h-full flex items-center justify-center text-lg text-secondary-0">{t('cartLength')}</div>

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            {
                isClient ?
                    <>
                        <CartAllItems />
                        <div className="overflow-y-auto w-full md:h-5/6 h-[93%] relative flex gap-4 pb-32 lg:pb-0 flex-wrap items-center justify-center xl:justify-start">
                            <ProductCard products={cart} />
                        </div>
                        <div className="w-full px-4 md:px-0 h-16 fixed md:relative bg-secondary-100 md:bottom-0 bottom-16 flex items-center">
                            <div className="flex items-center font-bold text-secondary-0 md:text-2xl text-sm w-2/4">
                                <p>{t('cartPage.purchase')} : </p>
                                <span className="px-2">{language == 'fa' ? toPersianNumbersWithComma(price) + " " + t('currency') : t('currency') + numberWithCommas(price)}</span>
                            </div>
                            <button onClick={() => payCart()} className="btn btn--primary w-2/4 text-xs md:text-lg">{t('cartPage.payment')}</button>
                        </div>
                    </>
                    : null
            }
        </div>
    )
}

export default Page