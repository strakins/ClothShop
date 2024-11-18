import { useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext';
import Title from "../components/Title";
import { RiDeleteBin3Line } from "react-icons/ri";

const Cart = () => {

  const {products, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className="border-1 pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <section>
        {
          cartData.map((item, i) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <article key={i} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className="w-18 sm:w-24 rounded-md"  src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-sm sm:text-lg font-medium">{currency} {productData.price}</p>
                      <p className="text-sm text-white font-medium bg-blue-500 px-1.5 py-1 rounded">{item.size}</p>
                    </div>
                  </div>
                </div>

                <input className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}/>
                <RiDeleteBin3Line className="text-red-500 cursor-pointer text-md " />
              </article>
            )
          })
        }
      </section>
    </div>
  )
}

export default Cart