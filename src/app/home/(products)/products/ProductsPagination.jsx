"use client"
import Loading from "@/common/Loading"
import ProductCard from "./ProductCard"
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";

function ProductsPagination({ initialProducts }) {
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
        <div className="flex flex-col items-center justify-between w-full h-full">
            <Header />
            <div className="overflow-y-auto w-full h-5/6 flex gap-4 flex-wrap items-center justify-center 2xl:justify-start">
                <ProductCard products={products} />
                <div ref={ref} className="w-full">
                    <Loading />
                </div>
            </div>
        </div>
    )
}

export default ProductsPagination