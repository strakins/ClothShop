import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import {  RiArrowDropRightFill } from "react-icons/ri";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


const ProductList = () => {

  const {products, search, showSearch} = useContext(ShopContext);

  const [filterItems, setFilterItems] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // create a category selection/display method
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  } 

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {

    // create a copy of products array
    let productsCopy = products.slice();
    
    if(showSearch && search) {
      productsCopy = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterItems(productsCopy)
  }

  // Sort Prodcts
  const sortProducts = () => {

    let filteredProductsCopy = filterItems.slice();

    switch (sortType) {
      case "low-high":
        setFilterItems(filteredProductsCopy.sort((a, b) => (a.price - b.price)));
        break;
      case "high-low":
        setFilterItems(filteredProductsCopy.sort((a, b) => (b.price - a.price)));
        break;
      default: 
        applyFilter();
        break;
    }

  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType])

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
              <input className="" type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-6 py-3 my-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-semibold"> TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex-1">
        <article className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}  />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </article>

        {/* Product Lists */}
        <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterItems.map((item, i) => (
              <ProductItem key={i} productId={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </article>
      </section>
    </div>
  )
}

export default ProductList