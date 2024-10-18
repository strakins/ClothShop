import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSellers = () => {

    const { products } = useContext(ShopContext);
    console.log(products)
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((product) => (product.bestseller))
        setBestSeller(bestProducts.slice(0, 5));
    }, [])
    
    console.log(bestSeller);
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        </p>
      </div>
      {/* Produts List */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
      {
            bestSeller.map((product, i) => (
                <ProductItem key={i} id={product._id} name={product.name} image={product.image} price={product.price} />
            ))
        }
      </section>
    </div>
  )
}

export default BestSellers;
