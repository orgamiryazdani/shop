"use client"
import { toLocalDateString } from "@/utils/toLocalDate"
import { numberWithCommas, toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import truncateText from "@/utils/truncateText";
import { FaCartPlus, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

function ProductCard({ products }) {
    const { cart, addItemToCart, handleQuantityChange } = useCart()
    const { t } = useTranslation();
    const { language } = useLanguage()

    return (
        <>
            {
                products?.map((product) => (
                    <div className="bg-secondary-200 md:w-[272px] w-[320px] h-96 rounded-xl overflow-hidden" dir="rtl" key={product.id}>
                        {/* image product */}
                        <Link href={`/product/${product.id}`} target="_blank">
                            <div className="w-full h-1/2 overflow-hidden flex items-center justify-center">
                                <img src={product.images} className="rounded-t-xl w-full h-full object-cover" alt={product.title} />
                            </div>
                        </Link>
                        <div className="w-full h-1/2 pt-10 relative flex flex-col items-end p-4 justify-between">
                            <div className="w-full left-0 px-3 absolute flex items-center justify-between -top-[24px]">
                                {/* price */}
                                <div className="w-14 h-12 rounded-lg overflow-hidden">
                                    <div className="w-full h-1/2 bg-black flex items-center justify-center text-xs">${language == 'fa' ? toPersianNumbersWithComma(product.price) : numberWithCommas(product.price)}</div>
                                    <div className="w-full h-1/2 bg-primary-200 text-primary-300 text-xs flex items-center justify-center">{t('available')}</div>
                                </div>
                                {/* category Image */}
                                <div className="w-12 h-12 overflow-hidden flex items-center rounded-xl justify-center">
                                    <img
                                        src={product.category.image}
                                        className="w-full h-full object-cover"
                                        alt={product.category.name}
                                    />
                                </div>
                            </div>
                            {/* info product */}
                            <div className="w-full flex flex-col items-start gap-y-3" dir={language == 'fa' ? "rtl" : "ltr"}>
                                <p className="text-secondary-600 text-sm">{t('id')} : {language == 'fa' ? toPersianNumbers(product.id) : product.id}</p>
                                <span className="text-secondary-400 text-sm pb-1">
                                    {language === 'fa'
                                        ? toLocalDateString(product.creationAt)
                                        : new Date(product.creationAt).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                        })}
                                </span>
                            </div>
                            <a href={`/product/${product.id}`} target="_blank" dir="ltr">
                                <p className="text-secondary-0 font-bold">{truncateText(product.title, 23)}</p>
                            </a>
                            <div className="w-full flex items-center justify-between">
                                {cart.some((item) => item.id === product.id) ? (
                                    <div className="w-20 h-10 flex items-center justify-between">
                                        <span
                                            className="text-sky-500 cursor-pointer"
                                            onClick={() => handleQuantityChange(product.id, 1)}
                                        >
                                            <FaPlus />
                                        </span>
                                        <p className="rounded-[10px] bg-secondary-300 h-7 px-3 text-center pt-1">
                                            {language == 'fa' ? toPersianNumbers(cart.find((item) => item.id === product.id)?.quantity || 1) : cart.find((item) => item.id === product.id)?.quantity || 1}
                                        </p>
                                        <span
                                            className="text-rose-500 cursor-pointer"
                                            onClick={() => handleQuantityChange(product.id, -1)}
                                        >
                                            {cart.find((item) => item.id === product.id)?.quantity == 1 ?
                                                <FaTrash />
                                                :
                                                <FaMinus />
                                            }
                                        </span>
                                    </div>
                                ) : (
                                    <FaCartPlus onClick={() => addItemToCart(product)} className="text-2xl cursor-pointer text-secondary-500" />
                                )}
                                <div className="rounded-xl w-fit p-3 text-sm bg-secondary-300 text-secondary-500 flex items-center justify-center font-bold">{product.category.name}#</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default ProductCard