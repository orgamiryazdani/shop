"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { useTranslation } from "react-i18next";

function CategoryCard({ data }) {
    const router = useRouter()
    const { t } = useTranslation();

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams()
            params.set(name, value)
            return params.toString()
        }, []
    )

    const clickHandler = (id) => {
        router.push("/products" + "?" + createQueryString("categoryId", id))
    }

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            <span className='w-full h-1/6 text-secondary-0 text-xl flex items-center justify-center'>
                {t('selectCategory')}
            </span>
            <div dir="rtl" className="w-full h-5/6 flex flex-wrap overflow-y-auto lg:justify-end justify-center items-center pb-16 md:pb-0">
                {data.map((category) => (
                    <a onClick={() => clickHandler(category.id)} key={category.id} className="bg-secondary-200 cursor-pointer w-[22rem] h-64 m-3 rounded-xl overflow-hidden">
                        <div className="w-full h-5/6">
                            <img src={category.image} alt={category.name} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-1/6 p-2 flex items-end justify-end">
                            <p>{category.name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard