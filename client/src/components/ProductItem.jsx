import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({productId, name, image, price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer shadow-md rounded-xl' to={`/products/${productId}`}>
      <div className='overflow-hidden'>
        <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
      </div>
      <div className='p-2'>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className=''>{currency}{price}</p> 
      </div>
    </Link>
  )
}

export default ProductItem
