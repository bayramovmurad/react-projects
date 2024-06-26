import {useParams} from 'react-router-dom';
import menu from '../data/menu';


const MenuDetails = () => {
  const {id} = useParams();
  const menuDetails = menu.find((item) => item.id == id);
  console.log(menuDetails);
  const { title, price, img, desc } = menuDetails;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h5>{price}</h5>
      <p>{desc}</p>

    </div>
  )
}
export default MenuDetails