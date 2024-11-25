import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";


const CartTotal = () => {

  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
      <section className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"}  />
      </section>
      <section className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <b>Total</b>
            <p>{currency} {delivery_fee() === 0 ? 0 : getCartAmount() + delivery_fee()}.00</p>
        </div>
      </section>
    </div>
  )
}

export default CartTotal
