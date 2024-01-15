"use client"

import Modal from "@/common/Modal";
import Select from "@/common/Select";
import { getCategories } from "@/services/categoryService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { Slider } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFilter } from "react-icons/fa6";

function valuetext(value) {
    return `${value}°C`;
}

function ProductsFilterSort() {
    const router = useRouter()
    const pathname = usePathname()
    const category = getCategories()
    const searchParams = useSearchParams()
    const [openModal, setOpenModal] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState(
        searchParams.get("categoryId")?.split(",") || []
    )
    const [selectValue, setSelectValue] = useState(selectedCategories)
    const [categoryValue, setCategoryValue] = useState("")

    useEffect(() => {
        async function getCategoryFn() {
            const [{ data }] = await Promise.all([
                category,
            ]);
            setCategoryValue(data ? data : [])
        }
        getCategoryFn()
    }, [])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        }, [searchParams]
    )

    const priceCategoryHandler = () => {
        if (selectValue.length === 0 || selectValue === 0) {
            toast.error("لطفا مقداری انتخاب کنید")
        } else {
            if (selectedCategories.includes(selectValue[0])) {
                toast.error("لطفا مقدار جدیدی انتخاب کنید")
            } else {
                setSelectedCategories([...selectedCategories, selectValue])
                router.push(pathname + "?" + createQueryString("categoryId", selectValue))
            }
        }
    }

    const onClose = () => {
        setOpenModal(false);
    }

    const [value, setValue] = useState([0, 1000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const selectChangeHandler = (e) => {
        console.log(e.target.value);
        setSelectValue(e.target.value);
    }

    return (
        <>
            <div onClick={() => setOpenModal(true)} className="button">فیلتر <FaFilter className="text-sm text-secondary-600 mr-2" /></div>
            <Modal
                open={openModal}
                onClose={onClose}
                title="فیلتر محصولات"
            >
                <div className="px-5">
                    <label>محدوده قیمت</label>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={0}
                        max={1000000}
                    />
                    <div className="w-full flex items-center justify-between text-sm text-secondary-600">
                        <span>گران ترین</span>
                        <p>از {toPersianNumbersWithComma(value[0])} دلار تا {toPersianNumbersWithComma(value[1])} دلار</p>
                        <span>ارزان ترین</span>
                    </div>
                </div>
                <Select
                    options={categoryValue}
                    value={selectValue}
                    onChange={selectChangeHandler}
                    label="دسته بندی"
                />
                <button onClick={() => {
                    priceCategoryHandler()
                    onClose()
                }} className="btn btn--primary w-full mt-5">تایید</button>
            </Modal>
        </>
    )
}

export default ProductsFilterSort