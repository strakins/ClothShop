import { NavLink } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets.js';


const Navbar = () => {
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

        <div className='flex'>
            <img src='' alt=''/>
        </div>
    </div>
  )
}

export default Navbar