import { useGlobalContext } from "../context/context"
import {Link} from 'react-router-dom'
const Cart = () => {
    const { state, deleteItem, decrement } = useGlobalContext();


    return (
        <div>
            {
                state.data.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h4>{item.price}</h4>
                        <img width={100} src={item.img} alt="" />
                        <span>{item.amount}</span>
                        <button onClick={() => deleteItem(item.id)}>delete</button>
                        <button onClick={() => decrement(item.id)}>+</button>
                        <Link to={`cart-details/${item.id}`}>
                        details
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Cart