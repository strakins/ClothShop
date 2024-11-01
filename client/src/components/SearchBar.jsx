import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoSearch } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [searchBarVisibile, setSearchBarVisibile] = useState(false);

    // Make searchbar only Visibile on Collections page
    const location = useLocation();

    useEffect(() => {
      if(location.pathname.includes('collections')) {
        setSearchBarVisibile(true)
      } else {
        setSearchBarVisibile(false)
      }
    }, [location])

    return showSearch && searchBarVisibile ? (
        <div className="border-t border-b bg-gray-100 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="flex-1 outline-none bg-inherit text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearch className="text-2xl" />
            </div>
            <MdOutlineCancel className="inline text-2xl cursor-pointer" onClick={() => setShowSearch(false)}/>
            
            
        </div>
    ) 
    : 
    null;
}

export default SearchBar
