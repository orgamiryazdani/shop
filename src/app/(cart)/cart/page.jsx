"use client"
import ProductCard from "@/app/(products)/products/ProductCard";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Page() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

    // useEffect(() => {
    //     setProducts(JSON.parse(localStorage.getItem("cartItems")) || [])
    // }, [products])

    const payCart = () => {
        localStorage.removeItem("cartItems");
        setProducts([]);
        toast.success("سفارش شما ثبت شد");
    }

    return (
        <>
            <div className="overflow-y-auto w-full h-full relative flex gap-4 pb-16 flex-wrap items-center justify-center md:justify-start">
                <ProductCard products={products} />

            </div>
            <div className="w-5/6 h-16 fixed bg-secondary-100 bottom-0 flex items-center">
                <div className="flex items-center font-bold text-secondary-0 text-2xl w-2/4">
                    <p>جمع خرید : </p>
                    <span className="px-2">{toPersianNumbersWithComma(products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0))}</span>
                    <p>دلار</p>
                </div>
                <button onClick={() => payCart()} className="btn btn--primary w-2/4">ثبت و پرداخت</button>
            </div>
        </>
    )
}

export default Page