"use client"
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

function AddToCartButton({ data }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);

    const addToLocalStorageData = () => {
        const updatedProduct = { ...data, quantity: 1 };
        setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
        localStorage.setItem("cartItems", JSON.stringify([...cartItems, updatedProduct]));
    };

    const handleQuantityChange = (productId, change) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + change } : item
        );
        // حذف محصول اگر تعداد به صفر رسیده باشد
        const productToRemoveIndex = updatedCartItems.findIndex((item) => item.id === productId);
        if (productToRemoveIndex !== -1 && updatedCartItems[productToRemoveIndex].quantity === 0) {
            updatedCartItems.splice(productToRemoveIndex, 1);
        }
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    return (
        <>
            {cartItems.find((item) => item.id === data.id)?.quantity >= 1 ?
                <button onClick={() => handleQuantityChange(data.id, -1)} className="btn bg-red-500 h-12 flex items-center justify-center"><FaTrash className="pr-1 w-5 h-5 pb-1"/> حذف از سبد خرید</button>
                :
                <button onClick={() => addToLocalStorageData()} className="btn btn--primary">افزودن به سبد خرید</button>
            }
        </>
    )
}

export default AddToCartButton