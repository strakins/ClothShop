import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { IoStarSharp } from "react-icons/io5";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetailsPage = () => {

  const {products, currency, addToCart} = useContext(ShopContext);

  const {productId} = useParams();
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('');

  const fecthproductData = async () => {

    products.map((item) => {
      if(item._id === productId) {
        setproductData(item);
        setImage(item.image[0])
        return null;
      }
      
    })
  };

  useEffect(() => {
    fecthproductData();
  }, [productId, products])

  return  productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]">
            {
              productData.image.map((imgItem, i) => (
                <img src={imgItem} 
                  alt="" 
                  key={i} 
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" 
                  // className="h-12 w-12 my-2 cursor-pointer rounded-md border-2 border-slate-600" 
                  onClick={() => setImage(imgItem)}
                />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto"/>
          </div>
        </div>

        {/* Product Information */}
        <section className="flex-1 ">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              < IoStarSharp className="text-red-500 text-xl" />
              < IoStarSharp className="text-red-500 text-xl" />
              < IoStarSharp className="text-red-500 text-xl" />
              < IoStarSharp className="text-red-500 text-xl" />
              < IoStarSharp className="text-gray-300 text-xl" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">{currency} {productData.price} </p>
            <p className="mt-5 text-gray-500 md:w-4/5"> {productData.description} </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item, index) => (
                    <button 
                      className={`border  py-2 px-3 rounded-lg bg-blue-400 text-white text-xs ${item === size ? 'border-gray-700 border-2': ''}`} 
                      key={index}
                      onClick={() => setSize(item)}
                    > 
                      {item} 
                    </button>
                  ) )
                }
              </div>

            </div>
            <button onClick={() => addToCart(productData._id, size)} className="uppercase bg-black text-white px-8 py-3 active:bg-gray-700">Add to Cart</button>
            <hr className="mt-8 sm:w-4/5" />
            
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Products</p>
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and Exchange Policy</p>
            </div>
        
        </section>

      </div>
      {/* ------ Description and Review Section ------ */}
      <section className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
             in a piece of classical Latin literature from 45 BC, making it over 2000 years 
             old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
             looked up one of the more obscure Latin words,
          </p>
          <p>
             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
             in a piece of classical Latin literature from 45 BC, making it over 2000 years 
             old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
             looked up one of the more obscure Latin words,
          </p>
        </div>
      </section>

      {/* ---------- Display Related Products --------- */}
      <article>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      </article>

    </div>
  )
  :
  <div className="opacity-0"></div>
}

export default ProductDetailsPage
// Unsed products Card
{/* { 
  products.filter((product) => product._id == productId).map((product, index) => {
    return (
      <div key={index} className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img src={product.image[0]} alt="Product"
                        className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              <img src={product.image[1]}  alt="Thumbnail 1"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                             />
              <img src={product.image[2]}  alt="Thumbnail 2"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                             />
              <img src={product.image[3]}  alt="Thumbnail 3"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                             />
              <img src={product.image[4]}  alt="Thumbnail 4"
                            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                             />
            </div>
          </div>

          
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$349.99</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                   />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path 
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                   />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path 
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                   />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 text-yellow-500">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">Experience premium sound quality and industry-leading noise cancellation
              with
              these wireless headphones. Perfect for music lovers and frequent travelers.</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button
                                className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button
                                className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button
                                className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            <div className="mb-6">
              <label for="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" value="1"
                            className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                            className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            Add to Cart
                        </button>
              <button
                            className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            Wishlist
                        </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      </div>

    )
  })
} */}