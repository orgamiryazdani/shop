import { useCart } from "@/context/CartContext"

function CartAllItems() {
    const { cart, payCart } = useCart()
    return (
        <span className='w-full h-full text-xl flex items-center justify-center'>
            سبد خرید - تعداد کل محصولات ( {cart.reduce((acc, cur) => acc + cur.quantity, 0)} )
        </span>
    )
}

export default CartAllItems