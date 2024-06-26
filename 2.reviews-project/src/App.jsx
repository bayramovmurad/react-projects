import Review from "./pages/Review"
import { Route, Routes } from 'react-router-dom'
import ReviewDetails from "./pages/ReviewDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/review-details/:id" element={<ReviewDetails/>} />
      </Routes>
    </>
  )
}
export default App