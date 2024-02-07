"use client"
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { useContext, useEffect } from "react";
import { createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useLocalStorageState(
        typeof window !== 'undefined' && []
    );

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode])

    return <CartContext.Provider value={{ cart, toggleDarkMode }}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) throw new Error("CartContext was used outside of CartContext")

    return context
}