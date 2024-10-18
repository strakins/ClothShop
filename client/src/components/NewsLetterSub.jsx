

const NewsLetterSub = () => {

  const NewsLetterSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
      </p>
      <form onSubmit={NewsLetterSubmit} className="w-full sm:w-1/2 flex items-center gap-4 mx-auto my-12 pl-6 border-2">
        <input 
          type="email" 
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button type="submit" className="bg-black text-white yext-xs px-10 py-2">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterSub

// 1:40
