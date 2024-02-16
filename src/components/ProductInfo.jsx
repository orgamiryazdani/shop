"use client"
import { toLocalDateString } from "@/utils/toLocalDate"
import { toPersianNumbers } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { FaShop } from "react-icons/fa6"
import { IoMdTime } from "react-icons/io"
import PostInfoCart from "./PostInfoCart";
import { useLanguage } from "@/context/LanguageContext";

function ProductInfo({ data }) {
    const { t } = useTranslation();
    const { language } = useLanguage();

    return (
        <div className="flex flex-wrap items-end md:h-36 h-auto justify-between mt-3" dir={language == 'fa' ? "rtl" : "ltr"}>
            <div className="md:w-1/2 w-full text-xs md:text-base md:h-full flex flex-col items-end justify-between mt-3" dir={language == 'fa' ? "ltr" : "rtl"}>
                <p>{t('id')} : {language == 'fa' ? toPersianNumbers(data.id) : data.id}</p>
                <span className="flex items-center"><FaShop className="px-2  w-9 h-9 pb-1" />{t('singleProduct.storeSend')}</span>
                <p className="flex items-center"><IoMdTime className="px-2 w-9 h-9 pb-1 text-yellow-400" />{t('singleProduct.dateOfRelease')}
                    : {language == 'fa' ? toLocalDateString(data.creationAt) :
                        new Date(data.creationAt).toLocaleString('en-US', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })
                    }</p>
            </div>
            <PostInfoCart />
        </div>
    )
}

export default ProductInfo