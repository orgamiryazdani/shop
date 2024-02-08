"use client"
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { BiSolidBadgeDollar } from "react-icons/bi"
import { TiTick } from "react-icons/ti"

function PriceInfoProduct({ price }) {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-end">
                <span className="flex items-center"><TiTick className="pr-2 text-xl w-8 h-8  text-primary-300" />{t('singleProduct.stock')}</span>
                <p className="text-secondary-500 font-bold text-sm flex items-center"><TiTick className="w-7 h-7 pr-0 text-primary-300" />{t('singleProduct.visiting')}</p>
            </div>
            <span className="flex items-center font-bold text-2xl"><BiSolidBadgeDollar className="pr-1 pb-1 text-yellow-400 w-7 h-7" />{t('singleProduct.price')} : {toPersianNumbersWithComma(price)}</span>
        </div>
    )
}

export default PriceInfoProduct