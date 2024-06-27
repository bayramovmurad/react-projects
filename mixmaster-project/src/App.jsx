import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}
export default App