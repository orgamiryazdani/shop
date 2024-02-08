"use client"
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa6";

function AddToCartButton({ data }) {
    const { cart, addItemToCart, handleQuantityChange } = useCart()
    const { t } = useTranslation();
    
    return (
        <>
            {cart.find((item) => item.id === data.id)?.quantity >= 1 ?
                <button onClick={() => handleQuantityChange(data.id, -1)} className="btn bg-red-500 h-12 flex items-center justify-center"><FaTrash className="pr-1 w-5 h-5 pb-1"/>{t('singleProduct.deleteCart')}</button>
                :
                <button onClick={() => addItemToCart(data)} className="btn btn--primary">{t('singleProduct.addCart')}</button>
            }
        </>
    )
}

export default AddToCartButton