"use client"
import Select from "@/common/Select";
import { getCategories } from "@/services/categoryService";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function ProductsFilter() {
    const router = useRouter()
    const pathname = usePathname()
    const category = getCategories()
    const searchParams = useSearchParams()
    const [selectedCategories, setSelectedCategories] = useState(
        searchParams.get("categoryId")?.split(",") || []
    )
    const [selectValue, setSelectValue] = useState(selectedCategories)
    const [categoryValue, setCategoryValue] = useState([])

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

    const selectChangeHandler = (e) => {
        const selectValue = e.target.value;
        setSelectValue(e.target.value);
        setSelectedCategories([...selectedCategories, selectValue])
        router.push(pathname + "?" + createQueryString("categoryId", selectValue))
    }

    return (
        <Select
            options={categoryValue}
            value={selectValue}
            onChange={selectChangeHandler}
            label="دسته بندی"
        />
    )
}

export default ProductsFilter