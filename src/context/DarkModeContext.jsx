import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState("");

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem("isDarkMode")) || "dark";
        localStorage.setItem("isDarkMode", JSON.stringify(storedValue));
        setIsDarkMode(window.matchMedia(`(prefers-color-scheme: ${storedValue})`).matches);
    }, [])

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode ? "light" : "dark"));
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode])

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);

    if (context === undefined) throw new Error("DarkModeContext was used outside of darkModeProvider")

    return context
}