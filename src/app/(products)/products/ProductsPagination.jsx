"use client"
import Loading from "@/common/Loading"
import ProductCard from "./ProductCard"
import { getProducts } from "@/services/productService";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
        <div className="overflow-y-auto w-full h-full flex gap-4 flex-wrap items-center justify-center md:justify-start">
            <ProductCard products={products}/>
            <div ref={ref} className="w-full">
                <Loading />
            </div>
        </div>
    )
}

export default ProductsPagination