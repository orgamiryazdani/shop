import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

function ProductsSearch() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [searchValue, setSearchValue] = useState("")
    const { t } = useTranslation();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        }, [searchParams]
    )

    const searchByTitle = () => {
        router.push(pathname + "?" + createQueryString("title", searchValue))
    }


    return (
        <div className="flex items-center justify-center">
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                className="w-72 h-12 rounded-3xl flex items-center justify-center border-secondary-300 bg-transparent border text-center placeholder:text-base p-3 text-sm"
                placeholder={t('search')}
                onKeyDown={(e) => {
                    e.key === "Enter" ? searchByTitle() : null
                }}
            />
        </div>
    )
}

export default ProductsSearch