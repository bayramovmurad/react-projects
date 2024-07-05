import { useState } from "react";

const PorductList = ({ item,addToBasket }) => {
    const { id, price, img, title, amount } = item;
    const [count, setCount] = useState(amount);

    const decreaseBtn = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const increaseBtn = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    const handleAddToBasket = () => {
        addToBasket({ ...item, amount: count });
    };

    return (
        <div>
            <img width={200} height={200} src={img} alt={title} />
            <h2>{title}</h2>
            <h3>{(price.substring(0,4)) * count}</h3>
            <span>{count}</span> 
            <div>
                <button onClick={() => decreaseBtn()}>-</button>
                <button onClick={() => increaseBtn()}>+</button>
            </div>
            <button onClick={handleAddToBasket}>basket</button>
        </div>
    )
}
export default PorductList