import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';


const CartDetail = () => {
    const { id } = useParams();
    const { state } = useGlobalContext()
    const CartDetails = state.data.find(item => item.id == id);
    const { title, img, price, amount } = CartDetails;
    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <img width={100} src={img} alt="" />
            <span>{amount}</span>
        </div>
    )
}
export default CartDetail