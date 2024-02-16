"use client"
import { toLocalDateString } from "@/utils/toLocalDate"
import { toPersianNumbers } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { FaShop } from "react-icons/fa6"
import { IoMdTime } from "react-icons/io"

function ProductInfo({ data }) {
    const { t } = useTranslation();

    return (
        <div className="md:w-1/2 w-full text-xs md:text-base md:h-full flex flex-col items-end justify-between mt-3">
            <p>{t('id')} : {toPersianNumbers(data.id)}</p>
            <span className="flex items-center"><FaShop className="pr-2 text-xl w-7 h-7 pb-1" />{t('singleProduct.storeSend')}</span>
            <p className="flex items-center"><IoMdTime className="pr-2 text-xl w-7 h-7 pb-1 text-yellow-400" />{t('singleProduct.dateOfRelease')} : {toLocalDateString(data.creationAt)}</p>
        </div>
    )
}

export default ProductInfo