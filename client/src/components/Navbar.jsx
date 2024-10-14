import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets.js';
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react';



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
        
        <img src={assets.logo} alt='logo' className='w-24' />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                <p>Collections</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact Us</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex justify-center items-center gap-4'>
            <div className='flex'>
                <img src={assets.search_icon} alt='search' className='w-4 cursor-pointer'/>
            </div>

            <div className='group relative'>
                <img src={assets.profile_icon} alt='profile' className='w-4 cursor-pointer' />
                <div className='group-hover:block hidden right-0 pt-4 absolute dropdown-menu'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-400 text-gray-100 rounded'>
                        <p className='cursor-pointer hover:text-blue-600'>My Profile</p>
                        <p className='cursor-pointer hover:text-blue-600'>Orders</p>
                        <p className='cursor-pointer hover:text-blue-600'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-4 min-w-5' alt='add to cart'/>
                <p className='absolute right-[-5px] bottom-[-10px] rounded-md text-[10px] w-4 text-white text-center leading-4  bg-black'>5</p>
            </Link>
            
            <MdMenu onClick={() => setShowMenu(true)} className='text-2xl sm:hidden cursor-pointer' />
        </div>
        {/* Mobile Menu */}
        
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${showMenu ? "w-full" : "w-0"}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setShowMenu(false)} className='flex py-3 items-center gap-4'>
                    <MdClose className='text-2xl' />
                </div>
                <NavLink className='py-3 pl-6 border' onClick={() => setShowMenu(false)} to='/'>HOME</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={() => setShowMenu(false)} to='/collections'>Collections</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={() => setShowMenu(false)} to='/about'>About Us</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={() => setShowMenu(false)} to='/contactus'>Contact Us</NavLink>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar