"use client"
import ProductCard from "@/app/(products)/products/ProductCard";
import { useEffect, useState } from "react";

function Page() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cartItems")) || [])
    }, [products])

    return (
        <div className="overflow-y-auto w-full h-full flex gap-4 flex-wrap items-center justify-center md:justify-start">
            <ProductCard products={products} />
        </div>
    )
}

export default Page