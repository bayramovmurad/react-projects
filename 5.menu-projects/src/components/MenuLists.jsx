import {Link} from 'react-router-dom'

const MenuLists = ({ item, }) => {
  const { id, title, price, img, desc } = item;
  return (
    <div>
     
      <img width={100} src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <h5>{price}</h5>
      <Link to={`/menu-details/${id}`}>
      Details
      </Link>
    </div>
  )
}
export default MenuLists