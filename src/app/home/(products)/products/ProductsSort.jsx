"use client"
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
            <div className="w-full flex items-center justify-between text-sm text-secondary-600">
                <span>{t('modal.maximum')}</span>
                <p>{t('modal.from')} {toPersianNumbersWithComma(value[0])} {t('currency')} {t('modal.to')} {toPersianNumbersWithComma(value[1])} {t('currency')}</p>
                <span>{t('modal.lowest')}</span>
            </div>
        </div>
    )
}

export default ProductsSort