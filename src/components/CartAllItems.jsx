import { useCart } from "@/context/CartContext"

function CartAllItems() {
    const { cart } = useCart()
    return (
        <span className='w-full h-1/6 text-secondary-0 text-xl flex items-center justify-center'>
            سبد خرید - تعداد کل محصولات ( {cart.reduce((acc, cur) => acc + cur.quantity, 0)} )
        </span>
    )
}

export default CartAllItems