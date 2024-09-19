import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/ProductList';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetailsPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/collections' element={< Products />} />
        <Route path='/about' element={< About />} />
        <Route path='/Cart' element={< Cart />} />
        <Route path='/product/:id' element={< ProductDetails />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/login' element={< Login />}  />
        <Route path='/orders' element={< Orders />}  />
      </Routes>
    </div>
  )
}

export default App