import Title from '../components/Title';
import CartItemsTotal from '../components/CartItemsTotal';
import { assets } from '../assets/frontend_assets/assets';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';


const PlaceOrder = () => {

  const {navigate} = useContext(ShopContext)
  const [paymentMethod, setPaymentMethod] = useState('cod')

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t">
      {/* Left Side of the Page */}
      <section className="flex flex-col gap-4 w-full sm:max-w-[480px]">

        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
      </section>


      {/* Righyt Side */}

      <section className='mt-8'>
        <div className=' min-w-80'>
          <CartItemsTotal />
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Available Payment Method */}
          <div  className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setPaymentMethod('stripe')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe'? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt='stripe-logo' />
            </div>
            <div onClick={() => setPaymentMethod('razopay')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razopay'? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt='stripe-logo' />
            </div>
            <div onClick={() => setPaymentMethod('cod')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod'? 'bg-green-400' : '' }`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <div className="w-full text-end">
            <button  
              onClick={() => navigate('/orders')}
              className="uppercase bg-blue-500 text-white text-sm my-8 px-8 py-3"
            >
              PLACE ORDER
            </button>
          </div>
      </section>
    </div>
  )
}

export default PlaceOrder