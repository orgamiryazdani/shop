import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem("cartItems")) || [];
        localStorage.setItem("cartItems", JSON.stringify(storedValue));
        setCart(storedValue);
    }, []);

    const addItemToCart = (product) => {
        const updatedProduct = { ...product, quantity: 1 };
        setCart((prevCart) => [...prevCart, updatedProduct]);
        localStorage.setItem("cartItems", JSON.stringify([...cart, updatedProduct]));
        toast.success(product.title + " " + t('addCart'));
    }

    const handleQuantityChange = (productId, change) => {
        const updatedCartItems = cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + change } : item
        );
        // حذف محصول اگر تعداد به صفر رسیده باشد
        const productToRemoveIndex = updatedCartItems.findIndex((item) => item.id === productId);
        if (productToRemoveIndex !== -1 && updatedCartItems[productToRemoveIndex].quantity === 0) {
            updatedCartItems.splice(productToRemoveIndex, 1);
        }
        setCart(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const handleDelete = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }

    const payCart = () => {
        localStorage.removeItem("cartItems");
        setCart([]);
        toast.success(t('order'));
    }

    return <CartContext.Provider value={{ cart, addItemToCart, handleQuantityChange, payCart, handleDelete }}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) throw new Error("CartContext was used outside of CartContext")

    return context
}