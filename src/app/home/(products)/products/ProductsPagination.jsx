"use client"
import Loading from "@/common/Loading"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import useProducts from "@/hooks/useProducts";

function ProductsPagination({ initialProducts }) {
    const [product, setProduct] = useState(initialProducts)
    const [offset, setOffset] = useState(0)
    const [ref, inView] = useInView()

    const { products, refetch } = useProducts({
        offset: offset, limit: 8,
        search: window.location.href.split("?")[1] || "",
    })

    function LoadMoreProducts() {
        const offsetValue = offset + 8
        setOffset(offsetValue)
        if (product?.length) {
            setProduct((prev) => [
                ...(prev?.length ? prev : []),
                ...products
            ])
        }
        refetch()
    }

    useEffect(() => {
        setProduct(initialProducts)
    }, [initialProducts])

    useEffect(() => {
        if (inView) {
            LoadMoreProducts();
        }
    }, [inView])

    return (
        <div className="flex flex-col items-center justify-between w-full h-full">
            <Header />
            <div className="overflow-y-auto w-full h-5/6 flex gap-4 flex-wrap items-center justify-center 2xl:justify-start">
                <ProductCard products={product} />
                <div ref={ref} className="w-full h-10 flex items-center justify-center">
                    {refetch && products.length > 0 ? <Loading /> : null}
                </div>
            </div>
        </div>
    )
}

export default ProductsPagination