"use client"
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { BiSolidBadgeDollar } from "react-icons/bi"
import { TiTick } from "react-icons/ti"

function PriceInfoProduct({ price }) {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="flex items-center justify-between my-5" dir={language == 'fa' ? "ltr" : "rtl"}>
            <div className="flex flex-col items-end">
                <span className="flex items-center text-sm md:text-base"><TiTick className="pr-2 text-xl md:w-8 w-8 md:h-6 h-6  text-primary-300" />{t('singleProduct.stock')}</span>
                <p className="text-secondary-500 font-bold md:text-sm text-[10px] flex items-center"><TiTick className="md:w-7 w-5 md:h-7 h-5 pr-0 text-primary-300" />{t('singleProduct.visiting')}</p>
            </div>
            <span dir={language == 'fa' ? "rtl" : "ltr"} className="flex items-center font-bold md:text-2xl text-sm">{t('singleProduct.price')} : <BiSolidBadgeDollar className="px-1 pb-1 text-yellow-400 md:w-8 w-6 md:h-8 h-6" /> {language == 'fa' ? toPersianNumbersWithComma(price) : price} </span>
        </div>
    )
}

export default PriceInfoProduct