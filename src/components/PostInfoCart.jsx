"use client"
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { SiSingaporeairlines } from "react-icons/si"

function PostInfoCart() {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className={`md:w-1/2 w-full flex items-center justify-end`}>
            <div className={`w-40 md:h-[132px] h-24 rounded-md p-2 bg-secondary-200 md:text-xs text-[10px] flex flex-col justify-around items-start`}>
                <span dir={language == 'fa' ? "ltr" : "rtl"} className="flex items-center text-[11px]"><SiSingaporeairlines className="px-1 w-[22px] h-[22px] pb-1" />{t('singleProduct.postSend')}</span>
                <span>{t('singleProduct.postPrice')} : {language == "fa" ? toPersianNumbersWithComma(38000) + " " + t('currency') : t('currency') + 38000}</span>
                <span>{t('singleProduct.postTime')}</span>
            </div>
        </div>
    )
}

export default PostInfoCart