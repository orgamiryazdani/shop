import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

function ProductsSearch() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [searchValue, setSearchValue] = useState(searchParams.get("title")?.split(",") || "")
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
        <div className="flex items-center justify-center w-full md:w-auto pt-2 md:pt-0">
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                className="md:w-72 w-full text-secondary-0 h-12 md:h-12 rounded-3xl lg:mx-0 flex items-center justify-center border-secondary-300 bg-transparent border text-center placeholder:text-base p-3 text-sm"
                placeholder={t('search')}
                onKeyDown={(e) => {
                    e.key === "Enter" ? searchByTitle() : null
                }}
                value={searchValue}
            />
        </div>
    )
}

export default ProductsSearch