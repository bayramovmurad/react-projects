import Cart from "./pages/Cart"
import { Routes, Route } from 'react-router-dom'
import CartDetail from "./pages/CartDetail"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="cart-details/:id" element={<CartDetail />} />
      </Routes>
    </div>
  )
}
export default App