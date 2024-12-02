import { useState } from "react"

const login = () => {

  const [currentState, setCurrentState] = useState("Login")
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  }



  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-xl font-bold capitalize">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? "" : <input type="text" className="w-full px-3 py-2 border border-gray-800" required placeholder="Name"/>}
      <input type="email" className="w-full px-3 py-2 border border-gray-800 " required placeholder="Email"/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800 " required placeholder="Password"/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password? </p>
        {
          currentState === "Login"
          ? <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
          : <p onClick={() => setCurrentState("Login")} className="cursor-pointer">Login Here</p>
        }
      </div>
      <button className="bg-blue-500 text-base px-8 py-2 text-white">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  )
}

export default login