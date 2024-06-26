import Menu from "./pages/Menu"
import { Routes, Route } from 'react-router-dom'
import MenuDetails from "./pages/MenuDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path="/menu-details/:id" element={<MenuDetails />} />
      </Routes>
    </>
  )
}
export default App