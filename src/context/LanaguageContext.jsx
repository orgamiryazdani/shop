"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'fa',)
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    useEffect(() => {
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
        document.body.dir = language === 'fa' ? 'rtl' : 'ltr'
        //document.body.dataset.sidebarPosition = language === 'fa' ? 'right' : 'left'
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