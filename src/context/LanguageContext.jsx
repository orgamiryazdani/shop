import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("")
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedValue = localStorage.getItem("language") || "fa";
        localStorage.setItem("language", storedValue);
        setLanguage(storedValue);
    }, [])

    const changeLanguage = (language) => {
        setLanguage(language)
        localStorage.setItem('language', language)
    }

    useEffect(() => {
        i18n.changeLanguage(language)
        document.body.dir = language == 'fa' ? 'rtl' : 'ltr'
    }, [language])


    return <LanguageContext.Provider value={{ language, changeLanguage }}>
        {children}
    </LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) throw new Error("LanguageContext was used outside of LanguageProvider")

    return context
}