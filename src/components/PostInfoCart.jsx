"use client"
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { useTranslation } from "react-i18next";
import { SiSingaporeairlines } from "react-icons/si"

function PostInfoCart() {
    const { t } = useTranslation();

    return (
        <div className="w-1/2 flex items-center justify-start">
            <div className="w-40 h-[132px] rounded-md p-2 bg-secondary-200 text-xs flex flex-col items-end justify-around">
                <span className="flex items-center"><SiSingaporeairlines className="pr-1 w-[22px] h-[22px] pb-1" />{t('singleProduct.postSend')}</span>
                <span>{t('singleProduct.postPrice')} : {toPersianNumbersWithComma(38000)} {t('currency')}</span>
                <span>{t('singleProduct.postTime')}</span>
            </div>
        </div>
    )
}

export default PostInfoCart