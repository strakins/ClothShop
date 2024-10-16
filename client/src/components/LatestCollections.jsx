import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";
import Title from '../components/Title';
import ProductItem from "./ProductItem";

const LatestCollections = () => {

    const { products } = useContext(ShopContext);
    const [lastestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [])

    // console.log(products)
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      {/* Produts List */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {
            lastestProducts.map((product, i) => (
                <ProductItem key={i} id={product._id} name={product.name} image={product.image} price={product.price} />
            ))
        }
      </section>
    </div>
  )
}

export default LatestCollections
