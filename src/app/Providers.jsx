"use client";
import { CartProvider } from "@/context/CartContext";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "../utils/i18n"

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <DarkModeProvider>
      <CartProvider>
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </LanguageProvider>
      </CartProvider>
    </DarkModeProvider>
  );
}