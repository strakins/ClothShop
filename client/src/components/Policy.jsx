import { RiExchangeFundsFill } from "react-icons/ri";
import { SiFsecure } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
// 1:38

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      
        <div className="">
            <RiExchangeFundsFill className="text-3xl m-auto mb-5" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="">
            <SiFsecure className="text-3xl m-auto mb-5" />
            <p className="font-semibold">7 days Return Policy</p>
            <p className="text-gray-400">We provide a 7day free return </p>
        </div>
        <div className="">
            <BiSupport className="text-3xl m-auto mb-5" />
            <p className="font-semibold">Amazing Customer Support</p>
            <p className="text-gray-400">We have the best, easy to access customer support</p>
        </div>

    </div>
  )
}

export default Policy
