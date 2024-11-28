import { useState } from "react"

const login = () => {

  const [currentState, setCurrentState] = useState("Sign up")
  return (
    <form className="flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-xl font-bold capitalize">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name"/>
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email"/>
    </form>
  )
}

export default login