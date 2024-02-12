"use client"
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { Slider } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function valuetext(value) {
    return `${value}°C`;
}

function ProductsSort() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [value, setValue] = useState([searchParams.get("price_min")?.split(",") || 0,
    searchParams.get("price_max")?.split(",") || 1000]);
    const { t } = useTranslation();
    const { language } = useLanguage()

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const params = new URLSearchParams(searchParams);
        params.set("price_min", newValue[0]);
        params.set("price_max", newValue[1]);
        router.push(pathname + "?" + params.toString());
    };

    return (
        <div className="px-5">
            <label>{t('modal.priceRange')}</label>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={1000}
            />
            <div className="w-full flex items-center justify-between text-sm text-secondary-600" dir="rtl">
                <span>{t('modal.maximum')}</span>
                <p dir={language == 'fa' ? "rtl" : "ltr"}>
                    {t('modal.from')} {language == 'fa' ? toPersianNumbersWithComma(value[0]) + " " + t('currency') : t('currency') + (value[0])} {t('modal.to')} {language == 'fa' ? toPersianNumbersWithComma(value[1]) + " " + t('currency') : t('currency') + (value[1])}
                </p>
                <span>{t('modal.lowest')}</span>
            </div>
        </div>
    )
}

export default ProductsSort