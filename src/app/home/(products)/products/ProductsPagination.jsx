"use client"
import Loading from "@/common/Loading"
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import { getProducts } from "@/services/productService";

function ProductsPagination({ initialProducts }) {
    const [product, setProduct] = useState(initialProducts)
    const [offset, setOffset] = useState(0)
    const [showLoading, setShowLoading] = useState(true)
    const [ref, inView] = useInView()

    async function LoadMoreProducts() {
        const offsetValue = offset + 8
        const product = getProducts({
            offset: offsetValue, limit: 8,
            search: window.location.href.split("?")[1] || "",
        })
        const [products] = await Promise.all([
            product,
        ]);
        if (products.length == 0) {
            setShowLoading(false)
        }
        console.log(products)
        setOffset(offsetValue)
        if (products?.length) {
            setProduct((prev) => [
                ...(prev?.length ? prev : []),
                ...products
            ])
        }
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
                <div ref={ref} className="w-full h-10 flex items-center justify-center mb-10 md:mb-0">
                    {
                        showLoading ?
                            <Loading />
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsPagination