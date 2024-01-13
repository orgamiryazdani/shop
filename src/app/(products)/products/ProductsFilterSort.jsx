"use client"

import Modal from "@/common/Modal";
import Select from "@/common/Select";
import { Slider } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { FaFilter } from "react-icons/fa6";

const option = [
    {
        label: "بیشترین",
        value: "price_min"
    },
    {
        label: "کمترین",
        value: "price_max"
    }
]

function valuetext(value) {
    return `${value}°C`;
}

function ProductsFilterSort() {
    const [openModal, setOpenModal] = useState(false)

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [selectedCategories, setSelectedCategories] = useState(
        searchParams.get("price_max") || []
    )

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        }, [searchParams]
    )

    const priceCategoryHandler = (e) => {
        const value = 1;
        if (selectedCategories.includes(value)) {
            const categories = selectedCategories.filter(c => c !== value)
            setSelectedCategories(categories)
            router.push(pathname + "?" + createQueryString("category", categories))
        } else {
            setSelectedCategories([...selectedCategories, value])
            router.push(pathname + "?" + createQueryString("category", [...selectedCategories, value]))
        }
    }

    const onClose = () => {
        setOpenModal(false);
    }

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div onClick={() => setOpenModal(true)} className="button">فیلتر <FaFilter className="text-sm text-secondary-600 mr-2" /></div>
            <Modal
                open={openModal}
                onClose={onClose}
                title="فیلتر محصولات"
            >
                <div className="px-3">
                    <label>محدوده قیمت</label>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </div>
                <Select
                    options={option}
                    value={option}
                    onChange={{}}
                    label="دسته بندی"
                />
                <button onClick={() => priceCategoryHandler()} className="btn btn--primary w-full mt-5">تایید</button>
            </Modal>
        </>
    )
}

export default ProductsFilterSort