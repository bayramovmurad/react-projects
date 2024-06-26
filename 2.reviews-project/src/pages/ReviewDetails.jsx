import { useParams } from "react-router-dom"
import reviews from "../data/reviews";


const ReviewDetails = () => {
  const {id} = useParams();
  const personDetail = reviews.find(item =>  item.id == id);
  const {text} = personDetail
  return (
    <div>{text}</div>
  )
}
export default ReviewDetails