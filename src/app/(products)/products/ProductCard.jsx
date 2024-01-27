"use client"
import Loading from "@/common/Loading";
import { getProducts } from "@/services/productService";
import { toLocalDateString } from "@/utils/toLocalDate"
import { toPersianNumbers, toPersianNumbersWithComma } from "@/utils/toPersianNumbers"
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

function ProductCard({ initialProducts }) {
    const [products, setProducts] = useState(initialProducts)
    const [offset, setOffset] = useState(0)
    const [ref, inView] = useInView()

    async function loadMoreProducts() {
        const offsetValue = offset + 8
        const product = await getProducts({
            offset: offsetValue, limit: 8,
            search: window.location.href.split("?")[1] || "",
        })
        if (products?.length) {
            setOffset(offsetValue)
            setProducts((prev) => [
                ...(prev?.length ? prev : []),
                ...product.data
            ])
        }
    }

    useEffect(() => {
        setProducts(initialProducts)
    }, [initialProducts])

    useEffect(() => {
        if (inView) {
            loadMoreProducts();
        }
    }, [inView])

    return (
        <div className="overflow-y-auto w-full h-full flex gap-4 flex-wrap items-center pt-10 justify-center md:justify-start">
            {
                products?.map((product) => (
                    <div className="bg-secondary-200 w-[272px] h-96 rounded-xl overflow-hidden" key={product.id}>
                        {/* image product */}
                        <div className="w-full h-1/2 overflow-hidden flex items-center justify-center">
                            <img src={product.images} className="rounded-t-xl w-full h-full object-cover" alt="product" />
                        </div>
                        <div className="w-full h-1/2 pt-10 relative flex flex-col items-end p-4 justify-between">
                            <div className="w-full left-0 px-3 absolute flex items-center justify-between -top-[24px]">
                                {/* price */}
                                <div className="w-12 h-12 rounded-lg overflow-hidden">
                                    <div className="w-full h-1/2 bg-black flex items-center justify-center text-xs">${toPersianNumbersWithComma(product.price)}</div>
                                    <div className="w-full h-1/2 bg-primary-200 text-primary-300 text-xs flex items-center justify-center">موجود</div>
                                </div>
                                {/* category Image */}
                                <div className="w-12 h-12 overflow-hidden flex items-center rounded-xl justify-center">
                                    <img
                                        src={product.category.image}
                                        className="w-full h-full object-cover"
                                        alt="category"
                                    />
                                </div>
                            </div>
                            {/* info product */}
                            <div className="w-full flex flex-col items-start gap-y-3">
                                <p className="text-secondary-600 text-sm">شماره محصول : {toPersianNumbers(product.id)}</p>
                                <span className="text-secondary-400 text-sm">{toLocalDateString(product.creationAt)}</span>
                            </div>
                            <p className="text-secondary-0 font-bold">{product.title}</p>
                            <div className="w-full flex items-center justify-between">
                                <FaCartPlus className="text-2xl cursor-pointer text-secondary-500" />
                                <div className="rounded-xl w-fit p-3 text-sm bg-secondary-300 text-secondary-500 flex items-center justify-center font-bold">{product.category.name}#</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div ref={ref} className="w-full">
                <Loading />
            </div>
        </div>
    )
}

export default ProductCard