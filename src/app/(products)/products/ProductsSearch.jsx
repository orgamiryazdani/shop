import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { CiSearch } from "react-icons/ci";

function ProductsSearch() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [searchValue, setSearchValue] = useState("")

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
                className="w-64 h-10 rounded-r-3xl border-secondary-300 bg-transparent border border-l-0 placeholder:text-secondary-0 placeholder:text-sm p-3 text-sm"
                placeholder="جستجو کنید ..."
                onKeyDown={(e) => {
                    e.key === "Enter" ? searchByTitle() : null
                }}
            />
            <div onClick={() => searchByTitle()} className="w-10 h-10 text-secondary-0 cursor-pointer rounded-l-3xl border border-secondary-300 flex items-center justify-center border-r-0">
                <CiSearch />
            </div>
        </div>
    )
}

export default ProductsSearch