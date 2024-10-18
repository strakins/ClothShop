import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import {  RiArrowDropRightFill } from "react-icons/ri";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


const ProductList = () => {

  const [filterItems, setFilterItems] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const {products} = useContext(ShopContext);

  useEffect(() => {
    setFilterItems(products);
  }, [])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <section className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          <RiArrowDropRightFill className={`text-2xl sm:hidden ${showFilter ? "rotate-90" : ""}`}/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-6 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-semibold"> CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Men'} /> Men
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Women'} /> Women
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-6 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-semibold"> TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex-1">
        <article className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}  />

          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </article>

        {/* Product Lists */}
        <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterItems.map((item, i) => (
              <ProductItem key={i} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </article>
      </section>
    </div>
  )
}

export default ProductList